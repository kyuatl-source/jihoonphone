const $ = (selector) => document.querySelector(selector);
const introL = $("#introL"), lockL = $("#lockL"), passL = $("#passL"), nameL = $("#nameL"), homeL = $("#homeL"), appL = $("#appL"), wall = $("#wall"), sb = $("#sb"), island = $("#island"), islandArt = $("#islandArt"), hb = $("#hb");
const nmInput = $("#nmInput"), nmOk = $("#nmOk");

let currentApp = null;      // 当前打开的 App id
let appStack = [];          // 页面栈 [{ title, back, large, cls, body, extra, full }]
let playingSong = -1;       // 正在播放的歌曲下标
let playerPlaying = false;  // 锁屏 / 桌面小组件里的播放器是否正在放（只有写了 audio 的手机才会真的出声）

// 当前屏幕上的那台手机：开头是志薰的，结局会切到她自己的
let PHONE = phoneData;
let storyPhase = "his";     // his | her
let storyRoute = "open";    // open（翻开他的手机）| noOpen（不打开，直接去她的手机）
let endingKey = null;       // christmasEve | christmas | newYear
let introChoice = "open";   // 开屏点了哪个按钮，决定昵称页之后去哪
let noOpenPlan = null;      // 这一次随机抽中的不打开剧情
let endingSent = false;     // 她是否已经按下发送
let storyToken = 0;         // 换页面后让还没跑完的延迟消息失效

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}
const chev = () => `<svg viewBox="0 0 8 13" width="8" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 1 1 6.5 7 12"/></svg>`;
const chevR = () => `<svg viewBox="0 0 8 13" width="8" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1 7 6.5 1 12"/></svg>`;

/* ===== App 图标 ===== */
const iconPlay = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>`;
const iconPause = `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4.5" width="4.2" height="15" rx="1.4"/><rect x="13.8" y="4.5" width="4.2" height="15" rx="1.4"/></svg>`;

function appIcon(app) {
  const l = PHONE.lockScreen || {};
  const id = typeof app === "string" ? app : app.id;
  const count = (typeof app === "object" && app.count) || "23";
  const icons = {
    notes: `<svg viewBox="0 0 60 60"><defs><clipPath id="cN"><rect width="60" height="60" rx="14"/></clipPath></defs><g clip-path="url(#cN)"><rect width="60" height="60" fill="#fff"/><rect width="60" height="19" fill="#ffce00"/><g stroke="#b8b8bd" stroke-width="1.5"><line x1="11" y1="29" x2="49" y2="29"/><line x1="11" y1="37" x2="49" y2="37"/><line x1="11" y1="45" x2="49" y2="45"/><line x1="11" y1="53" x2="49" y2="53"/></g></g></svg>`,
    photos: `<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="14" fill="#fff"/><g transform="translate(30 31)"><g transform="rotate(0)"><path d="M0 1C4.8-3 5.4-10.6 0-14.4-5.4-10.6-4.8-3 0 1Z" fill="#ffd60a"/></g><g transform="rotate(45)"><path d="M0 1C4.8-3 5.4-10.6 0-14.4-5.4-10.6-4.8-3 0 1Z" fill="#ff9f0a"/></g><g transform="rotate(90)"><path d="M0 1C4.8-3 5.4-10.6 0-14.4-5.4-10.6-4.8-3 0 1Z" fill="#ff3b30"/></g><g transform="rotate(135)"><path d="M0 1C4.8-3 5.4-10.6 0-14.4-5.4-10.6-4.8-3 0 1Z" fill="#ff2d55"/></g><g transform="rotate(180)"><path d="M0 1C4.8-3 5.4-10.6 0-14.4-5.4-10.6-4.8-3 0 1Z" fill="#af52de"/></g><g transform="rotate(225)"><path d="M0 1C4.8-3 5.4-10.6 0-14.4-5.4-10.6-4.8-3 0 1Z" fill="#007aff"/></g><g transform="rotate(270)"><path d="M0 1C4.8-3 5.4-10.6 0-14.4-5.4-10.6-4.8-3 0 1Z" fill="#30b0c7"/></g><g transform="rotate(315)"><path d="M0 1C4.8-3 5.4-10.6 0-14.4-5.4-10.6-4.8-3 0 1Z" fill="#34c759"/></g><circle r="2.4" fill="#fff"/></g></svg>`,
    calendar: `<svg viewBox="0 0 60 60"><defs><clipPath id="cC"><rect width="60" height="60" rx="14"/></clipPath></defs><rect width="60" height="60" rx="14" fill="#fff"/><g clip-path="url(#cC)"><rect width="60" height="24" fill="#ff3b30"/><text x="30" y="16.5" fill="#fff" font-size="10" font-weight="600" text-anchor="middle">${l.month}</text></g><text x="30" y="44" fill="#ff3b30" font-size="24" font-weight="400" text-anchor="middle">${l.day}</text><text x="30" y="54" fill="#ff3b30" font-size="8.5" font-weight="600" text-anchor="middle">${l.weekday}</text></svg>`,
    kakaotalk: `<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="14" fill="#fee500"/><path d="M30 12c-9.4 0-17 5.9-17 13.1 0 4.6 3.1 8.7 7.7 11l-2 7.2 8.1-5.2c1 .15 2.1.22 3.2.22 9.4 0 17-5.9 17-13.2S39.4 12 30 12z" fill="#3c1e1e"/></svg>`,
    phone: `<svg viewBox="0 0 60 60"><defs><linearGradient id="gP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ef07e"/><stop offset="1" stop-color="#0bc233"/></linearGradient></defs><rect width="60" height="60" rx="14" fill="url(#gP)"/><g transform="translate(7 7) scale(1.92)" fill="#fff"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></g></svg>`,
    daysmatter: `<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="14" fill="#fff"/><text x="30" y="17.5" fill="#ff3b30" font-size="6.6" font-weight="700" text-anchor="middle" letter-spacing=".4">DAYS MATTER</text><text x="30" y="45.5" fill="#111" font-size="27" font-weight="600" text-anchor="middle">${count}</text></svg>`,
    applemusic: `<svg viewBox="0 0 60 60"><defs><linearGradient id="gM" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb5c74"/><stop offset="1" stop-color="#fa233b"/></linearGradient></defs><rect width="60" height="60" rx="14" fill="url(#gM)"/><g fill="#fff"><circle cx="23" cy="46" r="6"/><circle cx="43" cy="40" r="6"/></g><path d="M29 46V18l20-4.5V40" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    temu: `<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="14" fill="#fa6400"/><path d="M30 8l2 4.6 4.6 2-4.6 2-2 4.6-2-4.6-4.6-2 4.6-2z" fill="#fff"/><text x="30" y="44" fill="#fff" font-size="16" font-weight="800" text-anchor="middle" letter-spacing="-0.5">temu</text></svg>`,
    safari: `<svg viewBox="0 0 60 60"><defs><linearGradient id="gS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#20c8ff"/><stop offset="1" stop-color="#0a84ff"/></linearGradient></defs><rect width="60" height="60" rx="14" fill="url(#gS)"/><circle cx="30" cy="30" r="20" fill="none" stroke="#fff" stroke-width="2.2"/><path d="M39 21 26 26 21 39 34 34z" fill="#ff3b30"/><path d="M39 21 30 30 34 34z" fill="#fff"/></svg>`,
    chatgpt: `<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="14" fill="#111"/><g fill="none" stroke="#fff" stroke-width="2.4"><ellipse cx="30" cy="30" rx="8.6" ry="14"/><ellipse cx="30" cy="30" rx="8.6" ry="14" transform="rotate(60 30 30)"/><ellipse cx="30" cy="30" rx="8.6" ry="14" transform="rotate(120 30 30)"/></g></svg>`
  };
  return icons[id] || "";
}

/* ===== 屏幕切换 ===== */
function showScreen(name) {
  [introL, lockL, passL, nameL, homeL, appL].forEach((el) => el.classList.remove("active"));
  ({ intro: introL, lock: lockL, pass: passL, name: nameL, home: homeL, app: appL })[name].classList.add("active");
  sb.classList.toggle("light", name !== "app");
  sb.classList.toggle("lockmode", name === "lock");
  hb.classList.toggle("light", name !== "app");
}

/* ===== 主屏渲染 ===== */
const IMPLEMENTED_APPS = new Set(["notes", "calendar", "kakaotalk", "applemusic", "temu", "chatgpt", "photos", "daysmatter"]);

function widgetCalendarHtml() {
  const l = PHONE.lockScreen || {};
  const monthIndex = Math.max(1, MONTH_NAMES.indexOf(l.month) + 1);
  const today = Number(l.day) || 23;
  const year = new Date().getFullYear();
  const lead = new Date(year, monthIndex - 1, 1).getDay();
  const daysInMonth = new Date(year, monthIndex, 0).getDate();
  const cells = [...Array(lead).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]
    .map((d) => d == null ? '<span class="wc-e"></span>' : `<span class="wc-d${d === today ? " on" : ""}">${d}</span>`)
    .join("");
  return `<div class="wc-top"><span class="wc-m">${escapeHtml(l.month)}</span><span class="wc-t">${today} ${escapeHtml(String(l.weekday).replace("星期", "周"))}</span></div>
    <div class="wc-grid">${[...("日一二三四五六")].map((w) => `<span class="wc-h">${w}</span>`).join("")}${cells}</div>
    <div class="wc-foot">${escapeHtml(l.lunar || "")}</div>`;
}
function widgetMusicHtml() {
  const p = (PHONE.lockScreen && PHONE.lockScreen.player) || {};
  const playing = !!p.audio && playerPlaying;
  return `<span class="cov"></span>
    <span class="wm-info"><span class="wm-t">${escapeHtml(p.title)}</span><span class="wm-a">${escapeHtml(p.artist)}</span></span>
    <button class="wm-play${playing ? "" : " paused"}" data-home-play aria-label="${playing ? "暂停" : "播放"}">${playing ? iconPause : iconPlay}</button>`;
}
function renderHome() {
  const l = PHONE.lockScreen || {};
  const photo = (PHONE.home && PHONE.home.photo) || l.wallpaper || "pics/桌面.jpg";
  $("#wCal").innerHTML = widgetCalendarHtml();
  $("#wPhoto").innerHTML = `<img src="${escapeHtml(photo)}" alt="" />`;
  $("#wMusic").innerHTML = widgetMusicHtml();

  const appBtn = (app) => `<button class="app" data-app="${app.id}" aria-label="打开${app.name}">
      <span class="icon"><span class="ic">${appIcon(app)}</span>${app.badge ? `<span class="bdg">${escapeHtml(String(app.badge))}</span>` : ""}</span>
      <span class="lbl">${escapeHtml(app.name)}</span>
    </button>`;
  $("#hgrid").innerHTML = (PHONE.homeApps || []).map(appBtn).join("");
  $("#dock").innerHTML = (PHONE.dockApps || []).map(appBtn).join("");

  const p = l.player;
  $("#wMusic").style.display = p ? "" : "none";
  $("#lkTemp").textContent = l.weather || "";
  $("#sbc").textContent = l.carrier || "中国移动";
  const battery = Math.max(0, Math.min(100, Number(l.battery) || 79));
  $("#sbp").textContent = `${battery}%`;
  $("#sbBat").setAttribute("width", (23 * battery / 100).toFixed(1));
  // 她的锁屏没有正在播放的歌，就把音乐挂件收起来
  $("#lkPlayer").style.display = p ? "" : "none";
  // 写了 audio 的播放器按真实状态显示；没有音频的沿用原来「正在播放」的样子
  const playing = p && p.audio ? playerPlaying : true;
  $("#lkPlayer").innerHTML = p ? `
    <div class="lp-head">
      <span class="cov"></span>
      <span class="lp-tx"><b>${escapeHtml(p.title)}</b><small>${escapeHtml(p.artist)}</small></span>
      <span class="lp-eq${playing ? "" : " paused"}"><i></i><i></i><i></i></span>
    </div>
    <div class="lp-bar"><i style="width:${Math.max(1, Math.min(100, Number(p.progress) || 2))}%"></i></div>
    <div class="lp-times"><span>${escapeHtml(p.elapsed)}</span><span>${escapeHtml(p.remaining)}</span></div>
    <div class="lp-ctrl">
      <button class="lp-b" data-lp="prev" aria-label="上一首"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h2.2v14H6zM20 5v14L9.2 12z"/></svg></button>
      <button class="lp-b play${playing ? "" : " paused"}" data-lp="play" aria-label="${playing ? "暂停" : "播放"}">${playing ? iconPause : iconPlay}</button>
      <button class="lp-b" data-lp="next" aria-label="下一首"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.8 5H18v14h-2.2zM4 5v14l10.8-7z"/></svg></button>
    </div>` : "";
  renderNotif();
}

// 锁屏上的通知条（她的手机才会用到）
function renderNotif() {
  const el = $("#lkNotif");
  if (!el) return;
  const n = (PHONE.lockScreen || {}).notification;
  el.innerHTML = n ? `<div class="lk-nf">
      <span class="lk-nf-ic">${appIcon({ id: "kakaotalk" })}</span>
      <span class="lk-nf-tx"><b>${escapeHtml(n.app || "")}</b><span>${escapeHtml(withNick(n.title || ""))}</span><p>${escapeHtml(withNick(n.text || ""))}</p></span>
      <span class="lk-nf-t">${escapeHtml(n.time || "")}</span>
    </div>` : "";
  el.hidden = !n;
}

/* ===== 锁屏 / 桌面小组件里的播放器 ===== */
const playerData = () => (PHONE.lockScreen || {}).player || null;
const playerAudioEl = () => $("#lkAudio");

function fmtPlayerTime(sec) {
  const s = Math.max(0, Math.floor(Number(sec) || 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// 播放 / 暂停时，锁屏播放器和桌面小组件上的按钮一起变
function setPlayerUi() {
  const lp = $("#lkPlayer .lp-b.play");
  if (lp) {
    lp.classList.toggle("paused", !playerPlaying);
    lp.innerHTML = playerPlaying ? iconPause : iconPlay;
    lp.setAttribute("aria-label", playerPlaying ? "暂停" : "播放");
  }
  const eq = $("#lkPlayer .lp-eq");
  if (eq) eq.classList.toggle("paused", !playerPlaying);
  const wm = $("#wMusic .wm-play");
  if (wm) {
    wm.classList.toggle("paused", !playerPlaying);
    wm.innerHTML = playerPlaying ? iconPause : iconPlay;
    wm.setAttribute("aria-label", playerPlaying ? "暂停" : "播放");
  }
}

// 进度条和时间跟着音频走
function renderPlayerTimes() {
  const a = playerAudioEl();
  const bar = $("#lkPlayer .lp-bar i");
  const times = $("#lkPlayer .lp-times");
  if (!a || !bar || !times) return;
  const total = Number.isFinite(a.duration) && a.duration > 0 ? a.duration : 0;
  if (!total) return;
  const cur = Math.min(a.currentTime || 0, total);
  bar.style.width = `${Math.max(1, Math.min(100, (cur / total) * 100))}%`;
  times.innerHTML = `<span>${fmtPlayerTime(cur)}</span><span>-${fmtPlayerTime(total - cur)}</span>`;
}

// 换到另一台手机时，把播放器里的音频换成那一台的
function loadPlayerAudio() {
  const p = playerData();
  const a = playerAudioEl();
  if (!a) return;
  a.pause();
  try { a.currentTime = 0; } catch (e) { /* 还没加载时忽略 */ }
  playerPlaying = false;
  if (p && p.audio) {
    a.src = p.audio;
    a.load();
  } else {
    a.removeAttribute("src");
  }
  setPlayerUi();
}

// 播放键：有音频就真的放，没有音频的装饰播放器只切换图标
function handlePlayerButton(btn) {
  const p = playerData();
  if (p && p.audio) {
    const a = playerAudioEl();
    if (!a) return;
    if (a.paused) {
      const played = a.play();
      if (played && played.catch) played.catch(() => { /* 被浏览器拦下时保持暂停图标 */ });
    } else {
      a.pause();
    }
    return;
  }
  if (btn) btn.innerHTML = btn.classList.toggle("paused") ? iconPlay : iconPause;
}

/* ===== 页面导航 ===== */
function pageHtml(p) {
  const cls = ["pg", p.cls || ""].filter(Boolean).join(" ");
  const center = p.center
    ? `<div class="nb-title${p.centerAlways ? " always" : ""}">${p.center}</div>`
    : `<div class="nb-title">${escapeHtml(p.title || "")}</div>`;
  return `<div class="${cls}">
    <div class="nav">
      <button class="nb-back">${chev()}<span>${escapeHtml(p.back)}</span></button>
      ${center}
      <div class="nb-right">${p.right || ""}</div>
    </div>
    <div class="scroll">${p.large ? `<h1 class="lt">${escapeHtml(p.large)}</h1>` : ""}${p.body || ""}</div>
    ${p.extra || ""}
  </div>`;
}
let topPageEl = null; // 当前最上层的页面节点，避免动画期间取错节点

function renderTop(anim) {
  const p = appStack[appStack.length - 1];
  const prev = topPageEl && appL.contains(topPageEl) ? topPageEl : null;
  const html = p.full ? p.full() : pageHtml(p);

  // 清理上一次仍在动的页面
  appL.querySelectorAll(".pg-leave, .pg-exit").forEach((node) => { if (node !== prev) node.remove(); });

  const holder = document.createElement("div");
  holder.innerHTML = html;
  const next = holder.firstElementChild;

  if (prev && anim === "fwd") {
    next.classList.add("anim-fwd");
    prev.classList.add("pg-leave");
    appL.appendChild(next);
    setTimeout(() => { prev.remove(); next.classList.remove("anim-fwd"); }, 420);
  } else if (prev && anim === "back") {
    next.classList.add("anim-back");
    appL.insertBefore(next, prev);
    prev.classList.add("pg-exit");
    setTimeout(() => { prev.remove(); next.classList.remove("anim-back"); }, 420);
  } else {
    appL.innerHTML = "";
    appL.appendChild(next);
  }
  topPageEl = next;

  const sc = next.querySelector(".scroll");
  if (sc) {
    sc.addEventListener("scroll", () => next.classList.toggle("scrolled", sc.scrollTop > 16), { passive: true });
    sc.scrollTop = p.scrollTop || 0;
  }
  // 聊天页滚动到最新消息
  const msgs = next.querySelector(".kt-msgs, .msgs");
  if (msgs) msgs.scrollTop = msgs.scrollHeight;
  const cgThread = next.querySelector(".cg-thread");
  if (cgThread) {
    const btn = next.querySelector(".cg-down");
    if (btn) btn.classList.toggle("show", cgThread.scrollHeight - cgThread.clientHeight > 80);
  }
  syncStoryCta();
}
function pushPage(p) {
  const cur = appStack[appStack.length - 1];
  const sc = topPageEl && topPageEl.querySelector(".scroll");
  if (cur && sc) cur.scrollTop = sc.scrollTop;
  appStack.push(p);
  renderTop("fwd");
}
function popPage() {
  storyToken++;   // 离开页面后，结局里还没发完的消息不再继续
  if (appStack.length > 1) { appStack.pop(); renderTop("back"); }
  else exitApp();
}
function exitApp() {
  appStack = []; currentApp = null; playingSong = -1;
  storyToken++;
  closePhotoViewer();
  document.body.classList.remove("kt-open", "cg-open", "am-open", "photos-open");
  wall.classList.remove("dim");
  island.classList.remove("act", "music");
  if (islandArt) islandArt.innerHTML = "";
  appL.innerHTML = ""; topPageEl = null;
  syncStoryCta();
  showScreen("home");
}
function openApp(appId) {
  currentApp = appId; playingSong = -1;
  if (appId === "temu") temuTab = "order";
  document.body.classList.toggle("kt-open", appId === "kakaotalk");
  document.body.classList.toggle("cg-open", appId === "chatgpt");
  document.body.classList.toggle("am-open", appId === "applemusic");
  document.body.classList.toggle("photos-open", appId === "photos");
  if (appId !== "applemusic") {
    island.classList.remove("act", "music");
    if (islandArt) islandArt.innerHTML = "";
  }
  wall.classList.add("dim");
  const pages = { notes: notesPage, calendar: calendarPage, kakaotalk: kakaotalkPage, applemusic: applemusicPage, temu: temuPage, chatgpt: chatgptPage, photos: photosPage, daysmatter: daysmatterPage };
  appStack = [pages[appId]()];
  appL.innerHTML = ""; topPageEl = null;
  renderTop("fwd");
  showScreen("app");
}

/* ===== 备忘录 ===== */
const NOTES_ALL = "iCloud全部备忘录";
const NOTES_FOLDERS = ["日记", "备忘录"];
const MONTH_NAMES = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

const folderIcon = (color) => `<svg viewBox="0 0 24 24" fill="${color}"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`;
const quickIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="#ffb300" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`;
const sharedIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="#0a84ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const composeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M15.6 8.4 10 14l-2.5.6.6-2.5 5.6-5.6a1.3 1.3 0 0 1 1.9 1.9z"/></svg>`;
const moreIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>`;
const shareIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V3"/><path d="m7.5 7.5 4.5-4.5 4.5 4.5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>`;

function parseNoteDate(raw) {
  const digits = String(raw).replace(/\D/g, "");
  if (digits.length >= 6) {
    const year = 2000 + Number(digits.slice(0, 2));
    const month = Number(digits.slice(2, 4));
    const day = Number(digits.slice(4, 6));
    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) return { year, month, day };
  }
  return { year: 2026, month: 1, day: 1 };
}
const noteDateFull = (raw) => { const d = parseNoteDate(raw); return `${d.year}年${d.month}月${d.day}日`; };
const noteSortKey = (raw) => { const d = parseNoteDate(raw); return `${d.year}${String(d.month).padStart(2, "0")}${String(d.day).padStart(2, "0")}`; };

// 写了 title 就用 title，否则统一用日期当标题，例如 260913
function noteTitle(note) {
  if (note.title) return withNick(note.title);
  const digits = String(note.date || "").replace(/\D/g, "");
  if (digits.length >= 6) return digits.slice(0, 6);
  return withNick(note.body.split("\n").map((s) => s.trim()).find(Boolean) || "备忘录");
}
// 标题另行显示，预览从正文第一行开始
function notePreview(note) {
  const lines = note.body.split("\n").map((s) => s.trim()).filter(Boolean);
  return withNick(lines.map((s) => s.replace(/^\*\s+/, "")).join(" ").slice(0, 60));
}
function allNotesSorted() {
  return PHONE.notes
    .map((note, index) => ({ note, index }))
    .sort((a, b) => noteSortKey(b.note.date).localeCompare(noteSortKey(a.note.date)));
}
function notesInFolder(category) {
  return allNotesSorted().filter(({ note }) => note.category === category);
}

/* --- 视图一：文件夹（notesFlat 的手机没有这一层，直接进列表） --- */
function notesPage() {
  if (PHONE.notesFlat) return notesListPage("all");
  const total = PHONE.notes.length;
  const quickCount = PHONE.notes.filter((n) => n.quick).length;
  const sharedCount = PHONE.notes.filter((n) => n.shared).length;

  const folderRow = (key, label, count, icon) => `<button class="nfold" data-folder="${key}">
      <span class="nfold-ic">${icon}</span>
      <span class="nfold-tx">${escapeHtml(label)}</span>
      <span class="nfold-ct">${count}</span>
      <span class="nfold-ch">${chevR()}</span>
    </button>`;

  const body = `
    <div class="ngroup">${folderRow("quick", "快速备忘录", quickCount, quickIcon)}${folderRow("shared", "共享", sharedCount, sharedIcon)}</div>
    <div class="gh gh-plain">iCloud</div>
    <div class="ngroup">
      ${folderRow("all", NOTES_ALL, total, folderIcon("#ffce00"))}
      ${NOTES_FOLDERS.map((c) => folderRow(c, c, notesInFolder(c).length, folderIcon("#ffce00"))).join("")}
    </div>`;
  const extra = `<div class="notes-bottom">
      <button class="nsearch" aria-label="搜索">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        搜索
      </button>
      <button class="ncompose" aria-label="新建备忘录">${composeIcon}</button>
    </div>`;
  return {
    title: "文件夹", back: "主屏幕", large: "文件夹", cls: "grouped notes-pg notes-root",
    right: `<button class="nb-act" data-edit>编辑</button><button class="nb-ic" aria-label="新建文件夹">${composeIcon}</button>`,
    body, extra
  };
}

/* --- 视图二：备忘录列表 --- */
function notesListPage(folder) {
  const flat = !!PHONE.notesFlat;
  let list, label;
  if (folder === "all") { list = allNotesSorted(); label = NOTES_ALL; }
  else if (folder === "quick") { list = allNotesSorted().filter(({ note }) => note.quick); label = "快速备忘录"; }
  else if (folder === "shared") { list = allNotesSorted().filter(({ note }) => note.shared); label = "共享"; }
  else { list = notesInFolder(folder); label = folder; }

  // 按月份分组
  const groups = [];
  list.forEach((item) => {
    const { year, month } = parseNoteDate(item.note.date);
    const key = `${year}-${month}`;
    let group = groups.find((g) => g.key === key);
    if (!group) { group = { key, label: MONTH_NAMES[month - 1], items: [] }; groups.push(group); }
    group.items.push(item);
  });

  const card = ({ note, index }) => `<button class="nrow" data-note="${index}" data-cat="${escapeHtml(note.category || "")}">
      <div class="nrow-main">
        <div class="nrow-t">${escapeHtml(noteTitle(note))}</div>
        <div class="nrow-m"><span>${noteDateFull(note.date)}</span>${flat ? "" : `<span class="nrow-f">${escapeHtml(note.category || label)}</span>`}</div>
        <div class="nrow-p">${escapeHtml(notePreview(note))}</div>
      </div>
      ${note.image ? `<span class="nrow-thumb"><img src="${escapeHtml(note.image)}" alt="" /></span>` : ""}
    </button>`;

  const body = groups.length
    ? groups.map((g) => `<div class="ndh">${g.label}</div><div class="nlist">${g.items.map(card).join("")}</div>`).join("")
    : `<div class="empty">暂无备忘录</div>`;

  if (flat) return {
    title: "备忘录", back: "主屏幕", large: "备忘录",
    cls: "grouped notes-pg notes-list-pg", body,
    right: `<button class="nb-act" data-edit>编辑</button><button class="nb-ic" aria-label="新建备忘录">${composeIcon}</button>`
  };
  return {
    title: label, back: "文件夹", center: `${escapeHtml(label)}<span class="cnt">${list.length}</span>`, centerAlways: true,
    cls: "grouped notes-pg notes-list-pg", body,
    right: `<button class="nb-ic" data-more aria-label="更多">${moreIcon}</button>`
  };
}

/* --- 视图三：正文 --- */
function noteDetailPage(index, backLabel) {
  const note = PHONE.notes[index];
  // 第一行同样用日期当标题，正文原样接在后面
  const paragraphs = [noteTitle(note), ...note.body.split("\n").map((s) => s.trim()).filter(Boolean)];
  const meta = `${noteDateFull(note.date)}${note.time ? " " + escapeHtml(note.time) : ""}`;
  const img = note.image ? `<img class="note-img" src="${escapeHtml(note.image)}" alt="" />` : "";
  const body = `<article class="note-doc">
      <div class="note-meta">${meta}</div>
      <div class="note-body">${paragraphs
        .map((p, i) => {
          const li = /^\*\s+/.test(p);
          const text = li ? p.replace(/^\*\s+/, "") : p;
          return `<p${li ? ' class="note-li"' : ""}>${escapeHtml(withNick(text))}</p>${note.image && i === 1 ? img : ""}`;
        })
        .join("")}${note.image && paragraphs.length < 2 ? img : ""}</div>
    </article>`;
  const extra = `<div class="note-tools">
      <button aria-label="勾选框"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="m8.5 12.2 2.4 2.4 4.6-5"/></svg></button>
      <button aria-label="添加照片"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></button>
      <button aria-label="画笔"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7-3-3-7 7-1 4z"/><path d="M16 5l3 3"/></svg></button>
      <button class="new" aria-label="新建备忘录">${composeIcon}</button>
    </div>`;
  return {
    title: "", back: backLabel || "备忘录", cls: "grouped notes-pg note-detail-pg", body, extra,
    right: `<button class="nb-ic" data-share aria-label="分享">${shareIcon}</button><button class="nb-ic" data-more aria-label="更多">${moreIcon}</button>`
  };
}

/* ===== 日历 ===== */
const CAL_MONTHS = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
const CAL_WEEK_FULL = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const CAL_DOT = ["#ff3b30", "#af52de", "#0a84ff"];
let calState = null;

function calParseDate(raw) {
  const s = String(raw || "").trim();
  let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return { y: Number(m[1]), m: Number(m[2]), d: Number(m[3]) };
  m = s.match(/^(\d{2})(\d{2})(\d{2})$/);
  if (m) return { y: 2000 + Number(m[1]), m: Number(m[2]), d: Number(m[3]) };
  m = s.match(/^(\d{1,2})\/(\d{1,2})$/);
  if (m) return { y: 2026, m: Number(m[1]), d: Number(m[2]) };
  return null;
}
const calKey = (y, m, d) => `${y}-${m}-${d}`;
const calCmp = (a, b) => a.y - b.y || a.m - b.m || a.d - b.d;
function calAddDay(o, n) {
  const t = new Date(o.y, o.m - 1, o.d + n);
  return { y: t.getFullYear(), m: t.getMonth() + 1, d: t.getDate() };
}
function calToday() {
  const l = PHONE.lockScreen || {};
  const m = CAL_MONTHS.indexOf(l.month) + 1;
  return { y: Number(l.year) || 2026, m: m || 12, d: Number(l.day) || 1 };
}
// 把跨天日程展开成每一天，方便按日期取用
function calAllEvents() {
  const out = [];
  for (const item of PHONE.calendar || []) {
    const start = calParseDate(item.date);
    if (!start || start.m < 1 || start.m > 12 || start.d < 1 || start.d > 31) continue;
    let end = calParseDate(item.end) || start;
    if (calCmp(end, start) < 0) end = start;
    const ranged = calCmp(end, start) !== 0;
    let cur = start;
    while (calCmp(cur, end) <= 0) {
      out.push({ y: cur.y, m: cur.m, d: cur.d, title: item.title || "", time: item.time || "", start, end, ranged });
      cur = calAddDay(cur, 1);
      if (out.length > 500) break;
    }
  }
  return out.sort((a, b) => calCmp(a, b) || String(a.time).localeCompare(String(b.time)));
}
const calEventsOn = (y, m, d) => calAllEvents().filter((e) => e.y === y && e.m === m && e.d === d);
const calEventText = (e) => {
  if (e.ranged) return `${e.start.m}月${e.start.d}日 – ${e.end.m}月${e.end.d}日 · ${e.time ? e.time.replace(/\s*-\s*/, " – ") : "全天"}`;
  return e.time ? e.time.replace(/\s*-\s*/, " – ") : "全天";
};

function calGridHtml() {
  const { y, m } = calState.view, sel = calState.selected, today = calToday();
  const all = calAllEvents();
  const first = new Date(y, m - 1, 1);
  const start = new Date(y, m - 1, 1 - first.getDay());
  let html = "";
  for (let i = 0; i < 42; i++) {
    const dt = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    const cy = dt.getFullYear(), cm = dt.getMonth() + 1, cd = dt.getDate();
    const out = cm !== m;
    const isToday = cy === today.y && cm === today.m && cd === today.d;
    const isSel = cy === sel.y && cm === sel.m && cd === sel.d;
    const evs = all.filter((e) => e.y === cy && e.m === cm && e.d === cd);
    const dots = evs.slice(0, 3).map((e, j) => `<i style="background:${CAL_DOT[j % CAL_DOT.length]}"></i>`).join("");
    const label = `${cy}年${cm}月${cd}日 ${CAL_WEEK_FULL[dt.getDay()]}${isToday ? "，今天" : ""}${evs.length ? `，${evs.length}个日程` : ""}`;
    html += `<button type="button" class="cal-d${out ? " out" : ""}${isToday ? " td" : ""}${isSel ? " sel" : ""}" data-cal-day="${calKey(cy, cm, cd)}" aria-label="${label}">
      <span class="cal-n">${cd}</span><span class="cal-dots">${dots}</span>
    </button>`;
  }
  return html;
}

function calDayHtml() {
  const sel = calState.selected, today = calToday();
  const evs = calEventsOn(sel.y, sel.m, sel.d);
  const wd = CAL_WEEK_FULL[new Date(sel.y, sel.m - 1, sel.d).getDay()];
  const isToday = sel.y === today.y && sel.m === today.m && sel.d === today.d;
  const rows = evs.map((e, i) => `<article class="cal-evt">
      <span class="cal-evt-bar" style="background:${CAL_DOT[i % CAL_DOT.length]}"></span>
      <span class="cal-evt-main">
        <b>${escapeHtml(withNick(e.title))}</b>
        <small>${escapeHtml(calEventText(e))}</small>
      </span>
    </article>`).join("");
  return `<div class="cal-day-card">
    <div class="cal-day-head">
      <div class="cal-day-date"><b>${sel.m}月${sel.d}日</b><span>${wd}</span></div>
      <div class="cal-day-side">${isToday ? '<span class="cal-now">今天</span>' : ""}${evs.length ? `<span class="cal-count">${evs.length} 个日程</span>` : ""}</div>
    </div>
    ${evs.length ? `<div class="cal-events">${rows}</div>` : `<div class="cal-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="4"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="M9 14h6"/></svg>
      <b>没有日程</b><small>这一天还没有安排</small>
    </div>`}
  </div>`;
}

function calRefresh() {
  const root = appL.querySelector("[data-cal]");
  if (!root) return;
  root.querySelector(".cal-month-label").textContent = `${calState.view.y}年${calState.view.m}月`;
  root.querySelector(".cal-grid").innerHTML = calGridHtml();
  root.querySelector(".cal-day").innerHTML = calDayHtml();
}
function calSelectDay(key) {
  const [y, m, d] = String(key).split("-").map(Number);
  if (!y || !m || !d) return;
  calState.view = { y, m };
  calState.selected = { y, m, d };
  calRefresh();
}
function calShiftMonth(delta) {
  let { y, m } = calState.view;
  m += delta;
  if (m < 1) { m = 12; y -= 1; }
  if (m > 12) { m = 1; y += 1; }
  calState.view = { y, m };
  const first = calAllEvents().find((e) => e.y === y && e.m === m);
  calState.selected = { y, m, d: first ? first.d : 1 };
  calRefresh();
}
function calGoToday() {
  const t = calToday();
  calState = { view: { y: t.y, m: t.m }, selected: { y: t.y, m: t.m, d: t.d } };
  calRefresh();
}

function calendarPage() {
  const t = calToday();
  calState = { view: { y: t.y, m: t.m }, selected: { y: t.y, m: t.m, d: t.d } };
  const week = "日一二三四五六".split("").map((w) => `<span>${w}</span>`).join("");
  const body = `<div class="cal-app" data-cal>
    <section class="cal-card" aria-label="月历">
      <div class="cal-bar">
        <button type="button" class="cal-arrow" data-cal-nav="-1" aria-label="上个月"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 5-7 7 7 7"/></svg></button>
        <div class="cal-month-label">${t.y}年${t.m}月</div>
        <button type="button" class="cal-arrow" data-cal-nav="1" aria-label="下个月"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.5 5 7 7-7 7"/></svg></button>
      </div>
      <div class="cal-week">${week}</div>
      <div class="cal-grid">${calGridHtml()}</div>
    </section>
    <div class="cal-day">${calDayHtml()}</div>
  </div>`;
  return {
    title: "日历", back: "主屏幕", large: "日历", cls: "grouped cal-pg",
    right: '<button type="button" class="cal-today-btn" data-cal-today>今天</button>',
    body
  };
}

/* ===== Days Matter ===== */
const dmDaysBetween = (from, to) =>
  Math.round((Date.UTC(to.y, to.m - 1, to.d) - Date.UTC(from.y, from.m - 1, from.d)) / 86400000);

function daysmatterPage() {
  const today = calToday();
  const items = (PHONE.daysmatter || [])
    .map((item) => {
      const d = calParseDate(item.date);
      if (!d) return null;
      const until = item.kind !== "since";
      const diff = dmDaysBetween(today, d);
      // 已经过去的倒数日不再显示，纪念日则一直累计
      if (until && diff < 0) return null;
      return { item, d, until, diff, num: Math.abs(diff) };
    })
    .filter(Boolean)
    .sort((a, b) => (a.until === b.until)
      ? (a.until ? a.num - b.num : b.num - a.num)
      : (a.until ? -1 : 1));

  const card = (e) => `<article class="dm-card${e.item._meet ? " meet" : ""}">
      <div class="dm-days"><b>${e.num}</b><span>${e.diff === 0 ? "今天" : e.until ? "天后" : "天前"}</span></div>
      <div class="dm-info">
        <b>${escapeHtml(withNick(e.item.title))}</b>
        <span>${e.d.y}年${e.d.m}月${e.d.d}日${e.item.note ? " · " + escapeHtml(e.item.note) : ""}</span>
      </div>
    </article>`;

  const body = items.length
    ? `<div class="dm-list">${items.map(card).join("")}</div>`
    : `<div class="empty">还没有日子</div>`;
  return {
    title: "Days Matter", back: "主屏幕", large: "Days Matter", cls: "grouped dm-pg",
    right: '<button type="button" class="nb-act" data-dm-add>+</button>',
    body
  };
}

/* ===== KakaoTalk ===== */
let ktCurrentChatId = null;
let heroineName = "";   // 输入密码后填的昵称，用来替换数据里所有的 ㅇㅇ
const withNick = (s) => (heroineName ? String(s).split("ㅇㅇ").join(heroineName) : String(s));

const ktChats = () => ((PHONE.kakaotalk && PHONE.kakaotalk.chats) || [])
  .map((chat, index) => ({ chat, index }))
  .sort((a, b) => (b.chat.pinned ? 1 : 0) - (a.chat.pinned ? 1 : 0) || a.index - b.index)
  .map(({ chat }) => chat);
const ktChatById = (id) => ktChats().find((c) => c.id === id) || ktChats()[0];

const ktIcons = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,
  add: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.5A8 8 0 0 1 9 18.6L3.5 20.5 5.4 15A8 8 0 1 1 20.5 11.5z"/><path d="M12 8v7M8.5 11.5h7"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17.5V6l11-2v11.5"/><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  sort: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h9M4 12h6M4 17h3"/><path d="M17 6v12M17 18l3-3M17 18l-3-3"/></svg>`,
  friends: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20"/><circle cx="9" cy="7" r="3.4"/><path d="M22 20v-1.5a4 4 0 0 0-3-3.8"/><path d="M16 3.7a4 4 0 0 1 0 7.6"/></svg>`,
  chats: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.5A8 8 0 0 1 9 18.6L3.5 20.5 5.4 15A8 8 0 1 1 20.5 11.5z"/></svg>`,
  calls: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>`,
  more: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  emoji: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8.4 14.4a4.6 4.6 0 0 0 7.2 0"/><circle cx="9" cy="10" r=".95" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r=".95" fill="currentColor" stroke="none"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4v6"/><path d="M20 4h-6"/><path d="m20 4-8.5 8.5"/><path d="M5 10v9a1.5 1.5 0 0 0 1.5 1.5H15"/></svg>`
};

const ktPinSvg = (cls = "kt-pin") => `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/></svg>`;
const ktAvatarHtml = (chat, cls = "") => {
  if (chat && chat.avatarImage) return `<span class="kt-av ${cls}"><img src="${escapeHtml(chat.avatarImage)}" alt="" /></span>`;
  const raw = String((chat && (chat.avatar || chat.name)) || "?");
  const label = raw === "ㅇ" && heroineName ? heroineName.slice(0, 1) : withNick(raw).slice(0, 1);
  return `<span class="kt-av ${cls}">${escapeHtml(label)}</span>`;
};
const ktIc = (name, cls = "") => `<button class="kt-ic ${cls}" aria-label="${name}">${ktIcons[name]}</button>`;

function ktMusicCard(m) {
  const cover = m.cover
    ? `<img src="${escapeHtml(m.cover)}" alt="" />`
    : `<b>${escapeHtml(m.album || m.title || "")}</b><small>${escapeHtml(m.artist || "")}</small>`;
  return `<span class="kt-cw">
      <button class="k-share" aria-label="转发">${ktIcons.share}</button>
      <span class="kcard kmusic">
        <span class="kc-cov${m.cover ? " has-img" : ""}">${cover}</span>
        <span class="kc-info">
          <span class="kc-t">${escapeHtml(m.title || "")} by ${escapeHtml(m.artist || "")} on Apple Music</span>
          <span class="kc-d">${escapeHtml(m.desc || "")}</span>
          <span class="kc-l">${escapeHtml(m.link || "music.apple.com")}</span>
        </span>
      </span>
    </span>`;
}
function ktImageCard(src) {
  // Safari 可以直接显示 HEIC；其它浏览器退回到同名 .jpg
  if (/\.heic$/i.test(src)) {
    const jpg = src.replace(/\.heic$/i, ".jpg");
    return `<span class="kt-imgw"><picture>
      <source srcset="${escapeHtml(src)}" type="image/heic" />
      <img class="kt-img" src="${escapeHtml(jpg)}" alt="图片" loading="lazy" decoding="async" />
    </picture></span>`;
  }
  return `<span class="kt-imgw"><img class="kt-img" src="${escapeHtml(src)}" alt="图片" loading="lazy" decoding="async" /></span>`;
}

function ktPdfCard(d) {
  return `<span class="kt-cw">
      <button class="k-share" aria-label="转发">${ktIcons.share}</button>
      <span class="kcard kpdf">
        <span class="kpdf-info">
          <span class="kpdf-name">${escapeHtml(d.name || "")}</span>
          ${d.expire ? `<span class="kpdf-meta">${escapeHtml(d.expire)}</span>` : ""}
          ${d.size ? `<span class="kpdf-meta">${escapeHtml(d.size)}</span>` : ""}
        </span>
        <span class="kpdf-thumb"><i class="hd"></i><i class="l1"></i><i class="l2"></i><span class="tb"></span></span>
      </span>
    </span>`;
}

function ktMsgHtml(chat, m, prev) {
  if (m.type === "date" || m.date) return `<div class="kt-dline"><span>${escapeHtml(m.text || m.date)}</span></div>`;
  const who = m.side === "them" && m.sender && chat.members && chat.members[m.sender];
  const person = who || chat;
  const first = !prev || prev.type === "date" || prev.date || prev.side !== m.side
    || (m.side === "them" && (prev.sender || "") !== (m.sender || ""));
  const time = `<span class="kt-tm">${escapeHtml(m.time || "")}</span>`;
  const body = m.music ? ktMusicCard(m.music)
    : m.pdf ? ktPdfCard(m.pdf)
    : m.image ? ktImageCard(m.image)
    : `<span class="kt-bb">${escapeHtml(withNick(m.text || ""))}</span>`;
  if (m.side === "me") {
    return `<div class="kt-line me${first ? " first" : ""}">${time}${body}</div>`;
  }
  return `<div class="kt-line th${first ? " first" : ""}">
      ${first ? ktAvatarHtml(person, "sm") : `<span class="kt-av sm ghost"></span>`}
      <span class="kt-col">${first ? `<span class="kt-who">${escapeHtml(withNick(person.name))}</span>` : ""}<span class="kt-wrap">${body}${time}</span></span>
    </div>`;
}

function ktListHtml() {
  const rows = ktChats().map((chat) => `<button class="kt-row" data-chat="${escapeHtml(chat.id)}">
      ${ktAvatarHtml(chat)}
      <span class="kt-main">
        <span class="kt-name">${chat.pinned ? ktPinSvg() : ""}<span class="kt-name-tx">${escapeHtml(withNick(chat.name))}</span></span>
        <span class="kt-prev">${escapeHtml(withNick(chat.preview || ""))}</span>
      </span>
      <span class="kt-side">
        <span class="kt-date">${escapeHtml(chat.date || "")}</span>
        ${chat.unread ? `<span class="kt-badge">${chat.unread > 99 ? "99+" : escapeHtml(String(chat.unread))}</span>` : ""}
      </span>
    </button>`).join("");

  const nav = (label, icon, on, badge) => `<button class="kt-navb${on ? " on" : ""}">${icon}<span>${label}</span>${badge ? `<i class="kt-nbdg">${badge}</i>` : ""}</button>`;

  return `<div class="pg kt-pg kt-list-pg">
    <div class="kt-top">
      <button class="kt-back" data-pop aria-label="返回">${chev()}</button>
      <div class="kt-title">聊天</div>
      <div class="kt-ics">${ktIc("search")}${ktIc("add")}${ktIc("music")}${ktIc("settings")}</div>
    </div>
    <div class="kt-tabs">
      <button class="kt-tab on">全部</button>
      <button class="kt-tab">未读</button>
      <button class="kt-sort" aria-label="排序">${ktIcons.sort}</button>
    </div>
    <div class="kt-list">${rows}</div>
    <div class="kt-nav">
      ${nav("好友", ktIcons.friends, false)}
      ${nav("聊天", ktIcons.chats, true)}
      ${nav("通话", ktIcons.calls, false)}
      ${nav("更多", ktIcons.more, false)}
    </div>
  </div>`;
}

function ktChatHtml(id) {
  const chat = ktChatById(id);
  if (!chat) return `<div class="pg kt-pg kt-chat-pg"></div>`;
  // 不打开分支里，和志薰的对话也保留输入栏：他发完话之后点一下输入栏，
  // 才会展开这一步可以回的选项（选项栏从底部弹出来，替掉输入栏）
  const choiceMode = storyRoute === "noOpen" && id === "jihun";
  const msgs = chat.messages.map((m, i) => ktMsgHtml(chat, m, chat.messages[i - 1])).join("");
  const bottom = choiceMode
    ? `<div class="kt-in kt-in-tap${noOpenChoicesReady ? " is-ready" : ""}" id="ktInTap" data-kt-tap>
      <button class="kt-plus" aria-label="更多">${ktIcons.plus}</button>
      <div class="kt-input kt-input-tap" role="button" tabindex="0" aria-label="点这里回复">${noOpenChoicesReady ? "点这里回复" : "输入一条信息"}</div>
      <button class="kt-emoji" aria-label="表情">${ktIcons.emoji}</button>
      <button class="kt-send" data-kt-tap aria-label="发送">${ktIcons.send}</button>
    </div>
    <div class="kt-choices" id="ktChoices" hidden></div>`
    : `<div class="kt-in">
      <button class="kt-plus" aria-label="更多">${ktIcons.plus}</button>
      <input class="kt-input" type="text" placeholder="输入一条信息" aria-label="输入一条信息" />
      <button class="kt-emoji" aria-label="表情">${ktIcons.emoji}</button>
      <button class="kt-send" data-send aria-label="发送">${ktIcons.send}</button>
    </div>`;
  return `<div class="pg kt-pg kt-chat-pg">
    <div class="kt-ch">
      <button class="kt-cback" data-pop aria-label="返回">${chev()}<span>${chat.unread ? escapeHtml(String(chat.unread)) : ""}</span></button>
      <div class="kt-cname">${escapeHtml(withNick(chat.name))}</div>
      <div class="kt-cics">${ktIc("search")}${ktIc("phone")}${ktIc("menu")}</div>
    </div>
    ${chat.notice ? `<div class="kt-notice" role="note">${ktPinSvg("kt-notice-pin")}<span class="kt-notice-tx"><b>置顶</b>${escapeHtml(chat.notice)}</span></div>` : ""}
    <div class="kt-msgs">${msgs}</div>
    ${bottom}
  </div>`;
}

function kakaotalkPage() {
  return { title: "聊天", full: ktListHtml };
}
function kakaotalkChatPage(id) {
  const chat = ktChatById(id);
  return { title: (chat && chat.name) || "聊天", full: () => ktChatHtml(id) };
}
// 新消息的时间接在当天最后一条之后（+1 分钟），跨天或没有记录时用锁屏时间
function ktNextTime(chat) {
  for (let i = chat.messages.length - 1; i >= 0; i--) {
    const m = chat.messages[i];
    if (m.type === "date" || m.date) break;
    if (m.time && /^\d{1,2}:\d{2}$/.test(m.time)) {
      const [h, mi] = m.time.split(":").map(Number);
      const t = (h * 60 + mi + 1) % 1440;
      return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
    }
  }
  return (PHONE.lockScreen && PHONE.lockScreen.time) || "10:56";
}
function ktSendMessage() {
  // 不打开分支的输入栏是「点一下展开选项」的开关
  if (storyRoute === "noOpen" && ktCurrentChatId === "jihun") { openNoOpenChoices(); return; }
  // 结局里和志薰的最后一段对话是写好的，不发进普通的消息流
  if (endingChat() && !endingSent) { ktEndingSend(); return; }
  const input = appL.querySelector(".kt-input");
  const box = appL.querySelector(".kt-msgs");
  const chat = ktChatById(ktCurrentChatId);
  if (!input || !box || !chat) return;
  const text = input.value.trim();
  if (!text) return;
  const time = ktNextTime(chat);
  const msg = { side: "me", time, text };
  const prev = chat.messages[chat.messages.length - 1];
  chat.messages.push(msg);
  chat.preview = text;
  box.insertAdjacentHTML("beforeend", ktMsgHtml(chat, msg, prev));
  box.scrollTop = box.scrollHeight;
  input.value = "";
}

/* ===== Apple Music ===== */
const AM_DEFAULT_INDEX = 7;
let amState = { index: AM_DEFAULT_INDEX, playing: false, shuffle: false };

const amIcons = {
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 4.5 7.5 12 15 19.5"/></svg>`,
  shuffle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h2.8c1.5 0 2.9.8 3.7 2.1l5 8c.8 1.3 2.2 2.1 3.7 2.1H21"/><path d="m18 16 3 3-3 3"/><path d="M3 17h2.8c1.5 0 2.9-.8 3.7-2.1l5-8C15.3 5.6 16.7 4.8 18.2 4.8H21"/><path d="m18 1.8 3 3-3 3"/></svg>`,
  play: `<svg class="am-i-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.4v13.2L19 12z"/></svg>`,
  pause: `<svg class="am-i-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6.8" y="5" width="3.7" height="14" rx="1.3"/><rect x="13.5" y="5" width="3.7" height="14" rx="1.3"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3"/><path d="m8 7 4-4 4 4"/><path d="M6 11H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1"/></svg>`,
  more: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.3-4.3"/></svg>`,
  apple: `<svg class="am-appicon" viewBox="0 0 60 60" aria-hidden="true"><defs><linearGradient id="amMiniGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb5c74"/><stop offset="1" stop-color="#fa233b"/></linearGradient></defs><rect width="60" height="60" rx="14" fill="url(#amMiniGrad)"/><g fill="#fff"><circle cx="23" cy="46" r="6"/><circle cx="43" cy="40" r="6"/></g><path d="M29 46V18l20-4.5V40" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

function amSongs() {
  return Array.isArray(PHONE.applemusic) ? PHONE.applemusic : [];
}

function amCurrentSong() {
  return amSongs()[amState.index] || { title: "", artist: "", glyph: "♪", cover: "default", tint: ["#6f2d3f", "#d16b4d"] };
}

function amCoverClass(song) {
  let key = String((song && song.cover) || "default").toLowerCase().replace(/[^a-z0-9_-]/g, "").replace(/^am-c-/, "");
  return `am-c-${key || "default"}`;
}

function amTint(song) {
  const tint = (song && Array.isArray(song.tint)) ? song.tint : [];
  return [tint[0] || "#6f2d3f", tint[1] || "#d16b4d"];
}

function amArtHtml(song, withEq) {
  const s = song || {};
  const glyph = escapeHtml(s.glyph || (s.title ? String(s.title).slice(0, 1) : "♪"));
  return `<span class="am-art ${amCoverClass(s)}" aria-hidden="true"><i>${glyph}</i>${withEq ? `<span class="am-eq"><b></b><b></b><b></b></span>` : ""}</span>`;
}

function amRowHtml(song, i) {
  const current = i === amState.index;
  const cls = `am-song${current ? " is-current" : ""}${current && amState.playing ? " is-playing" : ""}`;
  return `<li class="${cls}">
      <button class="am-song-main" type="button" data-am-song="${i}" aria-label="播放 ${escapeHtml(song.title)}，${escapeHtml(song.artist)}"${current ? ` aria-current="true"` : ""}>
        ${amArtHtml(song, true)}
        <span class="am-meta"><span class="am-title">${escapeHtml(song.title)}</span><span class="am-artist">${escapeHtml(song.artist)}</span></span>
      </button>
      <button class="am-row-more" type="button" aria-label="更多操作：${escapeHtml(song.title)}">${amIcons.more}</button>
    </li>`;
}

function amPageHtml() {
  const songs = amSongs();
  if (songs.length && (amState.index < 0 || amState.index >= songs.length)) amState.index = 0;
  const song = amCurrentSong();
  const tint = amTint(song);
  const rows = songs.map(amRowHtml).join("");
  const initialLive = (amState.playing ? "正在播放：" : "已暂停：") + (song.title || "") + (song.artist ? `，${song.artist}` : "");
  return `<div class="pg am-pg${amState.playing ? " is-playing" : ""}" data-am-page data-am-index="${amState.index}" style="--am-tint-a:${escapeHtml(tint[0])};--am-tint-b:${escapeHtml(tint[1])}">
    <div class="am-ambient" aria-hidden="true"></div>
    <header class="am-chrome">
      <nav class="am-nav" aria-label="播放列表控制栏">
        <div class="am-side">
          <button class="am-ico" type="button" data-am-back aria-label="返回" title="返回">${amIcons.back}</button>
          <button class="am-ico am-shuffle${amState.shuffle ? " on" : ""}" type="button" data-am-shuffle aria-label="随机播放" aria-pressed="${amState.shuffle}" title="随机播放">${amIcons.shuffle}</button>
        </div>
        <button class="am-play-pill" type="button" data-am-toggle aria-label="${amState.playing ? "暂停" : "播放"}" aria-pressed="${amState.playing}">${amIcons.play}${amIcons.pause}<span data-am-nav-label>${amState.playing ? "暂停" : "播放"}</span></button>
        <div class="am-side am-right">
          <button class="am-ico" type="button" aria-label="分享" title="分享">${amIcons.share}</button>
          <button class="am-ico am-more" type="button" aria-label="更多" title="更多">${amIcons.more}</button>
        </div>
      </nav>
    </header>
    <div class="am-scroll" data-am-scroll>
      <ol class="am-list">${rows || `<li class="am-empty">播放列表还是空的</li>`}</ol>
    </div>
    <div class="am-mini" role="region" aria-label="正在播放">
      ${amIcons.apple}
      <span class="am-mini-art" data-am-mini-art>${amArtHtml(song)}</span>
      <span class="am-mini-meta">
        <span class="am-mini-title" data-am-mini-title>${escapeHtml(song.title)}</span>
        <span class="am-mini-artist" data-am-mini-artist>${escapeHtml(song.artist)}</span>
      </span>
      <button class="am-mini-btn am-play" type="button" data-am-toggle aria-label="${amState.playing ? "暂停" : "播放"}" aria-pressed="${amState.playing}">${amIcons.play}${amIcons.pause}</button>
      <button class="am-mini-btn am-search" type="button" aria-label="搜索" title="搜索">${amIcons.search}</button>
    </div>
    <div class="sr-only" data-am-live aria-live="polite">${escapeHtml(initialLive)}</div>
  </div>`;
}

function amReanimate(el) {
  if (!el) return;
  el.classList.remove("am-swap");
  void el.offsetWidth;
  el.classList.add("am-swap");
}

function amIslandArt(song, animate) {
  if (!islandArt) return;
  islandArt.innerHTML = amArtHtml(song);
  if (animate) amReanimate(islandArt);
}

function amSync(animate) {
  const songs = amSongs();
  if (songs.length) {
    if (amState.index < 0) amState.index = 0;
    if (amState.index >= songs.length) amState.index = songs.length - 1;
  } else {
    amState.index = 0;
    amState.playing = false;
  }

  const page = appL.querySelector(".am-pg");
  const song = amCurrentSong();
  if (!page) {
    playingSong = -1;
    island.classList.remove("act");
    return;
  }

  const changed = String(page.dataset.amIndex) !== String(amState.index);
  const tint = amTint(song);
  page.style.setProperty("--am-tint-a", tint[0]);
  page.style.setProperty("--am-tint-b", tint[1]);
  page.classList.toggle("is-playing", amState.playing);
  page.dataset.amIndex = String(amState.index);

  page.querySelectorAll(".am-song").forEach((row, i) => {
    const current = i === amState.index;
    row.classList.toggle("is-current", current);
    row.classList.toggle("is-playing", current && amState.playing);
    const main = row.querySelector(".am-song-main");
    if (main) {
      if (current) main.setAttribute("aria-current", "true");
      else main.removeAttribute("aria-current");
    }
  });

  const miniArt = page.querySelector("[data-am-mini-art]");
  if (changed && miniArt) {
    miniArt.innerHTML = amArtHtml(song);
    amReanimate(miniArt);
  }
  const miniTitle = page.querySelector("[data-am-mini-title]");
  const miniArtist = page.querySelector("[data-am-mini-artist]");
  if (miniTitle) miniTitle.textContent = song.title || "";
  if (miniArtist) miniArtist.textContent = song.artist || "";

  const label = amState.playing ? "暂停" : "播放";
  const navLabel = page.querySelector("[data-am-nav-label]");
  if (navLabel) navLabel.textContent = label;
  const navPlay = page.querySelector(".am-play-pill");
  if (navPlay) {
    navPlay.setAttribute("aria-label", label);
    navPlay.setAttribute("aria-pressed", String(amState.playing));
  }
  const miniPlay = page.querySelector(".am-mini-btn.am-play");
  if (miniPlay) {
    miniPlay.setAttribute("aria-label", label);
    miniPlay.setAttribute("aria-pressed", String(amState.playing));
  }
  const shuffle = page.querySelector("[data-am-shuffle]");
  if (shuffle) {
    shuffle.classList.toggle("on", amState.shuffle);
    shuffle.setAttribute("aria-pressed", String(amState.shuffle));
  }
  const live = page.querySelector("[data-am-live]");
  if (live) live.textContent = (amState.playing ? "正在播放：" : "已暂停：") + (song.title || "") + (song.artist ? `，${song.artist}` : "");

  playingSong = amState.playing ? amState.index : -1;
  island.classList.toggle("act", amState.playing);
  island.classList.toggle("music", songs.length > 0);
  if (changed) amIslandArt(song, animate);
}

function amSelectSong(index) {
  if (!amSongs()[index]) return;
  amState.index = index;
  amState.playing = true;
  amSync(true);
}

function amTogglePlaying() {
  if (!amSongs().length) return;
  amState.playing = !amState.playing;
  amSync(false);
}

function amToggleShuffle() {
  if (!amSongs().length) return;
  amState.shuffle = !amState.shuffle;
  amSync(false);
}

function applemusicPage() {
  const songs = amSongs();
  const start = Number.isInteger(PHONE.musicIndex) ? PHONE.musicIndex : AM_DEFAULT_INDEX;
  amState = {
    index: songs.length ? Math.min(start, songs.length - 1) : 0,
    playing: false,
    shuffle: false
  };
  playingSong = -1;
  island.classList.remove("act");
  island.classList.toggle("music", songs.length > 0);
  if (islandArt) {
    islandArt.innerHTML = songs.length ? amArtHtml(amCurrentSong()) : "";
    islandArt.classList.remove("am-swap");
  }
  return { title: "音乐", full: amPageHtml };
}

/* ===== Temu ===== */
const TEMU_TABS = [["order", "订单"], ["fav", "收藏"], ["cart", "购物车"]];
let temuTab = "order";
function temuCards() {
  const items = (PHONE.temu || []).filter((item) => (item.tab || "order") === temuTab);
  if (!items.length) return `<div class="empty">这里还什么都没有</div>`;
  return items.map((item) => `<div class="tcard"><div class="timg">${escapeHtml(item.glyph || item.title.slice(0, 1))}<span class="st">${escapeHtml(item.status)}</span></div><div class="tbody"><b>${escapeHtml(item.title)}</b><p>${escapeHtml(item.detail)}</p><div class="pr">${escapeHtml(item.price)}</div></div></div>`).join("");
}
function temuPage() {
  const tabs = TEMU_TABS.map(([id, label]) => `<button data-temu-tab="${id}"${id === temuTab ? ' class="on"' : ""}>${label}</button>`).join("");
  const body = `<div class="t-top"><div class="brand">temu</div><div class="srch"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>搜索商品</div></div>
    <div class="t-tabs">${tabs}</div>
    <div class="t-grid">${temuCards()}</div>`;
  return { title: "Temu", back: "主屏幕", large: "temu", cls: "grouped", body };
}

/* ===== 相册（她的手机） ===== */
const photoAlbum = () => PHONE.album || {};
const photoList = () => (photoAlbum().photos || []).filter((p) => p && p.src);
let photoIndex = 0;

function photosPageHtml() {
  const a = photoAlbum();
  const list = photoList();
  const person = a.person || {};
  const cells = list.map((p, i) => `<button class="ph-cell" type="button" data-photo-open="${i}" aria-label="查看第 ${i + 1} 张照片">
      <img src="${escapeHtml(p.src)}" alt="" draggable="false" loading="lazy" />
    </button>`).join("");
  const personRow = person.name ? `<div class="ph-sec"><span>人物与地点</span></div>
    <div class="ph-people">
      <button class="ph-person" type="button" data-photo-open="0" aria-label="查看${escapeHtml(person.name)}的照片">
        <span class="ph-face">${person.avatar
          ? `<img src="${escapeHtml(person.avatar)}" alt="" draggable="false" />`
          : escapeHtml(String(person.name).slice(0, 1))}</span>
        <span class="ph-pname">${escapeHtml(person.name)}</span>
      </button>
    </div>` : "";
  return `<div class="pg photos-pg">
    <div class="nav">
      <button class="nb-back" type="button">${chev()}<span>主屏幕</span></button>
      <div class="nb-title">相册</div>
      <div class="nb-right"><span class="nb-act">选择</span></div>
    </div>
    <div class="scroll">
      <h1 class="lt">相册</h1>
      ${personRow}
      <div class="ph-sec ph-sec-row"><span>最近项目</span><span class="ph-n">${list.length}</span></div>
      <div class="ph-grid">${cells || `<div class="ph-empty">相册里还没有照片</div>`}</div>
    </div>
  </div>`;
}
function photosPage() { return { title: "相册", full: photosPageHtml }; }

/* 查看大图：点开一格照片，左右滑动或按方向键切换 */
function openPhotoViewer(index) {
  const list = photoList();
  if (!list.length) return;
  photoIndex = Math.max(0, Math.min(list.length - 1, Number(index) || 0));
  renderPhotoView(false);
  const view = $("#photoView");
  view.classList.add("on");
  view.setAttribute("aria-hidden", "false");
  document.body.classList.add("ph-view-open");
}
function closePhotoViewer() {
  const view = $("#photoView");
  if (!view || !view.classList.contains("on")) return;
  view.classList.remove("on");
  view.setAttribute("aria-hidden", "true");
  document.body.classList.remove("ph-view-open");
}
function renderPhotoView(swap) {
  const list = photoList();
  const photo = list[photoIndex];
  if (!photo) return;
  const img = $("#photoImg");
  img.src = photo.src;
  img.alt = `照片 ${photoIndex + 1}`;
  $("#photoCount").textContent = `${photoIndex + 1} / ${list.length}`;
  const fav = $("#photoFav");
  fav.classList.toggle("on", !!photo.fav);
  fav.setAttribute("aria-pressed", photo.fav ? "true" : "false");
  $("#photoPrev").disabled = photoIndex === 0;
  $("#photoNext").disabled = photoIndex === list.length - 1;
  if (swap) {
    img.classList.remove("ph-swap");
    void img.offsetWidth;
    img.classList.add("ph-swap");
  }
}
function stepPhoto(delta) {
  const list = photoList();
  if (!list.length) return;
  const next = Math.max(0, Math.min(list.length - 1, photoIndex + delta));
  if (next === photoIndex) return;
  photoIndex = next;
  renderPhotoView(true);
}
function togglePhotoFav() {
  const photo = photoList()[photoIndex];
  if (!photo) return;
  photo.fav = !photo.fav;
  renderPhotoView(false);
}

/* ===== 开屏 / 锁屏 ===== */
function renderIntro() {
  const o = PHONE.opening || {};
  const lead = escapeHtml(o.lead || "").replace(/(\d{4}年\d{1,2}月\d{1,2}日。?)/, '<span class="intro-date">$1</span>');
  $("#introKicker").textContent = o.label || "开屏";
  $("#introCopy").innerHTML = `<p class="intro-line intro-lead">${lead}</p>
    <p class="intro-line intro-body">${escapeHtml(o.body || "")}</p>
    <p class="intro-line intro-question">${escapeHtml(o.question || "")}</p>`;
  $("#introOpen").textContent = o.open || "打开";
  $("#introNo").textContent = o.close || "不打开";
}

function renderLock() {
  const l = PHONE.lockScreen;
  $("#lkDate").textContent = l.date;
  $("#lkTime").textContent = l.time;
  $("#sbt").textContent = l.time;
}

/* ===== 密码解锁 ===== */
let pcValue = "";
let pcBusy = false;
let passOrigin = "lock"; // 取消密码时回到上一屏：lock / name
function updateDots() {
  document.querySelectorAll("#pcDots i").forEach((dot, i) => dot.classList.toggle("on", i < pcValue.length));
}
function showPasscode(from = "lock") {
  pcValue = ""; pcBusy = false; passOrigin = from;
  passL.classList.remove("unlock");
  updateDots();
  showScreen("pass");
}
function pressDigit(key) {
  if (pcBusy) return;
  if (key === "del") { pcValue = pcValue.slice(0, -1); updateDots(); return; }
  if (pcValue.length >= 4) return;
  pcValue += key;
  updateDots();
  if (pcValue.length === 4) {
    pcBusy = true;
    setTimeout(() => {
      passL.classList.add("unlock");
      setTimeout(() => {
        passL.classList.remove("unlock");
        pcBusy = false;
        pcValue = "";
        updateDots();
        showScreen("home");
      }, 400);
    }, 140);
  }
}

/* ===== ChatGPT ===== */
const cgData = () => PHONE.chatgpt || {};
const cgHistory = () => (cgData().history || [])
  .map((h, i) => (typeof h === "string" ? { id: "h" + i, title: h } : h))
  .filter((h) => h && h.title);
const cgHistEntry = (title) => cgHistory().find((h) => h.title === title) || null;
const cgChat = () => cgData().chat || {};
let cgReplyIdx = 0;

const cgIc = {
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  newchat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c.55 5 2.6 7.05 7.6 7.6-5 .55-7.05 2.6-7.6 7.6-.55-5-2.6-7.05-7.6-7.6 5-.55 7.05-2.6 7.6-7.6z"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="3"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m4 17.5 4.6-4.6 3.4 3.4 3-3L20 17"/></svg>`,
  write: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M15.6 8.4 10 14l-2.5.6.6-2.5 5.6-5.6a1.3 1.3 0 0 1 1.9 1.9z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,
  library: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5V5.5M8.5 7.5h7M8.5 11h5"/></svg>`,
  projects: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h3.2l1.8 2.2h8A2.5 2.5 0 0 1 21 9.7v7.8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z"/></svg>`,
  health: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3S3.8 15.4 3.8 9.6A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.2 2.9c0 5.8-8.2 10.7-8.2 10.7z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.6 8.4-2 5.2-5.2 2 2-5.2z"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`,
  more: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>`,
  wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 10v4M9 7v10M13 4.5v15M17 8v8M21 10.5v3"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>`,
  down: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>`
};

// 极简 Markdown：空行分段、"- " 列表、整行 ** ** 作为小标题、行内 **粗体**
function cgInline(s) {
  return escapeHtml(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br />");
}
function cgMd(src) {
  const lines = String(src).trim().split("\n");
  let out = "", list = [];
  const flush = () => {
    if (list.length) out += `<ul class="cg-ul">${list.map((t) => `<li>${cgInline(t)}</li>`).join("")}</ul>`;
    list = [];
  };
  lines.forEach((raw) => {
    const line = raw.trim();
    if (!line) { flush(); return; }
    if (line.startsWith("- ")) { list.push(line.slice(2)); return; }
    flush();
    if (/^\*\*.*\*\*$/.test(line)) out += `<h3 class="cg-h">${cgInline(line.slice(2, -2))}</h3>`;
    else out += `<p class="cg-p">${cgInline(line)}</p>`;
  });
  flush();
  return out;
}

function cgTopHtml(kind) {
  if (kind === "chat") {
    return `<div class="cg-top chat">
      <button class="cg-menu" data-cg-drawer aria-label="菜单">${cgIc.menu}</button>
      <div class="cg-right">
        <button class="cg-edit" aria-label="编辑">${cgIc.edit}</button>
        <button class="cg-more" aria-label="更多">${cgIc.more}</button>
      </div>
    </div>`;
  }
  return `<div class="cg-top home">
    <button class="cg-menu" data-cg-drawer aria-label="菜单">${cgIc.menu}</button>
    <button class="cg-newchat" data-cg-newchat aria-label="新对话">${cgIc.newchat}</button>
  </div>`;
}

function cgInputBar() {
  return `<div class="cg-inputbar">
    <button class="cg-plus" aria-label="添加">${cgIc.plus}</button>
    <input class="cg-input" type="text" placeholder="询问 ChatGPT" aria-label="询问 ChatGPT" autocomplete="off" />
    <button class="cg-mic" aria-label="语音输入">${cgIc.mic}</button>
    <button class="cg-voice" data-cg-send aria-label="发送">
      <span class="v-wave">${cgIc.wave}</span><span class="v-send">${cgIc.send}</span>
    </button>
  </div>`;
}

function cgDrawerHtml() {
  const nav = [
    ["图片", "image"], ["资料库", "library"], ["项目", "projects"],
    ["健康", "health"], ["定时任务", "clock"], ["探索 GPTs", "compass"]
  ].map(([label, ic]) => `<button class="cg-drow">${cgIc[ic]}<span>${label}</span></button>`).join("");
  const hist = cgHistory().map((h) => 
    `<button class="cg-hist" data-cg-hist="${escapeHtml(h.title)}">${escapeHtml(h.title)}</button>`
  ).join("");
  return `<div class="cg-scrim" data-cg-close></div>
  <aside class="cg-drawer" aria-label="侧边栏">
    <div class="cg-dhead"><h2>ChatGPT</h2><button class="cg-disearch" aria-label="搜索">${cgIc.search}</button></div>
    <div class="cg-dbody">
      <nav class="cg-dnav">${nav}</nav>
      <div class="cg-dlabel">最近</div>
      <div class="cg-dhist">${hist}</div>
    </div>
    <div class="cg-dfoot">
      <button class="cg-chatpill" data-cg-newchat>${cgIc.newchat}<span>聊天</span></button>
      <button class="cg-gear" aria-label="设置">${cgIc.gear}</button>
    </div>
  </aside>`;
}

function cgNewChatHtml() {
  return `<div class="pg cg-pg cg-home">
    ${cgTopHtml("home")}
    <div class="cg-fill"></div>
    <div class="cg-sugs">
      <button class="cg-sug" data-cg-sug="生成一张小猫在便利店门口的插画">${cgIc.image}<span>生成图像</span></button>
      <button class="cg-sug" data-cg-sug="帮我把这段话改得更自然一点：">${cgIc.write}<span>撰写或编辑</span></button>
      <button class="cg-sug" data-cg-sug="搜索一下最近的舞蹈演出">${cgIc.globe}<span>搜索网页</span></button>
    </div>
    ${cgInputBar()}
    ${cgDrawerHtml()}
  </div>`;
}

function cgChatHtml() {
  const c = cgChat();
  return `<div class="pg cg-pg cg-chat-pg" data-cg-conv="1">
    ${cgTopHtml("chat")}
    <div class="cg-thread">
      <div class="cg-time">${escapeHtml(c.timestamp || "")}</div>
      <div class="cg-me"><div class="cg-bubble">${escapeHtml(c.question || "")}</div></div>
      <div class="cg-ai">${cgMd(c.answer || "")}</div>
    </div>
    <button class="cg-down" data-cg-down aria-label="回到底部">${cgIc.down}</button>
    ${cgInputBar()}
    ${cgDrawerHtml()}
  </div>`;
}

// 侧边栏里普通的「一问一答」历史记录
function cgQaHtml(h) {
  return `<div class="pg cg-pg cg-chat-pg" data-cg-conv="${escapeHtml(h.id || h.title)}">
    ${cgTopHtml("chat")}
    <div class="cg-thread">
      <div class="cg-time">${escapeHtml(h.time || "")}</div>
      <div class="cg-me"><div class="cg-bubble">${escapeHtml(h.question || "")}</div></div>
      <div class="cg-ai">${cgMd(h.answer || "")}</div>
    </div>
    <button class="cg-down" data-cg-down aria-label="回到底部">${cgIc.down}</button>
    ${cgInputBar()}
    ${cgDrawerHtml()}
  </div>`;
}
function chatgptQaPage(title) {
  return { title: "ChatGPT", full: () => cgQaHtml(cgHistEntry(title) || {}) };
}

// 空白新对话（从新对话页直接发消息时进入）
function cgFreshChatHtml() {
  return `<div class="pg cg-pg cg-chat-pg" data-cg-conv="fresh">
    ${cgTopHtml("chat")}
    <div class="cg-thread"></div>
    <button class="cg-down" data-cg-down aria-label="回到底部">${cgIc.down}</button>
    ${cgInputBar()}
    ${cgDrawerHtml()}
  </div>`;
}

function chatgptPage() { return { title: "ChatGPT", full: cgNewChatHtml }; }
function chatgptChatPage(fresh) { return { title: "ChatGPT", full: fresh ? cgFreshChatHtml : cgChatHtml }; }

function cgAppend(text) {
  const thread = appL.querySelector(".cg-thread");
  if (!thread) return;
  const toBottom = () => { thread.scrollTop = thread.scrollHeight; };
  thread.insertAdjacentHTML("beforeend", `<div class="cg-me"><div class="cg-bubble">${escapeHtml(text)}</div></div>`);
  const id = "cgT" + Date.now();
  thread.insertAdjacentHTML("beforeend", `<div class="cg-ai cg-typing" id="${id}"><span class="cg-dots"><i></i><i></i><i></i></span></div>`);
  toBottom();
  const replies = cgData().replies || [];
  setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const reply = replies.length ? replies[cgReplyIdx++ % replies.length] : "收到。";
    el.outerHTML = `<div class="cg-ai">${cgMd(reply)}</div>`;
    toBottom();
  }, 900);
}

function cgSend() {
  const input = appL.querySelector(".cg-input");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  if (!appL.querySelector(".cg-thread")) {
    pushPage(chatgptChatPage(true));
    cgAppend(text);
    return;
  }
  input.value = "";
  const bar = input.closest(".cg-inputbar");
  if (bar) bar.classList.remove("typing");
  cgAppend(text);
}

/* ===== ChatGPT · 表白日期比较 ===== */
const cgAdv = { step: 0, answers: {}, result: null, status: "idle", followUp: null, error: "", lockUntil: 0 };
const CG_ADV_FALLBACK = "建议数据没有加载，请刷新页面后重试。";

function cgAdvLib() { return window.ConfessionAdvisor || null; }
function cgAdvCopy() { return cgData().dateAdvice || {}; }
function cgAdvReset() {
  cgAdv.step = 0;
  cgAdv.answers = {};
  cgAdv.result = null;
  cgAdv.status = "idle";
  cgAdv.followUp = null;
  cgAdv.error = "";
  cgAdv.lockUntil = 0;
}

function cgAdvPips(n) {
  let out = '<span class="cg-adv-pips" aria-hidden="true">';
  for (let i = 0; i < 5; i += 1) out += `<i class="${i < n ? "on" : ""}"></i>`;
  return out + "</span>";
}

function cgAdvIntroHtml() {
  const c = cgAdvCopy();
  const lib = cgAdvLib();
  const dates = lib ? Object.keys(lib.CASE.dates).map((id) => lib.CASE.dates[id]) : [];
  const rows = dates.map((d) => `
    <div class="cg-adv-drow">
      <span class="cg-adv-dname">${escapeHtml(d.name)}<small>${escapeHtml(d.date)}</small></span>
      ${cgAdvPips(d.atmosphere)}
      <span class="cg-adv-dfit">${escapeHtml(d.introFit)}</span>
    </div>`).join("");
  const atmo = dates.map((d) => d.atmosphere).join(" · ");
  return `<div class="cg-ai cg-adv-intro">
    ${c.intro ? `<p class="cg-p">${escapeHtml(c.intro)}</p>` : ""}
    <details class="cg-adv-fold">
      <summary><span>三个日期的通用对比</span><span class="cg-adv-fold-hint">氛围感 ${escapeHtml(atmo)}</span></summary>
      <div class="cg-adv-fold-body">${rows}</div>
    </details>
  </div>`;
}

function cgAdvQuestionHtml() {
  const lib = cgAdvLib();
  if (!lib) return `<div class="cg-adv-card"><p class="cg-adv-error">${escapeHtml(CG_ADV_FALLBACK)}</p></div>`;
  const questions = lib.CASE.questions;
  const q = questions[cgAdv.step] || questions[0];
  const picked = cgAdv.step > 0
    ? lib.CASE.copy.relationshipLabels[cgAdv.answers.relationship] || ""
    : "";
  const opts = q.options.map((o) => {
    const sel = cgAdv.answers[q.id] === o.id;
    return `<button type="button" class="cg-adv-opt${sel ? " sel" : ""}" data-adv-pick="${q.id}" data-adv-val="${o.id}" role="radio" aria-checked="${sel ? "true" : "false"}">
      <span class="cg-adv-mark"></span>
      <span class="cg-adv-opt-body"><b>${escapeHtml(o.label)}</b><small>${escapeHtml(o.desc)}</small></span>
    </button>`;
  }).join("");
  return `<div class="cg-adv-card">
    <div class="cg-adv-head">
      <span>先确认两件事 · ${cgAdv.step + 1}/${questions.length}</span>
      ${cgAdv.step > 0 ? '<button type="button" class="cg-adv-back" data-adv-back>上一步</button>' : ""}
    </div>
    ${picked ? `<div class="cg-adv-picked"><span>关系 · ${escapeHtml(picked)}</span><button type="button" data-adv-back>修改</button></div>` : ""}
    <h3 class="cg-adv-q">${escapeHtml(q.title)}</h3>
    <p class="cg-adv-hint">${escapeHtml(q.hint)}</p>
    <div class="cg-adv-options" role="radiogroup" aria-label="${escapeHtml(q.title)}">${opts}</div>
    <p class="cg-adv-foot">${cgAdv.step === 0 ? "选好后会自动进入下一个问题。" : "选好后会按你的情况生成完整建议。"}</p>
  </div>`;
}

function cgAdvThinkingHtml() {
  return `<div class="cg-adv-card cg-adv-thinking"><span class="cg-dots"><i></i><i></i><i></i></span><span>正在按你的选择整理建议…</span></div>`;
}

function cgAdvFollowHtml(result) {
  const lib = cgAdvLib();
  const data = lib && lib.buildFollowUp(cgAdv.followUp, result);
  if (!data) return "";
  return `<div class="cg-adv-followbox">
    <h5>${escapeHtml(data.title)}</h5>
    ${data.intro ? `<p>${escapeHtml(data.intro)}</p>` : ""}
    ${data.bullets ? `<ul>${data.bullets.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>` : ""}
    ${(data.paragraphs || []).map((t) => `<p>${escapeHtml(t)}</p>`).join("")}
    ${data.note ? `<small>${escapeHtml(data.note)}</small>` : ""}
  </div>`;
}

function cgAdvResultHtml(result) {
  const m = result.modules;
  const dates = m.comparison.items.map((it) => `
    <div class="cg-adv-date${it.top ? " top" : ""}">
      <div class="cg-adv-date-head">
        <span class="cg-adv-pos">${it.top ? "首选" : "第 " + it.rank + " 顺位"}</span>
        <b>${escapeHtml(it.name)}</b>
        <span class="cg-adv-when">${escapeHtml(it.date)}</span>
      </div>
      <div class="cg-adv-atmo">${cgAdvPips(it.atmosphere)}<span>氛围感 ${it.atmosphere}/5</span></div>
      <p>${escapeHtml(it.note)}</p>
      <p class="cg-adv-lens">${escapeHtml(it.lens)}</p>
    </div>`).join("");
  const reasons = m.reasoning.paragraphs.map((t) => `<p>${escapeHtml(t)}</p>`).join("");
  const steps = m.plan.approach.steps.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
  const day = m.plan.dayItems.map((it) => `<li><span class="cg-adv-phase">${escapeHtml(it.phase)}</span><span>${escapeHtml(it.text)}</span></li>`).join("");
  const scripts = m.scripts.items.map((it) => `
    <div class="cg-adv-script">
      <b>${escapeHtml(it.label)}</b>
      <p>${escapeHtml(it.text)}</p>
      ${it.when ? `<small>${escapeHtml(it.when)}</small>` : ""}
    </div>`).join("");
  const cautions = m.cautions.items.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
  const follows = result.followUps.map((f) => `
    <button type="button" class="cg-adv-follow${cgAdv.followUp === f.id ? " on" : ""}" data-adv-follow-id="${f.id}" aria-pressed="${cgAdv.followUp === f.id ? "true" : "false"}">${escapeHtml(f.label)}</button>`).join("");

  return `<div class="cg-adv-result">
    <div class="cg-adv-badges">
      <span class="on">关系 · ${escapeHtml(result.meta.relLabel)}</span>
      <span>风格 · ${escapeHtml(result.meta.styleLabel)}</span>
      <span class="on">首选 · ${escapeHtml(result.meta.dateName)}</span>
    </div>
    <h3 class="cg-adv-title">${escapeHtml(result.title)}</h3>
    <p class="cg-adv-sub">${escapeHtml(result.sub)}</p>

    <div class="cg-adv-section">
      <h4>为什么先选这里</h4>
      ${reasons}
      <p class="cg-adv-rank">${escapeHtml(m.reasoning.rankingLine)}</p>
    </div>

    <div class="cg-adv-section">
      <h4>三个日期放在一起看</h4>
      <div class="cg-adv-dates">${dates}</div>
    </div>

    <div class="cg-adv-section">
      <h4>那天怎么安排</h4>
      <div class="cg-adv-approach">
        <b>${escapeHtml(m.plan.approach.label)}</b>
        <p>${escapeHtml(m.plan.approach.summary)}</p>
        <ol>${steps}</ol>
      </div>
      <ol class="cg-adv-plan">${day}</ol>
      <p class="cg-adv-after"><b>说完之后</b>${escapeHtml(m.plan.after)}</p>
    </div>

    <div class="cg-adv-section">
      <h4>可以怎么说</h4>
      ${scripts}
      <p class="cg-adv-note">${escapeHtml(m.scripts.note)}</p>
    </div>

    <div class="cg-adv-section">
      <h4>别做这些</h4>
      <ul class="cg-adv-cautions">${cautions}</ul>
    </div>

    <div class="cg-adv-actions">
      <button type="button" class="cg-adv-btn" data-adv-edit>修改选择</button>
      <button type="button" class="cg-adv-btn primary" data-adv-regen>重新生成</button>
      <button type="button" class="cg-adv-btn" data-adv-follow>继续追问</button>
      <button type="button" class="cg-adv-btn text" data-adv-reset>重新开始</button>
    </div>
    <div class="cg-adv-follows" aria-label="继续追问">${follows}</div>
    ${cgAdv.followUp ? cgAdvFollowHtml(result) : ""}
  </div>`;
}

function cgAdvWidgetHtml() {
  if (cgAdv.status === "error") {
    return `<div class="cg-adv-card"><p class="cg-adv-error">${escapeHtml(cgAdv.error || CG_ADV_FALLBACK)}</p><button type="button" class="cg-adv-back" data-adv-back>返回修改</button></div>`;
  }
  if (cgAdv.status === "generating") return cgAdvThinkingHtml();
  if (cgAdv.result) return cgAdvResultHtml(cgAdv.result);
  return cgAdvQuestionHtml();
}

function cgDateChatHtml() {
  const c = cgAdvCopy();
  return `<div class="pg cg-pg cg-chat-pg cg-date-pg" data-cg-conv="date">
    ${cgTopHtml("chat")}
    <div class="cg-thread">
      <div class="cg-time">${escapeHtml(c.timestamp || "")}</div>
      <div class="cg-me"><div class="cg-bubble">${escapeHtml(c.question || "")}</div></div>
      ${cgAdvIntroHtml()}
      <div class="cg-ai cg-adv-turn" id="cgAdvMount">${cgAdvWidgetHtml()}</div>
    </div>
    <button class="cg-down" data-cg-down aria-label="回到底部">${cgIc.down}</button>
    ${cgInputBar()}
    ${cgDrawerHtml()}
  </div>`;
}

function chatgptDatePage() { return { title: "ChatGPT", full: cgDateChatHtml }; }

function cgAdvRender() {
  const mount = appL.querySelector("#cgAdvMount");
  if (!mount) return;
  mount.innerHTML = cgAdvWidgetHtml();
  syncStoryCta();
}

function cgAdvScroll(alignTop) {
  const thread = appL.querySelector(".cg-thread");
  const mount = appL.querySelector("#cgAdvMount");
  if (!thread || !mount) return;
  const delta = mount.getBoundingClientRect().top - thread.getBoundingClientRect().top;
  if (alignTop || delta > 0) {
    thread.scrollTo({ top: Math.max(0, thread.scrollTop + delta - 8), behavior: "smooth" });
  }
}

function cgAdvEnsureOptionsVisible() {
  const thread = appL.querySelector(".cg-thread");
  const card = appL.querySelector("#cgAdvMount .cg-adv-card");
  if (!thread || !card) return;
  const tRect = thread.getBoundingClientRect();
  const cRect = card.getBoundingClientRect();
  const overflow = cRect.bottom - tRect.bottom;
  if (overflow > 0) thread.scrollTop += overflow + 10;
}

function cgAdvGenerate() {
  const lib = cgAdvLib();
  if (!lib) {
    cgAdv.status = "error";
    cgAdv.error = CG_ADV_FALLBACK;
    cgAdvRender();
    return;
  }
  try {
    const result = lib.generateAnswer(cgAdv.answers);
    if (!result.ok) {
      cgAdv.status = "error";
      cgAdv.error = "还需要先选择：" + result.missing.map((x) => x.title).join("、");
      cgAdvRender();
      return;
    }
    cgAdv.result = result;
    cgAdv.status = "success";
  } catch (err) {
    cgAdv.status = "error";
    cgAdv.error = "生成建议时出现问题，请重试一次。";
    if (window.console && console.error) console.error("[cg-advisor]", err);
  }
  cgAdvRender();
  cgAdvScroll(true);
}

function cgAdvPick(qid, val) {
  const lib = cgAdvLib();
  if (!lib) return;
  // 选项点击后会自动翻到下一题；约 300ms 内忽略连点，避免误选下一题
  const now = Date.now();
  if (now < cgAdv.lockUntil) return;
  cgAdv.lockUntil = now + 300;
  cgAdv.answers = Object.assign({}, cgAdv.answers, { [qid]: val });
  const idx = lib.CASE.questions.findIndex((q) => q.id === qid);
  cgAdv.followUp = null;

  if (idx >= 0 && idx < lib.CASE.questions.length - 1) {
    cgAdv.step = idx + 1;
    cgAdv.result = null;
    cgAdv.status = "idle";
    cgAdvRender();
    cgAdvScroll(true);
    return;
  }

  cgAdv.result = null;
  cgAdv.status = "generating";
  cgAdvRender();
  cgAdvScroll(true);
  setTimeout(() => {
    if (cgAdv.status === "generating") cgAdvGenerate();
  }, 520);
}

function cgAdvBack() {
  if (cgAdv.step === 0) return;
  cgAdv.step -= 1;
  cgAdv.result = null;
  cgAdv.status = "idle";
  cgAdv.followUp = null;
  cgAdvRender();
  cgAdvScroll(true);
}

function cgAdvEdit() {
  cgAdv.step = 0;
  cgAdv.result = null;
  cgAdv.status = "idle";
  cgAdv.followUp = null;
  cgAdvRender();
  cgAdvScroll(true);
}

function cgAdvRegenerate() {
  if (!cgAdv.result) return cgAdvEdit();
  cgAdv.followUp = null;
  cgAdv.status = "generating";
  cgAdvRender();
  cgAdvScroll(true);
  setTimeout(() => {
    if (cgAdv.status === "generating") cgAdvGenerate();
  }, 520);
}

function cgAdvResetAll() {
  cgAdvReset();
  cgAdvRender();
  cgAdvScroll(true);
}

function cgAdvToggleFollow(id) {
  cgAdv.followUp = cgAdv.followUp === id ? null : id;
  cgAdvRender();
  const box = appL.querySelector(".cg-adv-followbox");
  const thread = appL.querySelector(".cg-thread");
  if (box && thread) {
    const delta = box.getBoundingClientRect().bottom - thread.getBoundingClientRect().bottom;
    if (delta > 0) thread.scrollTo({ top: thread.scrollTop + delta + 10, behavior: "smooth" });
  }
}

function cgAdvFollowFirst() {
  if (!cgAdv.result || !cgAdv.result.followUps.length) return;
  cgAdvToggleFollow(cgAdv.result.followUps[0].id);
}

/* ===== 结局：她的手机 ===== */
const HER_WEEK = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const herData = () => phoneData.herPhone || {};
const endingData = () => storyRoute === "noOpen"
  ? noOpenPlan
  : ((herData().endings || {})[endingKey] || null);

// 结局入口：只在「他的手机 · 表白日期结果页」出现
function syncStoryCta() {
  const btn = $("#storyCta");
  if (!btn) return;
  const show = storyPhase === "his" && currentApp === "chatgpt"
    && cgAdv.status === "success" && !!cgAdv.result
    && !!appL.querySelector(".cg-date-pg");
  btn.classList.toggle("on", show);
  btn.setAttribute("aria-hidden", show ? "false" : "true");
  btn.tabIndex = show ? 0 : -1;
}

// 以选定日期为基准取某一天：offset === -1 就是「前一天」
function herDate(offset) {
  const end = endingData();
  const base = calParseDate((end && end.target) || "2026-12-24");
  const d = calAddDay(base, offset);
  const wd = HER_WEEK[new Date(d.y, d.m - 1, d.d).getDay()];
  return { y: d.y, m: d.m, d: d.d, wd, full: `${d.y}年${d.m}月${d.d}日 ${wd}`, short: `${d.m}月${d.d}日` };
}

// 把她那台手机的数据准备好：锁屏日期、镜像过来的聊天记录、12/6 之后补的几天
function buildHerPhone() {
  const hp = herData();
  const end = endingData();
  if (!hp || !end) return;
  const isNoOpen = storyRoute === "noOpen";
  // 不打开分支每次抽到的日期和方案都可能不同，用它们做重建标记
  const buildKey = isNoOpen ? `noOpen:${end.id}:${end.ideaIndex}` : endingKey;

  if (isNoOpen) {
    // 她没翻他的手机，故事就发生在当天晚上她自己的房间里
    hp.lockScreen = Object.assign({}, hp.lockScreen, {
      date: "12月10日 星期四",
      day: "10",
      month: "十二月",
      weekday: "星期四",
      lunar: "大雪",
      time: end.lockTime || "23:06",
      notification: {
        app: "KakaoTalk",
        title: "志薰",
        text: end.preview || "睡了吗?? ㅎㅎ",
        time: "现在"
      }
    });
  } else {
    const lock = herDate(-1);
    hp.lockScreen = Object.assign({}, hp.lockScreen, {
      date: `${lock.m}月${lock.d}日 ${lock.wd}`,
      day: String(lock.d),
      month: MONTH_NAMES[lock.m - 1],
      weekday: lock.wd
    });
  }

  // 见面的那一天补进日历和 Days Matter，桌面上 Days Matter 的数字也跟着变
  const meet = herDate(0);
  const meetKey = `${meet.y}-${meet.m}-${meet.d}`;
  hp.calendar = (hp.calendar || []).filter((e) => !e._meet)
    .concat([{ _meet: true, date: meetKey, title: "和志薰见面", time: end.meetTime || "19:00" }]);
  hp.daysmatter = [{ _meet: true, title: "和志薰见面", date: meetKey, kind: "until" }]
    .concat((hp.daysmatter || []).filter((i) => !i._meet));
  const daysToMeet = Math.max(0, dmDaysBetween(herDate(-1), meet));
  const dmApp = (hp.homeApps || []).find((a) => a.id === "daysmatter");
  if (dmApp) dmApp.count = String(daysToMeet);

  const chats = (hp.kakaotalk && hp.kakaotalk.chats) || [];
  const jihun = chats.find((c) => c.id === "jihun");
  if (!jihun || jihun._built === buildKey) return;

  // 他手机上的那份聊天记录，翻过来就是她看到的
  const src = ((phoneData.kakaotalk || {}).chats || []).find((c) => c.id === "berry");
  const mirrored = (src ? src.messages : []).map((m) => {
    if (m.type === "date" || m.date) return { type: "date", text: m.text || m.date };
    const o = Object.assign({}, m);
    o.side = m.side === "me" ? "them" : "me";
    return o;
  });

  if (isNoOpen) {
    // 不再镜像结局里写好的那几天，改由下面的选项对话现写
    jihun.messages = mirrored.concat([{ type: "date", text: "2026年12月10日 星期四" }]);
    jihun.preview = end.preview || "睡了吗?? ㅎㅎ";
    jihun.date = end.lockTime || "23:06";
    jihun.unread = 1;
    jihun._built = buildKey;
    return;
  }

  // 12 月 6 日之后补上的几天；日期分割线按选定日期自动生成
  const story = (hp.story && hp.story.messages) || [];
  const extra = [];
  let line = "";
  story.forEach((m) => {
    const label = herDate(m.d).full;
    if (label !== line) { extra.push({ type: "date", text: label }); line = label; }
    extra.push({ side: m.side, time: m.time, text: m.text });
  });

  jihun.messages = mirrored.concat(extra);
  const last = story[story.length - 1];
  if (last && extra.length) {
    const tail = extra[extra.length - 1];
    jihun.preview = tail.text || "";
    jihun.date = herDate(last.d).short;
  }
  jihun._built = endingKey;
}

function herWallpaper() {
  const w = (herData().lockScreen || {}).wallpaper || "";
  if (!w) return "#181820";
  return /^[a-z-]+\(/i.test(w) ? w : `#181820 url("${w}") center / cover no-repeat`;
}

function enterHerPhone() {
  buildHerPhone();
  storyPhase = "her";
  endingSent = false;
  playerPlaying = false;
  storyToken++;
  PHONE = herData();
  wall.style.background = herWallpaper();
  wall.style.filter = "none";   // 深色模式下的壁纸压暗不作用在她的锁屏上
  wall.classList.remove("dim");
  appStack = []; currentApp = null; topPageEl = null;
  appL.innerHTML = "";
  document.body.classList.remove("kt-open", "cg-open", "am-open");
  island.classList.remove("act", "music");
  if (islandArt) islandArt.innerHTML = "";
  $("#storyCta").classList.remove("on");
  renderHome();
  renderLock();
  loadPlayerAudio();
  showScreen("lock");
}

// 黑场旁白：一行一行浮现；轻触一次先显示全文，再轻触一次才继续
function runBridge(lines) {
  const veil = $("#endVeil"), box = $("#endVeilIn");
  const list = lines || (herData().bridge && herData().bridge.lines) || [];
  box.innerHTML = list.map((t) => `<p class="end-veil-line">${escapeHtml(t)}</p>`).join("");
  const nodes = Array.from(box.children);
  const timers = [];
  let i = 0, allShown = false, finished = false;
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  // 把剩下的几行一次亮完，停在全文状态等第二次点击
  const showAll = () => {
    if (allShown || finished) return;
    allShown = true;
    timers.forEach(clearTimeout);
    nodes.forEach((n) => n.classList.add("on"));
  };
  const finish = () => {
    if (finished) return;
    finished = true;
    timers.forEach(clearTimeout);
    nodes.forEach((n) => n.classList.add("on"));
    // 旁白先退场，黑场里切到她的手机，再把黑场化开
    later(() => nodes.forEach((n) => n.classList.remove("on")), 300);
    later(() => enterHerPhone(), 900);
    later(() => { veil.classList.remove("on"); veil.setAttribute("aria-hidden", "true"); }, 1500);
  };
  const next = () => {
    if (finished) return;
    if (i >= nodes.length) { allShown = true; later(finish, 1500); return; }
    nodes[i].classList.add("on");
    i++;
    later(next, 1500);
  };
  veil.classList.add("on");
  veil.setAttribute("aria-hidden", "false");
  veil.onclick = () => (allShown ? finish() : showAll());
  later(next, 420);
}

function startEnding() {
  if (storyPhase !== "his") return;
  const res = cgAdv.result;
  const key = (res && res.meta && res.meta.dateId) || "christmasEve";
  if (!(herData().endings || {})[key]) return;
  storyRoute = "open";
  endingKey = key;
  endingSent = false;
  storyToken++;
  $("#storyCta").classList.remove("on");
  runBridge();
}

/* --- 不打开：随机抽一份告白计划，直接去她自己的手机 --- */
const noOpenData = () => herData().noOpen || {};
const pickOne = (list) => list[Math.floor(Math.random() * list.length)];

function rollNoOpenPlan() {
  const plans = noOpenData().plans || [];
  if (!plans.length) return null;
  const base = pickOne(plans);
  const ideas = base.ideas || [];
  const idea = ideas.length ? pickOne(ideas) : {};
  return Object.assign({}, base, { idea, ideaIndex: Math.max(0, ideas.indexOf(idea)) });
}

// 把方案里的 {place} 之类换成这一轮抽中的内容
function fillPlan(text) {
  const plan = noOpenPlan || {};
  const idea = plan.idea || {};
  const map = {
    place: idea.place || "",
    detail: idea.detail || "",
    extra: idea.extra || "",
    dateWord: plan.dateWord || "",
    whenWord: plan.whenWord || ""
  };
  return String(text).replace(/\{(place|detail|extra|dateWord|whenWord)\}/g, (_, k) => map[k] || "");
}

let noOpenStarted = false;
let noOpenBusy = false;
let noOpenFinished = false;
let noOpenStep = 0;
let noOpenTone = null;
let noOpenTyping = null;   // opening | lead | reply，用于中途离开后接上进度
let noOpenChoicesReady = false;   // 选项已经备好，等玩家点输入栏

function resetNoOpenChat() {
  noOpenStarted = false;
  noOpenBusy = false;
  noOpenFinished = false;
  noOpenStep = 0;
  noOpenTone = null;
  noOpenTyping = null;
  noOpenChoicesReady = false;
}

function startNoOpenBranch() {
  const plan = rollNoOpenPlan();
  if (!plan) { showPasscode("name"); return; }
  storyRoute = "noOpen";
  storyPhase = "his";
  endingKey = null;
  noOpenPlan = plan;
  endingSent = false;
  storyToken++;

  // 清掉上一轮留下的聊天，让他手机里那份记录重新镜像过来
  const hp = herData();
  const chats = (hp.kakaotalk && hp.kakaotalk.chats) || [];
  const jihun = chats.find((c) => c.id === "jihun");
  if (jihun) { jihun._built = null; jihun.messages = []; jihun.unread = 0; }
  resetNoOpenChat();
  resetCall();

  runBridge(noOpenData().bridge && noOpenData().bridge.lines);
}

/* --- 她的 KakaoTalk：预填的一句话与他的回复 --- */
const endingChat = () => storyPhase === "her" && currentApp === "kakaotalk"
  && ktCurrentChatId === "jihun" && !!appL.querySelector(".kt-chat-pg");

function endingPrefill() {
  if (!endingChat() || endingSent) return;
  if (storyRoute === "noOpen") { resumeNoOpenChat(); return; }
  const end = endingData();
  const input = appL.querySelector(".kt-input");
  if (!end || !input || input.value) return;
  const sendText = (herData().story || {}).sendText || "";
  input.value = end.sendText || sendText || "是明天吗？";
  input.classList.add("kt-prefill");
  input.blur();
}

function ktAppend(chat, box, msg) {
  const prev = chat.messages[chat.messages.length - 1];
  chat.messages.push(msg);
  if (msg.text) chat.preview = msg.text;
  box.insertAdjacentHTML("beforeend", ktMsgHtml(chat, msg, prev));
  box.scrollTop = box.scrollHeight;
}

function ktTyping(box, chat, on) {
  const cur = box.querySelector(".kt-typing");
  if (!on) { if (cur) cur.remove(); return; }
  if (cur) return;
  box.insertAdjacentHTML("beforeend", `<div class="kt-line th first kt-typing" aria-label="正在输入">
      ${ktAvatarHtml(chat, "sm")}
      <span class="kt-typing-bb"><i></i><i></i><i></i></span>
    </div>`);
  box.scrollTop = box.scrollHeight;
}

/* --- 不打开分支：他一句一句发，她来选怎么回 --- */
function ktNoOpenType(lines, done) {
  const box = appL.querySelector(".kt-msgs");
  const chat = ktChatById("jihun");
  if (!box || !chat) return;
  const token = ++storyToken;
  const alive = () => storyToken === token && document.contains(box);
  let delay = 600;
  ktTyping(box, chat, true);
  (lines || []).forEach((m, i) => {
    delay += i === 0 ? 700 : 850;
    setTimeout(() => {
      if (!alive()) return;
      ktTyping(box, chat, false);
      const obj = typeof m === "string" ? { text: m } : m;
      ktAppend(chat, box, { side: "them", time: obj.time || ktNextTime(chat), text: fillPlan(obj.text) });
      if (i < lines.length - 1) setTimeout(() => { if (alive()) ktTyping(box, chat, true); }, 380);
    }, delay);
  });
  setTimeout(() => {
    if (!alive()) return;
    ktTyping(box, chat, false);
    if (done) done();
  }, delay + 700);
}

// 选项备好，但先不展开：输入栏变成「点这里回复」，玩家点一下才弹出选项
function armNoOpenChoices() {
  const step = noOpenPlan && (noOpenPlan.steps || [])[noOpenStep];
  if (!step) return;
  noOpenChoicesReady = true;
  noOpenBusy = false;
  noOpenTyping = null;
  const bar = appL.querySelector("#ktInTap");
  if (bar) {
    bar.hidden = false;
    bar.classList.add("is-ready");
    const input = bar.querySelector(".kt-input-tap");
    if (input) input.textContent = "点这里回复";
  }
}

// 点输入栏：把选项栏展开，输入栏收起来
function openNoOpenChoices() {
  if (storyRoute !== "noOpen" || !noOpenChoicesReady) return;
  const step = noOpenPlan && (noOpenPlan.steps || [])[noOpenStep];
  const bar = appL.querySelector("#ktInTap");
  const box = appL.querySelector("#ktChoices");
  if (!step || !bar || !box) return;
  box.innerHTML = (step.choices || []).map((c, i) =>
    `<button class="kt-choice" type="button" data-kt-choice="${i}">${escapeHtml(fillPlan(c.text))}</button>`).join("");
  bar.hidden = true;
  box.hidden = false;
  noOpenBusy = false;
  noOpenTyping = null;
  const msgs = appL.querySelector(".kt-msgs");
  if (msgs) msgs.scrollTop = msgs.scrollHeight;
}

function hideNoOpenChoices() {
  noOpenChoicesReady = false;
  const box = appL.querySelector("#ktChoices");
  if (box) { box.hidden = true; box.innerHTML = ""; }
  const bar = appL.querySelector("#ktInTap");
  if (bar) {
    bar.hidden = false;
    bar.classList.remove("is-ready");
    const input = bar.querySelector(".kt-input-tap");
    if (input) input.textContent = "输入一条信息";
  }
}

function runNoOpenStep() {
  const step = noOpenPlan && (noOpenPlan.steps || [])[noOpenStep];
  if (!step) {
    finishNoOpenChat();
    return;
  }
  const lead = step.lead || [];
  if (!lead.length) { armNoOpenChoices(); return; }
  noOpenBusy = true;
  noOpenTyping = "lead";
  ktNoOpenType(lead, () => {
    noOpenTyping = null;
    armNoOpenChoices();
  });
}

function startNoOpenChat() {
  if (storyRoute !== "noOpen" || noOpenStarted || !noOpenPlan) return;
  noOpenStarted = true;
  noOpenBusy = true;
  noOpenTyping = "opening";
  const chat = ktChatById("jihun");
  if (chat) chat.unread = 0;
  const badge = appL.querySelector(".kt-cback span");
  if (badge) badge.textContent = "";
  ktNoOpenType(noOpenPlan.opening || [], () => {
    noOpenTyping = null;
    noOpenBusy = false;
    runNoOpenStep();
  });
}

// 离开聊天再回来：不重放整段，只把当前这一步接上
function resumeNoOpenChat() {
  if (storyRoute !== "noOpen" || !noOpenPlan) return;
  if (!noOpenStarted) { startNoOpenChat(); return; }
  if (noOpenFinished) return;
  const typing = noOpenTyping;
  noOpenBusy = false;
  noOpenTyping = null;
  // 如果是在他回复的中途离开，这一步其实已经选过了，直接进下一步
  if (typing === "reply") { runNoOpenStep(); return; }
  const steps = noOpenPlan.steps || [];
  if (noOpenStep < steps.length) armNoOpenChoices();
  else finishNoOpenChat();
}

// 聊天走完：先让他打一通电话，电话挂断之后才翻到日记
function finishNoOpenChat() {
  if (noOpenFinished) return;
  noOpenFinished = true;
  noOpenBusy = false;
  hideNoOpenChoices();
  startIncomingCall(() => showCoda());
}

function chooseNoOpen(i) {
  if (storyRoute !== "noOpen" || noOpenBusy || noOpenFinished) return;
  const step = noOpenPlan && (noOpenPlan.steps || [])[noOpenStep];
  const choice = step && (step.choices || [])[i];
  const box = appL.querySelector(".kt-msgs");
  const chat = ktChatById("jihun");
  if (!choice || !box || !chat) return;
  hideNoOpenChoices();
  noOpenBusy = true;
  noOpenTone = choice.tone || noOpenTone;
  ktAppend(chat, box, { side: "me", time: ktNextTime(chat), text: fillPlan(choice.text) });
  // 先记下这一步已经选过：中途离开再回来不会让她重复选
  noOpenStep++;
  noOpenTyping = "reply";
  ktNoOpenType(choice.replies || [], () => {
    noOpenTyping = null;
    noOpenBusy = false;
    runNoOpenStep();
  });
}

function ktEndingSend() {
  const end = endingData();
  const input = appL.querySelector(".kt-input");
  const box = appL.querySelector(".kt-msgs");
  const chat = ktChatById("jihun");
  if (!end || !input || !box || !chat) return;
  const text = (input.value || "").trim() || end.sendText || (herData().story || {}).sendText || "";
  if (!text) return;

  const token = ++storyToken;
  input.value = "";
  input.classList.remove("kt-prefill");
  input.blur();
  endingSent = true;
  ktAppend(chat, box, { side: "me", time: end.sendTime || "22:41", text });

  const replies = end.replies || [];
  const later = (fn, ms) => setTimeout(() => { if (storyToken === token) fn(); }, ms);
  let delay = 950;
  later(() => ktTyping(box, chat, true), delay);
  replies.forEach((r, i) => {
    delay += i === 0 ? 900 : 1150;
    later(() => {
      ktTyping(box, chat, false);
      ktAppend(chat, box, { side: "them", time: r.time, text: r.text });
      if (i < replies.length - 1) later(() => ktTyping(box, chat, true), 760);
    }, delay);
  });
  later(() => { ktTyping(box, chat, false); showCoda(); }, delay + 1500);
}

function showCoda() {
  const end = endingData();
  if (!end) return;
  const c = end.coda || {};
  $("#endCodaDate").textContent = c.date || "";
  $("#endCodaBody").innerHTML = (c.lines || []).map((t) => `<p>${escapeHtml(withNick(fillPlan(t)))}</p>`).join("");
  const quotes = c.quotes || {};
  const q = storyRoute === "noOpen" ? (quotes[noOpenTone || "warm"] || quotes.warm) : c.quote;
  const quote = Array.isArray(q) ? (pickOne(q) || "") : (q || "");
  $("#endCodaQuote").textContent = withNick(fillPlan(quote));
  const el = $("#endCoda");
  el.classList.add("on");
  el.setAttribute("aria-hidden", "false");
}

function hideCoda() {
  const el = $("#endCoda");
  el.classList.remove("on");
  el.setAttribute("aria-hidden", "true");
  showEndCard();
}

/* --- 结局卡：日记合上之后，给这一次的结局一个收尾 --- */
const cnDate = (iso) => {
  const m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(String(iso || ""));
  return m ? `${Number(m[2])}月${Number(m[3])}日` : "";
};

function showEndCard() {
  const hp = herData();
  const card = hp.endCard || {};
  const routeText = (storyRoute === "noOpen" ? card.noOpen : card.open) || {};
  let meta = "";
  if (storyRoute === "noOpen") {
    const plan = noOpenPlan || {};
    meta = [plan.dateWord, plan.meetTime].filter(Boolean).join(" · ");
  } else {
    const end = (hp.endings || {})[endingKey] || {};
    meta = [cnDate(end.target), end.dateName, end.meetTime].filter(Boolean).join(" · ");
  }
  $("#endCardKicker").textContent = card.kicker || "END";
  $("#endCardTitle").textContent = withNick(routeText.title || "");
  $("#endCardMeta").textContent = meta;
  $("#endCardLine").textContent = withNick(routeText.line || "");
  const el = $("#endCard");
  el.classList.add("on");
  el.setAttribute("aria-hidden", "false");
}

function hideEndCard() {
  const el = $("#endCard");
  el.classList.remove("on");
  el.setAttribute("aria-hidden", "true");
}

/* --- 不打开线：聊天结束后他打来的那通电话 --- */
let callTimerId = null;
let callEndTimer = null;
let callDone = null;
let callDeclines = 0;
let callToken = 0;

function resetCall() {
  clearInterval(callTimerId); callTimerId = null;
  clearTimeout(callEndTimer); callEndTimer = null;
  callDone = null;
  callDeclines = 0;
  callToken++;
  const audio = $("#callAudio");
  if (audio) {
    audio.onended = null;
    audio.pause();
    try { audio.currentTime = 0; } catch (e) { /* 还没加载出元数据时忽略 */ }
  }
  const el = $("#callL");
  if (el) {
    el.classList.remove("on");
    el.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("call-open");
}

function startIncomingCall(onDone) {
  const call = noOpenData().call || {};
  const el = $("#callL");
  if (!el || !call.audio) { if (onDone) onDone(); return; }
  resetCall();
  callDone = onDone || null;
  $("#callKind").textContent = call.kind || "KakaoTalk 语音通话";
  $("#callName").textContent = call.from || "志薰";
  $("#callSub").textContent = call.subtitle || "邀请你进行语音通话";
  $("#callTimer").hidden = true;
  $("#callTimer").textContent = "00:00";
  const cap = $("#callCaption");
  cap.textContent = "";
  cap.classList.remove("on");
  $("#callIncoming").hidden = false;
  $("#callActive").hidden = true;
  const av = $("#callAvatar");
  av.innerHTML = call.avatar ? `<img src="${escapeHtml(call.avatar)}" alt="" />` : "";
  const audio = $("#callAudio");
  audio.src = call.audio;
  audio.load();
  el.classList.add("on");
  el.setAttribute("aria-hidden", "false");
  document.body.classList.add("call-open");
}

function answerCall() {
  const call = noOpenData().call || {};
  const el = $("#callL");
  if (!el || !el.classList.contains("on") || $("#callIncoming").hidden) return;
  $("#callIncoming").hidden = true;
  $("#callActive").hidden = false;
  $("#callSub").textContent = "通话中";

  const startedAt = Date.now();
  const timer = $("#callTimer");
  timer.hidden = false;
  clearInterval(callTimerId);
  callTimerId = setInterval(() => {
    const s = Math.floor((Date.now() - startedAt) / 1000);
    timer.textContent = `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  }, 250);

  const cap = $("#callCaption");
  if (call.caption) {
    setTimeout(() => {
      if (!el.classList.contains("on")) return;
      cap.textContent = withNick(fillPlan(call.caption));
      cap.classList.add("on");
    }, 1100);
  }

  const audio = $("#callAudio");
  const token = callToken;
  let ended = false;
  const finish = () => {
    if (ended || token !== callToken) return;
    ended = true;
    endCall();
  };
  audio.onended = finish;
  try { audio.currentTime = 0; } catch (e) { /* 忽略 */ }
  const played = audio.play();
  if (played && played.catch) played.catch(() => { /* 被浏览器拦下也继续走计时兜底 */ });
  // 音频没触发 ended（离线 / 格式不支持）时，按它的长度收尾
  const ms = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration * 1000 : 5800;
  clearTimeout(callEndTimer);
  callEndTimer = setTimeout(finish, ms + 900);
}

function endCall() {
  const call = noOpenData().call || {};
  clearInterval(callTimerId); callTimerId = null;
  clearTimeout(callEndTimer); callEndTimer = null;
  const audio = $("#callAudio");
  if (audio) { audio.onended = null; audio.pause(); }
  const el = $("#callL");
  if (!el) return;
  // 已经不在通话界面：直接继续
  if (!el.classList.contains("on")) {
    const done = callDone;
    callDone = null;
    if (done) done();
    return;
  }
  $("#callIncoming").hidden = true;
  $("#callActive").hidden = true;
  $("#callSub").textContent = call.endingNote || "通话结束";
  const token = ++callToken;
  setTimeout(() => {
    if (token !== callToken) return;
    el.classList.remove("on");
    el.setAttribute("aria-hidden", "true");
    document.body.classList.remove("call-open");
    const done = callDone;
    callDone = null;
    if (done) done();
  }, 1100);
}

function declineCall() {
  const call = noOpenData().call || {};
  const el = $("#callL");
  if (!el || !el.classList.contains("on") || $("#callIncoming").hidden) return;
  // 第一次挂掉，他会再打一次；第二次才真的挂断
  if (callDeclines === 0) {
    callDeclines = 1;
    $("#callSub").textContent = "已拒绝";
    $("#callIncoming").hidden = true;
    setTimeout(() => {
      if (!el.classList.contains("on") || callDeclines !== 1) return;
      $("#callSub").textContent = call.againSubtitle || "又打来了";
      $("#callIncoming").hidden = false;
    }, 1400);
    return;
  }
  callDeclines = 2;
  endCall();
}

/* ===== ChatGPT · 音乐剧穿搭建议 ===== */
function cgMusicalChatHtml() {
  const m = cgData().musical || {};
  const intro = (m.intro || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  const looks = (m.looks || []).map((look) => {
    const items = (look.items || []).map(([label, text]) => `<li><span>${escapeHtml(label)}</span><b>${escapeHtml(text)}</b></li>`).join("");
    return `<article class="cg-look-card${look.top ? " top" : ""}">
      <div class="cg-look-head">
        <span class="cg-look-no">${escapeHtml(look.no || "")}</span>
        ${look.top ? '<span class="cg-look-badge">首选</span>' : ""}
      </div>
      <h4 class="cg-look-title">${escapeHtml(look.title || "")}</h4>
      <p class="cg-look-sub">${escapeHtml(look.sub || "")}</p>
      <div class="cg-look-label">怎么搭</div>
      <ul class="cg-look-items">${items}</ul>
      <p class="cg-look-why"><b>为什么适合你</b>${escapeHtml(look.why || "")}</p>
      ${look.note ? `<p class="cg-look-note">${escapeHtml(look.note)}</p>` : ""}
    </article>`;
  }).join("");
  const w = m.whySection || {};
  const priorities = (w.priorities || []).map(([label, text]) => `<div class="cg-look-priority"><b>${escapeHtml(label)}</b><span>${escapeHtml(text)}</span></div>`).join("");
  const closing = (w.closing || []).map((p) => `<p class="cg-look-lead">${escapeHtml(p)}</p>`).join("");
  const details = m.details || {};
  const detailItems = (details.items || []).map(([lead, text]) => `<li><b>${escapeHtml(lead)}</b>${escapeHtml(text)}</li>`).join("");

  return `<div class="pg cg-pg cg-chat-pg cg-musical-pg" data-cg-conv="musical">
    ${cgTopHtml("chat")}
    <div class="cg-thread">
      <div class="cg-time">${escapeHtml(m.timestamp || "")}</div>
      <div class="cg-me"><div class="cg-bubble">${escapeHtml(m.question || "")}</div></div>
      <div class="cg-ai cg-look-intro">${intro}</div>
      <div class="cg-ai cg-look-section">
        <h3 class="cg-look-h">${escapeHtml(m.looksHeading || "")}</h3>
        ${looks}
      </div>
      <div class="cg-ai cg-look-section">
        <h3 class="cg-look-h">${escapeHtml(w.heading || "")}</h3>
        <p class="cg-look-lead">${escapeHtml(w.intro || "")}</p>
        <p class="cg-look-lead">${escapeHtml(w.lead || "")}</p>
        <div class="cg-look-priorities">${priorities}</div>
        ${closing}
      </div>
      <div class="cg-ai cg-look-section">
        <h3 class="cg-look-h">${escapeHtml(details.heading || "")}</h3>
        <ol class="cg-look-details">${detailItems}</ol>
      </div>
    </div>
    <button class="cg-down" data-cg-down aria-label="回到底部">${cgIc.down}</button>
    ${cgInputBar()}
    ${cgDrawerHtml()}
  </div>`;
}
function chatgptMusicalPage() { return { title: "ChatGPT", full: cgMusicalChatHtml }; }

/* ===== 事件 ===== */
const nmHint = $("#nmHint");
function openNameScreen(choice) {
  introChoice = choice;
  if (choice === "noOpen") {
    nmHint.textContent = "先告诉我你的名字吧。他会这样叫你。";
    nmHint.hidden = false;
  } else {
    nmHint.textContent = "";
    nmHint.hidden = true;
  }
  showScreen("name");
  setTimeout(() => nmInput.focus(), 360);
}
$("#introOpen").addEventListener("click", () => openNameScreen("open"));
$("#introNo").addEventListener("click", () => openNameScreen("noOpen"));

let startY = null;
lockL.addEventListener("pointerdown", (e) => { startY = e.clientY; });
lockL.addEventListener("pointerup", (e) => {
  if (startY !== null && startY - e.clientY > 55) unlockFromLock();
  startY = null;
});
lockL.addEventListener("click", (e) => {
  // 播放器挂件上只有三个控制键拦截点击，其余区域照常解锁
  if (e.target.closest(".lk-btn, [data-lp]")) return;
  unlockFromLock();
});
// 她的手机没有密码，锁屏点一下就进桌面
function unlockFromLock() {
  if (storyPhase === "her") { showScreen("home"); return; }
  showPasscode();
}
$("#lkPlayer").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lp]");
  if (!btn) return;
  if (btn.dataset.lp === "play") handlePlayerButton(btn);
});

// 锁屏 / 桌面小组件共用一个音频元素
const lkAudio = $("#lkAudio");
if (lkAudio) {
  lkAudio.addEventListener("play", () => { playerPlaying = true; setPlayerUi(); });
  lkAudio.addEventListener("pause", () => { playerPlaying = false; setPlayerUi(); });
  lkAudio.addEventListener("timeupdate", renderPlayerTimes);
  lkAudio.addEventListener("loadedmetadata", renderPlayerTimes);
  lkAudio.addEventListener("ended", () => {
    playerPlaying = false;
    setPlayerUi();
    try { lkAudio.currentTime = 0; } catch (e) { /* 忽略 */ }
    renderPlayerTimes();
  });
}

$("#pcPad").addEventListener("click", (e) => {
  const key = e.target.closest("[data-pc]");
  if (key) pressDigit(key.dataset.pc);
});
$("#pcCancel").addEventListener("click", () => {
  pcValue = ""; pcBusy = false;
  passL.classList.remove("unlock");
  updateDots();
  if (passOrigin === "name") {
    showScreen("name");
    setTimeout(() => nmInput.focus(), 320);
  } else {
    showScreen("lock");
  }
});
$("#pcSos").addEventListener("click", () => { /* 装饰 */ });

/* ===== 昵称设置 ===== */
function afterNickname() {
  nmInput.blur();
  nmHint.hidden = true;
  if (introChoice === "noOpen") {
    introChoice = "open";
    startNoOpenBranch();
    return;
  }
  showPasscode("name");
}
function applyNickname() {
  const v = nmInput.value.trim();
  if (!v) {
    nmInput.classList.remove("shake");
    void nmInput.offsetWidth;
    nmInput.classList.add("shake");
    return;
  }
  heroineName = v;
  afterNickname();
}
nmInput.addEventListener("input", () => {
  nmInput.classList.remove("shake");
  nmOk.disabled = !nmInput.value.trim();
});
nmInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); applyNickname(); }
});
nmOk.addEventListener("click", applyNickname);
$("#nmSkip").addEventListener("click", afterNickname);

$("#homeL").addEventListener("click", (e) => {
  const play = e.target.closest("[data-home-play]");
  if (play) { handlePlayerButton(play); return; }
  if (e.target.closest("#wCal")) { openApp("calendar"); return; }
  const btn = e.target.closest("[data-app]");
  if (!btn) return;
  // 她的手机里 KakaoTalk、相册、备忘录、日历、音乐和 Days Matter 都能打开，其余图标只是桌面陈设
  if (storyPhase === "her") {
    if (["kakaotalk", "photos", "notes", "calendar", "applemusic", "daysmatter"].includes(btn.dataset.app)) openApp(btn.dataset.app);
    return;
  }
  if (!IMPLEMENTED_APPS.has(btn.dataset.app)) return;
  openApp(btn.dataset.app);
});
$("#homeL").addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  if (!e.target.closest("#wCal")) return;
  e.preventDefault();
  openApp("calendar");
});
$("#themeBtn").addEventListener("click", () => document.body.classList.toggle("dark"));
$("#hb").addEventListener("click", () => {
  if (currentApp) exitApp();
  else if (nameL.classList.contains("active")) { showScreen("intro"); }
  else if (passL.classList.contains("active")) { showScreen("lock"); }
  else if (homeL.classList.contains("active")) { showScreen("lock"); }
});

$("#appL").addEventListener("click", (e) => {
  const back = e.target.closest(".nb-back, .bk, [data-pop]");
  if (back) { popPage(); return; }

  /* 相册 */
  const phCell = e.target.closest("[data-photo-open]");
  if (phCell) { openPhotoViewer(Number(phCell.dataset.photoOpen)); return; }

  /* Apple Music */
  if (e.target.closest("[data-am-back]")) { popPage(); return; }
  const amSong = e.target.closest("[data-am-song]");
  if (amSong) { amSelectSong(Number(amSong.dataset.amSong)); return; }
  if (e.target.closest("[data-am-toggle]")) { amTogglePlaying(); return; }
  if (e.target.closest("[data-am-shuffle]")) { amToggleShuffle(); return; }

  /* ChatGPT */
  const cgPg = e.target.closest(".cg-pg");
  if (e.target.closest("[data-cg-drawer]")) { if (cgPg) cgPg.classList.add("drawer"); return; }
  if (e.target.closest("[data-cg-close]")) { if (cgPg) cgPg.classList.remove("drawer"); return; }
  const cgHist = e.target.closest("[data-cg-hist]");
  if (cgHist) {
    if (cgPg) cgPg.classList.remove("drawer");
    const entry = cgHistEntry(cgHist.dataset.cgHist);
    if (!entry) return;
    const conv = entry.id === "confess" ? "1" : entry.id;
    const cur = appL.querySelector(".cg-pg");
    if (cur && cur.dataset.cgConv === conv) return;
    // 从任意对话切换时替换当前页，而不是把旧对话压在栈里
    if (cur && cur.dataset.cgConv) appStack.pop();
    if (entry.id === "dateAdvice") {
      cgAdvReset();
      pushPage(chatgptDatePage());
      requestAnimationFrame(() => requestAnimationFrame(cgAdvEnsureOptionsVisible));
    } else if (entry.id === "musical") {
      pushPage(chatgptMusicalPage());
    } else if (entry.id === "confess") {
      pushPage(chatgptChatPage());
    } else {
      pushPage(chatgptQaPage(entry.title));
    }
    return;
  }
  const advPick = e.target.closest("[data-adv-pick]");
  if (advPick) { cgAdvPick(advPick.dataset.advPick, advPick.dataset.advVal); return; }
  if (e.target.closest("[data-adv-back]")) { cgAdvBack(); return; }
  if (e.target.closest("[data-adv-edit]")) { cgAdvEdit(); return; }
  if (e.target.closest("[data-adv-regen]")) { cgAdvRegenerate(); return; }
  if (e.target.closest("[data-adv-reset]")) { cgAdvResetAll(); return; }
  if (e.target.closest("[data-adv-follow]")) { cgAdvFollowFirst(); return; }
  const advFollow = e.target.closest("[data-adv-follow-id]");
  if (advFollow) { cgAdvToggleFollow(advFollow.dataset.advFollowId); return; }
  const cgNew = e.target.closest("[data-cg-newchat]");
  if (cgNew) {
    if (cgPg) cgPg.classList.remove("drawer");
    if (currentApp === "chatgpt" && appStack.length > 1) popPage();
    return;
  }
  if (e.target.closest("[data-cg-send]")) { cgSend(); return; }
  if (e.target.closest("[data-cg-down]")) {
    const t = appL.querySelector(".cg-thread");
    if (t) t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
    return;
  }
  const cgSug = e.target.closest("[data-cg-sug]");
  if (cgSug) {
    const i = appL.querySelector(".cg-input");
    if (i) { i.value = cgSug.dataset.cgSug; i.focus(); const b = i.closest(".cg-inputbar"); if (b) b.classList.add("typing"); }
    return;
  }
  const chatRow = e.target.closest("[data-chat]");
  if (chatRow) {
    ktCurrentChatId = chatRow.dataset.chat;
    storyToken++;
    pushPage(kakaotalkChatPage(ktCurrentChatId));
    if (ktCurrentChatId === "jihun") requestAnimationFrame(endingPrefill);
    return;
  }
  const ktChoice = e.target.closest("[data-kt-choice]");
  if (ktChoice) { chooseNoOpen(Number(ktChoice.dataset.ktChoice)); return; }
  // 不打开分支：点输入栏（或发送键）才展开选项
  if (e.target.closest("[data-kt-tap]")) { openNoOpenChoices(); return; }
  if (e.target.closest("[data-send]")) { ktSendMessage(); return; }

  /* 日历 */
  const calDay = e.target.closest("[data-cal-day]");
  if (calDay) { calSelectDay(calDay.dataset.calDay); return; }
  const calNav = e.target.closest("[data-cal-nav]");
  if (calNav) { calShiftMonth(Number(calNav.dataset.calNav)); return; }
  if (e.target.closest("[data-cal-today]")) { calGoToday(); return; }

  /* Temu 顶部标签 */
  const tTab = e.target.closest("[data-temu-tab]");
  if (tTab) {
    temuTab = tTab.dataset.temuTab;
    document.querySelectorAll("[data-temu-tab]").forEach((b) => b.classList.toggle("on", b === tTab));
    const grid = document.querySelector(".t-grid");
    if (grid) grid.innerHTML = temuCards();
    return;
  }

  const note = e.target.closest("[data-note]");
  if (note) {
    const cur = appStack[appStack.length - 1];
    pushPage(noteDetailPage(Number(note.dataset.note), (cur && cur.title) || "备忘录"));
    return;
  }
  const folder = e.target.closest("[data-folder]");
  if (folder) { pushPage(notesListPage(folder.dataset.folder)); return; }
  const edit = e.target.closest("[data-edit]");
  if (edit) { edit.textContent = edit.textContent === "编辑" ? "完成" : "编辑"; return; }
});

$("#appL").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  if (e.target.classList.contains("kt-input")) {
    e.preventDefault();
    if (e.target.classList.contains("kt-input-tap")) openNoOpenChoices();
    else ktSendMessage();
  }
  else if (e.target.classList.contains("cg-input")) { e.preventDefault(); cgSend(); }
});

$("#appL").addEventListener("input", (e) => {
  if (!e.target.classList.contains("cg-input")) return;
  const bar = e.target.closest(".cg-inputbar");
  if (bar) bar.classList.toggle("typing", !!e.target.value.trim());
});

// 聊天区滚动时显示 / 隐藏“回到底部”按钮
$("#appL").addEventListener("scroll", (e) => {
  const t = e.target;
  if (!t.classList || !t.classList.contains("cg-thread")) return;
  const btn = t.closest(".cg-pg") && t.closest(".cg-pg").querySelector(".cg-down");
  if (btn) btn.classList.toggle("show", t.scrollHeight - t.scrollTop - t.clientHeight > 80);
}, true);

/* ===== 结局：转场、日记卡片与结局卡 ===== */
$("#storyCta").addEventListener("click", startEnding);
$("#endCoda").addEventListener("click", (e) => {
  if (e.target.closest("[data-coda-close]") || e.target.id === "endCoda") hideCoda();
});
$("#endRestart").addEventListener("click", () => location.reload());
$("#endStay").addEventListener("click", () => { hideEndCard(); exitApp(); });

/* ===== 不打开线：最后那通电话 ===== */
$("#callAnswer").addEventListener("click", answerCall);
$("#callDecline").addEventListener("click", declineCall);
$("#callHangup").addEventListener("click", endCall);
document.addEventListener("keydown", (e) => {
  if ($("#photoView").classList.contains("on")) {
    if (e.key === "Escape") { e.preventDefault(); closePhotoViewer(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); stepPhoto(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); stepPhoto(1); }
    return;
  }
  if (e.key !== "Escape" && e.key !== "Enter") return;
  if (!$("#endCoda").classList.contains("on")) return;
  e.preventDefault();
  hideCoda();
});

/* ===== 相册：查看大图 ===== */
$("#photoView").addEventListener("click", (e) => {
  if (e.target.closest("[data-photo-close]")) { closePhotoViewer(); return; }
  const step = e.target.closest("[data-photo-step]");
  if (step) { stepPhoto(Number(step.dataset.photoStep)); return; }
  if (e.target.closest("[data-photo-fav]")) { togglePhotoFav(); return; }
});
let phSwipe = null;
$("#photoStage").addEventListener("pointerdown", (e) => { phSwipe = { x: e.clientX, y: e.clientY }; });
$("#photoStage").addEventListener("pointerup", (e) => {
  if (!phSwipe) return;
  const dx = e.clientX - phSwipe.x;
  const dy = e.clientY - phSwipe.y;
  phSwipe = null;
  if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) stepPhoto(dx < 0 ? 1 : -1);
});
$("#photoStage").addEventListener("pointercancel", () => { phSwipe = null; });

/* ===== 整体等比缩放：让 393×852 的设计稿适配任意窗口 ===== */
function fitPhone() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const mobile = vw <= 430;
  const sc = mobile
    ? Math.min(vw / 393, vh / 852)
    : Math.min(vw / 393, (vh - 36) / 852, 430 / 393);
  document.documentElement.style.setProperty("--sc", Math.max(0.2, sc).toFixed(4));
}
window.addEventListener("resize", fitPhone);
window.addEventListener("orientationchange", fitPhone);

/* ===== 初始化 ===== */
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
}
fitPhone();
renderIntro();
renderLock();
renderHome();
showScreen("intro");

# 捡到志薰的手机

这是一个无需后端的静态互动网页。直接双击 `index.html`，或运行 `python3 server.py` 后访问 http://127.0.0.1:8769 预览。

## 编辑剧情

日后主要编辑 [content.js](content.js)：

- `opening`：开屏页的标签、首行、正文、最后的提问，以及「打开 / 不打开」按钮文字
- `lockScreen`：锁屏日期、时间、天气、农历、运营商、电量、壁纸（`wallpaper`），以及锁屏 / 桌面共用的音乐播放器（`player`：歌名、歌手、进度与时长）
- `home`：桌面照片小组件的图片（`photo`）
- `homeApps`：桌面图标顺序，`badge` 为红色角标，`count` 显示在 Days Matter 图标上
- `dockApps`：Dock 里的应用；Safari 仅作装饰，日历与 ChatGPT 点开都是真的应用
- `notes`：备忘录
  - `category`：所属文件夹，`"日记"` 或 `"备忘录"`，对应「文件夹 → iCloud」下的文件夹
  - 列表标题默认显示日期（`date` 写成 `260913` 就显示 260913）；写 `title` 则优先显示标题
  - 正文里以 `* ` 开头的行会渲染成圆点列表
  - `time`：可选，详情页顶部会显示「2026年9月13日 21:57」这样的居中日期行
  - 详情页的加粗标题行同样显示日期；`body` 原样逐段显示，段落之间不额外留白
  - `image`：可选，填图片路径（如 `pics/261001日记.jpeg`），列表右侧会显示缩略图，正文第一段下方也会插入大图
- `calendar`：日历日程，字段与交互见下方「日历」一节
- `kakaotalk`：KakaoTalk 聊天列表与对话
  - `chats[]`：每个聊天一项；`id` 为唯一标识，`name` 名字，`avatar` 头像上的字（写 `avatarImage: "pics/xx.jpg"` 则用图片），`preview` 列表预览，`date` 列表日期，`unread` 未读数
  - `pinned: true`：置顶，列表里始终排在最前面，名称前会有一个图钉
  - `notice`：可选，进入聊天后顶部常驻的置顶公告，例如 `notice: "对狗好才是真的好"`，前面会自动加「置顶」
  - `members`：可选，群聊成员表 `{ 成员ID: { name, avatar } }`；写了它以后，`messages[]` 里可以用 `sender: "成员ID"` 指定这句话是谁说的
  - 底部导航与「未读」标签上的数字由所有 `unread` 自动相加；列表顺序按 `chats[]` 里的先后排列（置顶的除外）
  - `messages[]` 按时间先后排列：
    - 日期分割线：`{ type: "date", text: "2026年10月20日 星期二" }`
    - 普通消息：`{ side: "me" | "them", time: "23:33", text: "..." }`；群聊里加 `sender: "mom"` 指定发言成员，同一成员连续发言时只显示一次头像和名字
    - Apple Music 卡片：`{ side: "them", time: "23:31", music: { title, artist, album, desc, link, cover } }`（`cover` 可填封面图片路径）
    - PDF 卡片：`{ side: "me", time: "23:40", pdf: { name, expire, size } }`，`expire` 与 `size` 都可省略
    - 图片：`{ side: "me", time: "16:43", image: "pics/doori1.jpeg" }`，会以圆角图片气泡显示
  - 输入框里打字发送后，消息会实时出现在右侧，同时更新列表预览
- `applemusic`：手机里 Apple Music 的 12 首歌单。每项写 `{ title, artist, cover, glyph, tint }`：
  - `cover` 对应 `style.css` 里的 `am-c-<cover>` 封面样式，默认 `default`
  - `glyph` 是封面上那个短字符，`tint` 是顶部柔光的两段颜色（`["#6f2d3f", "#d16b4d"]`）
  - 增删歌曲后，换封面时同步增加对应的 `.am-c-*` 类即可
- `temu`：Temu 购物浏览、收藏、订单
- `herPhone`：结局里切到「她自己的手机」之后显示的全部内容，见下方「结局：把手机还给他」
- `chatgpt`：`history` 是侧边栏「最近」列表，按时间从新到旧排列，每一项写 `{ id, title, time }`：

  - `id` 为 `confess` / `dateAdvice` / `musical` 时，点开的是下面三份完整回答，`time` 显示在对话顶部
  - 其余 `id` 直接在条目里写 `question` 和 `answer`，就是一条普通的一问一答（`answer` 支持空行分段、`- ` 列表和 `**小标题**`）
  - 增删条目只改这个数组即可，点开时会自动渲染；三条完整回答分别在 `chat`（表白建议）、`dateAdvice`（表白日期比较）、`musical`（音乐剧穿搭建议）里
  - `replies` 是输入框发送普通消息时的占位回复

每项都附有可直接替换的示例。`\n` 会在备忘录中换行。改日期时请同步修改 `lockScreen.date / day / month / weekday`，锁屏、状态栏、日历图标与桌面日历组件才会一致。

## 开屏与昵称

打开页面会先出现「开屏」：Hi你好、2026 年 12 月 10 日、汉江公园的场景和「要不要打开他的手机」的提问。内容在 [content.js](content.js) 的 `opening`。

1. 点「打开」进入「你的名字是」昵称页；输入后点「继续」进入密码画面，正确密码后进入主屏幕。
2. 点「不打开」会进入占位画面，文字在 `opening.declined` 里，目前是「内容待补充」和「重新选择」；后续直接替换这四项即可。
3. 在密码画面点「取消」会回到昵称页，已输入的名字会保留；从主屏幕按 Home 条再次锁屏后，解锁会直接回到主屏幕。

昵称会替换 `content.js` 里所有的 `ㅇㅇ`：聊天列表、聊天页顶栏、气泡上方的名字、头像里的首字、消息文本中的 `ㅇㅇ`，以及备忘录正文 / 预览和日历日程标题中的 `ㅇㅇ`。

- 点「先跳过」则保持 `ㅇㅇ` 不变，也会进入密码画面
- 昵称只在本次打开页面时有效，刷新后需要重新输入（密码本来也每次都要重新输）

## 日历

点桌面上的日历小组件、或 Dock 里的日历图标，都能打开日历。默认停在手机当前月份并选中当天（2026 年 12 月 10 日）。点任意日期，下方会显示这一天的日程；点左上 / 右上箭头切换月份，点右上角「今天」回到当天。

数据在 [content.js](content.js) 的 `calendar`：

- `date`：日期，写 `260729`（YYMMDD）或 `2026-07-29`
- `end`：可选，跨天日程的结束日期，例如秋夕假期写 `{ date: "260924", end: "260926", title: "秋夕假期" }`，三天都会显示圆点
- `title`：日程标题，其中 `ㅇㅇ` 会替换成开屏输入的昵称
- `time`：可选，写 `09:00` 或 `14:00-17:30`；不写表示「全天」

有日程的日期下方会显示彩色圆点，跨月时相邻月份的日期也可以直接点。原来的占位日程与底部「日程」总列表已经删除。

## 表白日期建议

这个问答有两处入口，共用同一份内容与规则：

1. **手机里的 ChatGPT**：打开 ChatGPT → 左上角菜单 →「表白日期比较」。机主已经问过「和女生表白选择平安夜、圣诞节还是元旦？」，点进去会直接看到可选的「关系」和「风格」选项。
2. **[表白日期.html](表白日期.html)**：独立页面，不与手机剧情互相影响，直接双击打开即可。

两处都先显示通用结论和三个日期的对比，再依次询问「关系」与「想要的风格」。答案由本地规则引擎生成，不需要联网、不保存选择，也不调用任何 AI 接口。结果包含推荐理由、三个日期的比较、行动方案、三句不同的话术和注意事项，并支持返回上一步修改、重新生成、继续追问和重新开始。

### 文件与架构

- `advisor.js`：纯数据与规则引擎，不操作 DOM，同时被手机和独立页面加载，暴露为 `window.ConfessionAdvisor`
- `app.js` 的「ChatGPT · 表白日期比较」段：手机内的对话界面、状态与交互
- `content.js` 的 `chatgpt.dateAdvice`：机主的提问、时间与通用结论；「表白日期比较」这条历史记录也在 `chatgpt.history` 中
- `表白日期.html` 内的页面代码按「状态 → 渲染 → 事件」组织

`advisor.js` 内部按「配置数据 → 规则引擎」分区：

- `CASE`：问题、日期、文案与规则。规则使用稳定的英文 ID（如 `ambiguous`、`romantic`），中文只负责显示
- `CASE.rules`：每条规则包含 `id`、`priority`、`when`、`effects`；`when` 里的条件全部匹配才生效，优先级高的规则先占用 `approach` / `tone` 等独占槽位
- `generateAnswer(answers)`：纯函数，返回完整答案对象；后续接真实 AI 接口时可以替换这一层，而不动页面渲染
- 打开控制台的 `window.ConfessionAdvisor` 可以查看规则、直接调用引擎调试

要增加新的问题或规则，只需扩展 `CASE.questions`、`CASE.rules` 和对应文案；如果新增维度，记得在 `CASE.questions` 与规则的 `when` 中使用同一个英文 ID。手机内的问题卡片会自动跟随 `CASE.questions` 的顺序渲染。

## 结局：把手机还给他

在手机里的 ChatGPT 走完「表白日期比较」，生成结果后，屏幕底部会出现一颗「把手机还给他」的按钮（只在结果页出现，见 [app.js](app.js) 的 `syncStoryCta()`）。点它之后：

1. 黑场旁白一行一行浮现，轻触可直接跳过
2. 画面切到 **ㅇㅇ 自己的手机**：锁屏停在选定日期的前一天 22:41
3. 点锁屏进入她的桌面，再打开 KakaoTalk →「志薰」（桌面上的「相册」也能打开，里面是 19 张他的照片，点开可以左右滑动看大图）
4. 聊天记录和他手机上的那份完全一致（运行时左右镜像过来），之后接着 12 月 6 日之后的几天
5. 输入框里已经写好「是明天吗？」，由操作的人按下发送
6. 「正在输入」→ 他的三条邀请 → 最后浮出一张日记卡片

三个日期对应三份不同的邀约和日记，全部在 [content.js](content.js) 的 `herPhone` 里：

- `lockScreen`：她的锁屏时间、天气、电量、通知条、正在听的歌；`wallpaper` 写 CSS 渐变或图片路径都行
- `homeApps` / `dockApps`：她的桌面。她的手机里只有 KakaoTalk 和相册可以真的打开，其余图标只是陈设
- `album`：她的相册。`photos` 是照片墙的顺序，`fav: true` 表示这张已经点过小红心；`person` 是「人物与地点」那一栏的名字与头像
- `bridge.lines`：转场时逐行浮现的旁白
- `story.sendText`：输入框里预先写好的那句话
- `story.messages`：12 月 6 日之后补的几天；`d` 是「离选定日期还有几天」（`-1` 就是前一天），日期分割线会自动生成，`side: "them"` 是志薰
- `endings.christmasEve` / `endings.christmas` / `endings.newYear`：键名与 `advisor.js` 的日期 ID 对应
  - `target`：约会那天，跳转发生在它的前一天晚上
  - `replies`：他发回来的消息（邀请的主体）
  - `coda`：最后那张日记卡片的日期、正文和结尾那句话

他手机上的那份聊天记录来自 `kakaotalk.chats` 里 `id: "berry"` 的那一条，改它两边都会变。

## 音乐剧穿搭建议

打开 ChatGPT → 左上角菜单 →「音乐剧穿搭建议」，可以看到机主提问后收到的一次完整回答。内容在 [content.js](content.js) 的 `chatgpt.musical`：

- `question` / `timestamp`：机主的问题与对话时间
- `intro`：开场结论，先说明「有设计感的 Smart Casual」这一方向
- `looks`：三套搭配，每套包含单品清单、适合原因和可选提醒；`top: true` 的那套会显示「首选」
- `whySection`：为什么更推荐第一套，以及五条取舍优先级
- `details`：明天出门前值得注意的三个细节

原回答的第四节「进一步帮你缩小选择范围」及其中的衣物问卷没有放入手机；需要时可直接在 `musical` 中继续追加内容，渲染逻辑在 [app.js](app.js) 的 `cgMusicalChatHtml()`。

## 手机里的 Apple Music

从主屏幕打开 Apple Music，会直接进入完整的 12 首歌播放列表。数据在 [content.js](content.js) 的 `applemusic`，渲染与播放状态在 [app.js](app.js) 的 `applemusicPage()` / `amSync()`。

- 初始停在列表第 8 首「The Love Of Foreigner — AKMU」，处于暂停状态；点任意歌曲行或底部 Mini 播放器都会开始播放
- 顶部「播放 / 暂停」、底部 Mini 播放器与当前行的均衡器共用同一个播放状态；点歌后 Mini 封面、歌名、歌手和灵动岛封面会一起更新
- 「随机播放」可以切换红色高亮；「返回」回到主屏幕，重新打开会重置到默认曲目
- 页面沿用手机的全局状态栏、灵动岛和 Home 条，所以时间是手机里的 10:56、电量 79%，不是独立复刻页的 10:55 / 37%
- 深色模式下 Apple Music 仍保持 iOS 音乐应用的浅色界面，同时把状态栏与 Home 条切成黑色
- 页面不依赖服务器、外部图片或字体，12 张封面全部由本地 CSS 绘制

## Apple Music 播放列表（独立页面）

[applemusic-playlist.html](applemusic-playlist.html) 是一个单独打开的 Apple Music 播放列表界面复刻，不参与手机剧情，也不依赖服务器、外部图片或字体。直接双击即可。它与手机里的版本共用同一套歌曲与封面设计，但保留自己的 10:55 / 37% 状态栏。

- 12 首歌曲的歌名、歌手、封面样式与顶部柔光颜色都来自页面脚本里的 `songs` 数组；增删歌曲时同步增加对应的 `.c-*` 封面类即可。
- 专辑封面全部用本地 CSS 渐变和字符绘制，没有外链图片。
- 点击任意歌曲行会更新底部 Mini 播放器与灵动岛封面，并进入播放状态；Mini 播放器与顶部「播放 / 暂停」按钮共用同一播放状态。
- `返回`、`分享`、`更多`、`搜索` 仅保留界面样式；`随机播放` 是可切换的视觉开关。

## 图片

把图片放入 `assets/` 或 `pics/`，然后在 `content.js` 中填写相对路径，例如 `pics/桌面.jpg`。

- 壁纸与照片小组件默认都用 `pics/桌面.jpg`；换壁纸时同时改 `lockScreen.wallpaper` 和 `home.photo`。
- 她手机里的相册照片放在 `pics/album/`，按 `01.jpg` 到 `19.jpg` 命名；增删照片时同步修改 `herPhone.album.photos` 即可。
- 备忘录支持 `image` 字段显示缩略图，例如 `assets/photo-01.jpg`；KakaoTalk 消息里同样可以用 `image: "pics/doori1.jpeg"` 发图片气泡。
- KakaoTalk 图片可以填 `.heic`：Safari 会直接显示原图，其它浏览器自动改用同目录下的同名 `.jpg`（如 `pics/doori2.HEIC` 对应 `pics/doori2.jpg`），所以两种文件都要放进去。

## 部署 GitHub Pages

1. 新建 GitHub 仓库并上传所有文件。
2. 在仓库 **Settings → Pages** 中，将发布源设为 `Deploy from a branch`，选择 `main` 分支的 `/(root)`。
3. 保存后稍等片刻，即可从 Pages 页面取得公开链接。

请只放入原创、自己拥有或已获得授权的照片与聊天内容。

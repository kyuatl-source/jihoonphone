/* =========================================================
   表白日期 · 共享配置与规则引擎
   同时供 表白日期.html 与「捡到志薰的手机」里的 ChatGPT 页面使用。
   这里只有配置数据与纯函数，不操作 DOM，不依赖页面结构。
   ========================================================= */
(function (global) {
  "use strict";

        const CASE = {
          id: "confession-date",
          title: "和女生表白，选择哪个日期？",

          questions: [
            {
              id: "relationship",
              short: "你们的关系",
              title: "你们目前是什么关系？",
              hint: "按最接近现状的一项来选，后面还可以回来修改。",
              options: [
                { id: "friends", label: "普通朋友", desc: "平时会聊天。" },
                { id: "ambiguous", label: "暧昧中", desc: "感觉她可能也喜欢我。" },
                { id: "close", label: "已经很亲密", desc: "差一句正式确认。" },
                { id: "one-sided", label: "单方面喜欢她", desc: "还不确定她的想法。" }
              ]
            },
            {
              id: "style",
              short: "想要的风格",
              title: "你希望表白是什么风格？",
              hint: "选你真实做得到的，而不是最理想化的。",
              options: [
                { id: "romantic", label: "浪漫、有仪式感", desc: "最好能留下纪念。" },
                { id: "natural", label: "自然一点", desc: "不想给她太大压力。" },
                { id: "surprise", label: "有惊喜感", desc: "想让她印象深刻。" }
              ]
            }
          ],

          // 日期基础分只表达“氛围感”，实际排序由规则继续加减。
          dates: {
            christmasEve: {
              id: "christmasEve",
              name: "平安夜",
              date: "12月24日",
              order: 0,
              atmosphere: 5,
              baseScore: 5,
              introFit: "适合有一定好感、希望有仪式感的情况。",
              introDo: "可以结合散步、看灯饰、共同吃饭等安排。",
              baseReason:
                "灯饰、散步和晚餐天然连在一起，仪式感最强，也最容易留下纪念。",
              fit: {
                friends: "适合已经能自然约饭、想借节日气氛试探关系的情况。",
                ambiguous: "适合双方互动稳定、想给暧昧一个明确节点的情况。",
                close: "适合已经约会过多次、只差正式确认的情况。",
                "one-sided":
                  "只适合你确定她愿意单独和你过节、且不会因此感到压力的情况。"
              },
              styleLens: {
                romantic: "灯饰、散步、小礼物都能自然融入，仪式感不用刻意堆。",
                natural: "节日人多、期待值高，想“自然”反而需要额外克制。",
                surprise: "人多热闹，小型惊喜容易藏，也容易变成压力。"
              },
              plan: [
                {
                  phase: "提前",
                  text: "提前三四天约她，说清楚是两个人吃饭、走走，不要临时通知。"
                },
                {
                  phase: "当天",
                  text: "把行程压成两段：吃一顿不赶时间的饭，再去看灯或散步。"
                },
                {
                  phase: "开口",
                  text: "走到人少一点的地方再说，不要在人流最密的路口停下来。"
                }
              ]
            },

            christmas: {
              id: "christmas",
              name: "圣诞节",
              date: "12月25日",
              order: 1,
              atmosphere: 4,
              baseScore: 4,
              introFit: "适合已有共同约会安排的情况。",
              introDo: "需要考虑对方是否有其他节日安排。",
              baseReason:
                "圣诞节的氛围比平安夜松一点，吃饭、逛市集都自然，适合把表白放进一次普通约会里。",
              fit: {
                friends: "适合本来就约好一起过节、想顺势把关系往前推一步的情况。",
                ambiguous: "适合你们已经习惯单独约会、只差把话说破的情况。",
                close: "适合想给关系一个正式名分、又不想把场面做大的情况。",
                "one-sided":
                  "适合你想表达心意、但需要给她足够空间和退路的情况。"
              },
              styleLens: {
                romantic: "节日感够用，但需要你自己补一点只属于两个人的安排。",
                natural: "吃饭、散步都顺理成章，是最容易做得自然的节日。",
                surprise: "见面理由充分，小型惊喜不突兀。"
              },
              plan: [
                {
                  phase: "提前",
                  text: "确认她当天的安排，别默认她一定有空；约的时候给出具体时间。"
                },
                {
                  phase: "当天",
                  text: "选一家你们吃得舒服的店，不用追求“节日限定”的排场。"
                },
                {
                  phase: "开口",
                  text: "饭吃到后半段再开口，别在刚落座、还在点单的时候突然表白。"
                }
              ]
            },

            newYear: {
              id: "newYear",
              name: "元旦",
              date: "1月1日",
              order: 2,
              atmosphere: 4,
              baseScore: 4,
              introFit: "适合希望表达新年期待的情况。",
              introDo: "不应为了倒计时或节日氛围仓促表白。",
              baseReason:
                "元旦自带“重新开始”的意味，适合把话说成对下一段时间的邀请，而不是年末必须完成的仪式。",
              fit: {
                friends: "适合你们本来就会在新年见面、想轻松开口的情况。",
                ambiguous: "适合想借新年的轻松气氛确认关系、又不想给对方压力的情况。",
                close: "适合把确认关系放在一个不拥挤、不赶时间的白天。",
                "one-sided":
                  "适合你只想诚实表达、并不期待她当场回应的情况。"
              },
              styleLens: {
                romantic: "跨年倒计时人多又吵，浪漫容易被场面绑架，最好避开人群。",
                natural: "新年见面本来就很自然，是压力最小的选择之一。",
                surprise: "别把惊喜放在倒计时里，太吵、太挤，她很难好好回应。"
              },
              plan: [
                {
                  phase: "提前",
                  text: "约一个白天或晚饭，不要默认“跨年”就是零点倒计时。"
                },
                {
                  phase: "当天",
                  text: "把见面安排成普通的一天：吃饭、走路、聊近况。"
                },
                {
                  phase: "开口",
                  text: "说完给她留时间，不要在人多的倒计时现场要求一个答案。"
                }
              ]
            }
          },

          // 规则独占槽位：同名的槽位只保留优先级最高的一条规则。
          exclusiveSlots: ["approach", "tone"],

          /*
           * 规则按 priority 从高到低匹配。
           * when 中的键值必须全部相等才算命中；空对象表示“总是命中”。
           * effects.score 会累加；effects.approach / tone 是独占槽位；
           * reasons / cautions / plans 会按命中顺序合并去重。
           */
          rules: [
            {
              id: "guard-onesided-surprise",
              label: "单方面喜欢 × 惊喜：改为私人低压",
              priority: 130,
              when: { relationship: "one-sided", style: "surprise" },
              effects: {
                approach: "low-pressure-surprise",
                score: { christmasEve: -1 },
                reasons: ["onesided-surprise"],
                cautions: ["onesided-public-surprise"],
                plans: ["surprise-private"]
              }
            },
            {
              id: "friends-romantic-restraint",
              label: "普通朋友 × 浪漫：收敛场面",
              priority: 120,
              when: { relationship: "friends", style: "romantic" },
              effects: {
                tone: "warm-restrained",
                score: { christmasEve: -1 },
                reasons: ["friends-romantic"],
                cautions: ["friends-public-ritual"]
              }
            },
            {
              id: "boost-close-romantic",
              label: "亲密 × 浪漫：放大纪念意义",
              priority: 120,
              when: { relationship: "close", style: "romantic" },
              effects: {
                reasons: ["close-romantic"],
                plans: ["romantic-memory"]
              }
            },
            {
              id: "ambiguous-natural-ease",
              label: "暧昧 × 自然：借日常对话确认",
              priority: 110,
              when: { relationship: "ambiguous", style: "natural" },
              effects: {
                reasons: ["ambiguous-natural"],
                plans: ["natural-easy"]
              }
            },
            {
              id: "onesided-natural-room",
              label: "单方面 × 自然：留足空间",
              priority: 110,
              when: { relationship: "one-sided", style: "natural" },
              effects: {
                reasons: ["onesided-natural"],
                plans: ["natural-lowkey"]
              }
            },
            {
              id: "friends-natural",
              label: "普通朋友 × 自然：先多相处",
              priority: 110,
              when: { relationship: "friends", style: "natural" },
              effects: {
                reasons: ["friends-natural"]
              }
            },
            {
              id: "close-natural",
              label: "亲密 × 自然：不用铺垫",
              priority: 110,
              when: { relationship: "close", style: "natural" },
              effects: {
                reasons: ["close-natural"]
              }
            },
            {
              id: "ambiguous-romantic",
              label: "暧昧 × 浪漫：借氛围推进",
              priority: 110,
              when: { relationship: "ambiguous", style: "romantic" },
              effects: {
                reasons: ["ambiguous-romantic"],
                score: { christmasEve: 1 }
              }
            },
            {
              id: "friends-surprise",
              label: "普通朋友 × 惊喜：缩小尺度",
              priority: 110,
              when: { relationship: "friends", style: "surprise" },
              effects: {
                reasons: ["friends-surprise"],
                cautions: ["friends-surprise-scale"]
              }
            },
            {
              id: "close-surprise",
              label: "亲密 × 惊喜：惊喜只做记忆",
              priority: 110,
              when: { relationship: "close", style: "surprise" },
              effects: {
                reasons: ["close-surprise"],
                cautions: ["close-surprise-scale"],
                score: { christmasEve: 1 }
              }
            },
            {
              id: "ambiguous-surprise",
              label: "暧昧 × 惊喜：私人的小惊喜",
              priority: 110,
              when: { relationship: "ambiguous", style: "surprise" },
              effects: {
                reasons: ["ambiguous-surprise"],
                score: { christmasEve: 1 }
              }
            },
            {
              id: "onesided-romantic",
              label: "单方面 × 浪漫：保留浪漫但缩小承诺感",
              priority: 110,
              when: { relationship: "one-sided", style: "romantic" },
              effects: {
                reasons: ["onesided-romantic"],
                cautions: ["onesided-romantic-check"]
              }
            },
            {
              id: "rel-friends",
              label: "普通朋友：先增加相处",
              priority: 100,
              when: { relationship: "friends" },
              effects: {
                approach: "slow-build",
                score: { christmasEve: -2, christmas: 1, newYear: 1 },
                reasons: ["friends-signal"],
                cautions: ["friends-misread"]
              }
            },
            {
              id: "rel-ambiguous",
              label: "暧昧中：观察时机再确认",
              priority: 100,
              when: { relationship: "ambiguous" },
              effects: {
                approach: "observe-timing",
                score: { christmasEve: 1 },
                reasons: ["ambiguous-signal"],
                cautions: ["ambiguous-single-sign"]
              }
            },
            {
              id: "rel-close",
              label: "已经很亲密：正式表达",
              priority: 100,
              when: { relationship: "close" },
              effects: {
                approach: "formal",
                score: { christmasEve: 1, christmas: 1, newYear: 1 },
                reasons: ["close-confirm"],
                cautions: ["close-overproduce"]
              }
            },
            {
              id: "rel-onesided",
              label: "单方面喜欢：低压表达",
              priority: 100,
              when: { relationship: "one-sided" },
              effects: {
                approach: "low-pressure",
                score: { christmasEve: -3, christmas: 1, newYear: -1 },
                reasons: ["onesided-gap"],
                cautions: ["onesided-force"]
              }
            },
            {
              id: "style-romantic",
              label: "风格：浪漫仪式感",
              priority: 90,
              when: { style: "romantic" },
              effects: {
                tone: "warm-ritual",
                score: { christmasEve: 2, christmas: 1 },
                reasons: ["romantic-ritual"],
                cautions: ["romantic-overplan"],
                plans: ["romantic-walk", "romantic-gift"]
              }
            },
            {
              id: "style-natural",
              label: "风格：自然不施压",
              priority: 90,
              when: { style: "natural" },
              effects: {
                tone: "plain",
                score: { christmasEve: -1, christmas: 1, newYear: 2 },
                reasons: ["natural-ease"],
                cautions: ["natural-overdesign"],
                plans: ["natural-dinner", "natural-walk"]
              }
            },
            {
              id: "style-surprise",
              label: "风格：轻量惊喜",
              priority: 90,
              when: { style: "surprise" },
              effects: {
                tone: "playful",
                score: { christmasEve: 1, christmas: 1 },
                reasons: ["surprise-impact"],
                cautions: ["surprise-public"],
                plans: ["surprise-small"]
              }
            },
            {
              id: "default",
              label: "默认：信息不足时的平衡方案",
              priority: 0,
              when: {},
              effects: {
                approach: "balanced",
                tone: "plain"
              }
            }
          ],

          approaches: {
            "slow-build": {
              label: "先增加相处，再表达心意",
              summary:
                "普通朋友关系里，表白不是起点，而是关系推进到一定程度后的确认。先把“能不能自然单独相处”这件事做实。",
              steps: [
                "先约一次不命名为“约会”的见面：吃饭、看展、逛书店都行，重点看她是否愿意把整段时间留给你。",
                "看互动是否双向：她会主动开启话题、记得你提过的小事、愿意为见你调整安排。单个信号不算数，连续出现才算。",
                "如果这些信号稳定，就在一次舒服的见面快结束时把话说清楚；如果还没有，就继续增加相处，不急着用节日推进。"
              ],
              after:
                "说完之后别追问式复盘。给她正常相处的空间，下一次见面照旧自然。"
            },
            "observe-timing": {
              label: "先确认时机，再确认关系",
              summary:
                "暧昧期最怕的不是晚一点，而是在气氛最好、她也最没有准备的时候，把话逼成一个当场回答。",
              steps: [
                "先看稳定性：她的主动是不是持续的，而不是某一天特别热情。",
                "选一个你们本来就会见面的场合，把表白放在见面的后半段，而不是开场就摊牌。",
                "表达明确，但不要求立刻得到答案；你可以直接说“你不用现在回答”。"
              ],
              after:
                "如果她需要时间，就把节奏还给她。第二天照常聊天，不要用沉默测试她。"
            },
            formal: {
              label: "正式一点，把话补完整",
              summary:
                "你们已经走到只差一句话的位置，表白的作用是给关系一个正式的名字，而不是重新证明喜欢。",
              steps: [
                "别再加码铺垫。一次认真、安静的见面，比更隆重的安排都合适。",
                "把话说完整：你喜欢她什么、你想和她成为什么关系，各说一句就够。",
                "选你们都放松的时间，不用卡在零点或某个“必须发生点什么”的节点。"
              ],
              after:
                "确认关系之后，把当天当成普通日子的开始，而不是这段关系的顶点。"
            },
            "low-pressure": {
              label: "低压表达，给她退路",
              summary:
                "单方面喜欢时，表白的目标不是“得到答案”，而是诚实表达，并且不让她为难。",
              steps: [
                "先确认她愿意单独和你相处；如果连单独见面都很难约，先别把表白当成破局手段。",
                "选择低压力的场合：两个人吃饭、散步；避开公开场合、朋友起哄和需要她当场回应的安排。",
                "表达时把“你可以拒绝”说在前面，也把“我们还可以正常相处”说清楚。"
              ],
              after:
                "如果她没有给出肯定回应，就按她希望的节奏退回到原来的相处方式，不要反复追问。"
            },
            "low-pressure-surprise": {
              label: "私人小惊喜 + 低压表达",
              summary:
                "单方面喜欢时，惊喜只能作为气氛，不能作为筹码。把“她必须开心地回应”这个前提拿掉，惊喜才有意义。",
              steps: [
                "惊喜只发生在你们两个人之间：一份小礼物、一张卡片就够，不要朋友起哄或录像。",
                "先约一次普通的单独见面，确认她愿意来，再决定要不要带那个小惊喜。",
                "把话说得比惊喜更朴素：让她知道你有好感，同时明确她不需要当场给答案。"
              ],
              after:
                "无论她的反应如何，都别把当天的惊喜变成“我为你做了这么多”的账。礼物送出去就结束了。"
            },
            balanced: {
              label: "信息不足时的平衡做法",
              summary:
                "先选一个双方都能放松的场合，把表达做得轻一点；等更了解她的态度，再决定推进的速度。",
              steps: [
                "先创造一次自然的单独相处，观察她是否愿意把时间留给你。",
                "选择不过度隆重的场合，把话说清楚即可，不要求立刻回应。",
                "无论结果如何，都按原来的方式继续相处。"
              ],
              after: "给彼此留出正常相处的空间，不用一次见面决定所有事。"
            }
          },

          copy: {
            relationshipLabels: {
              friends: "普通朋友",
              ambiguous: "暧昧中",
              close: "已经很亲密",
              "one-sided": "单方面喜欢"
            },

            styleLabels: {
              romantic: "浪漫、有仪式感",
              natural: "自然、不施压",
              surprise: "有惊喜感"
            },

            titles: {
              friends: "{date}，比“最热闹的夜晚”更适合你们现在",
              ambiguous: "{date}，适合把暧昧说清楚",
              close: "{date}，把差的那句话补上",
              "one-sided": "{date}，先让表达轻一点"
            },

            tones: {
              "warm-ritual":
                "可以有一点仪式感，但要让场景服务那句话，而不是让那句话变成场景的台词。",
              plain: "越像你平时说话越好，不需要提前背一段完整的独白。",
              playful: "可以带一点轻松的巧思，但别让惊喜盖过你要说的内容。",
              "warm-restrained":
                "保持温度但收着一点，别让场面大过你们现在的关系。"
            },

            reasonText: {
              "friends-signal":
                "你们现在是普通朋友，所以重点不是“哪个节日更浪漫”，而是先确认互动是否持续、是否双向。",
              "ambiguous-signal":
                "你们处在暧昧期，最有价值的不是更隆重的安排，而是判断她的主动是否稳定，然后选一个不逼迫的时机把话说明。",
              "close-confirm":
                "你们已经很亲密，缺的不是证据，而是一句正式的话。日期只需要服务于“让你们都能放松地说完”。",
              "onesided-gap":
                "你是单方面喜欢她，这意味着任何安排都要先考虑她的舒适度，而不是节日氛围有多好。",
              "romantic-ritual":
                "你想要仪式感，所以日期本身会成为记忆的一部分；但仪式感应该来自用心的细节，而不是排场。",
              "natural-ease":
                "你想要自然、不施压，那就不该选一个“必须发生点什么”的夜晚，而是把表白放进本来就会发生的见面里。",
              "surprise-impact":
                "你想要惊喜，但惊喜的有效期很短：它能让她记住那一刻，不能替她决定要不要接受。",
              "friends-romantic":
                "普通朋友加上仪式感的期待，是最容易用力过猛的一组。场景可以浪漫，话要说得像日常。",
              "friends-natural":
                "普通朋友加自然风格，是风险最低的组合：把重点放在多一次单独相处，而不是一次“表白事件”。",
              "friends-surprise":
                "普通朋友之间的惊喜，尺度要小到像一次用心的约会，而不是一场需要她配合的演出。",
              "ambiguous-romantic":
                "暧昧中想要仪式感，自带氛围的节日能帮你把话往前推；但别让氛围替她做决定。",
              "ambiguous-natural":
                "暧昧中加自然风格，最稳的做法是选一个本来就会见面的日子，把确认放进对话里。",
              "ambiguous-surprise":
                "暧昧中的惊喜要小、要私人，否则容易从“心动”变成“被安排”。",
              "close-romantic":
                "已经很亲密又想要仪式感，日子本身就适合当这段关系的注脚，可以把话说得比平时正式一点。",
              "close-natural":
                "已经很亲密、又想要自然，不需要额外铺垫：一次普通约会里认真说完，反而最像你们。",
              "close-surprise":
                "已经很亲密时，惊喜的作用是留下记忆，不是制造压力；规模小一点更好。",
              "onesided-romantic":
                "单方面喜欢却想要仪式感，这两者会互相拉扯：可以保留浪漫，但要把“被拒绝也无妨”写进安排里。",
              "onesided-natural":
                "单方面喜欢加自然风格，是压力最小的组合：先确认她愿不愿意单独相处，再决定说不说。",
              "onesided-surprise":
                "单方面喜欢时最不该做的是公开惊喜——它会把“回应”变成她必须当场处理的场面。"
            },

            cautions: {
              "friends-misread":
                "别把她的礼貌和友好直接当成喜欢。重点看互动是否持续、是否双向。",
              "friends-public-ritual":
                "普通朋友关系下，别用大场面或昂贵礼物制造“必须回应”的压力。",
              "ambiguous-single-sign":
                "别因为一次主动、一句暧昧就认定结果；观察一段时间内的稳定互动，再决定是否推进。",
              "close-overproduce":
                "关系已经不缺证据，别把表白做成表演。真诚比排场重要。",
              "onesided-force":
                "不要借节日、礼物或公开场合让她当场表态；她没有任何必须回应的义务。",
              "onesided-public-surprise":
                "不要安排公开惊喜或围观式告白，那会把她推到“必须回应”的位置。",
              "natural-overdesign":
                "自然不等于随便：别临时改计划，也别把行程排得没有喘息空间；按约好的时间来。",
              "surprise-public":
                "惊喜的规模要小到即使她拒绝，你也不会尴尬、她也不用替你解围。",
              "romantic-overplan":
                "别把行程排满。仪式感靠一两个用心的瞬间，不靠打卡清单。",
              "friends-surprise-scale":
                "别提前告诉共同朋友你在准备表白。消息一旦传回她耳朵里，惊喜就变成了压力。",
              "close-surprise-scale":
                "关系再亲密，也别用惊喜替她做决定；给她一个可以轻松说“好”或“再想想”的余地。",
              "onesided-romantic-check":
                "浪漫安排的前提是她愿意来。如果她只是客气答应，宁可把计划缩小。",
              general:
                "日子只是背景。别把她的回应当成这个节日的成败，也别用节日氛围替她做决定。"
            },

            plans: {
              "romantic-walk": {
                phase: "当天",
                text: "安排一段只属于两个人的散步，路线提前走过一遍，别在当天临时找路。"
              },
              "romantic-gift": {
                phase: "提前",
                text: "准备一份轻的小礼物，价格别压过那句话本身；她提过的小东西比昂贵礼物更合适。"
              },
              "romantic-memory": {
                phase: "之后",
                text: "留一张当天的照片或票根。纪念不是当天的任务，是以后回看时的证据。"
              },
              "natural-dinner": {
                phase: "当天",
                text: "按平时吃饭的节奏来，别突然换餐厅、穿得特别正式，也别提前暗示“有话要说”。"
              },
              "natural-walk": {
                phase: "开口",
                text: "饭后沿她回家的方向走一段，到自然要分开的地方再说，不用刻意找“完美地点”。"
              },
              "natural-easy": {
                phase: "提前",
                text: "把时间约在她本来就有空、也不赶下一场的时段，避免“说完就要走”的仓促。"
              },
              "natural-lowkey": {
                phase: "提前",
                text: "先约一次普通的单独见面。如果她愿意，再考虑把话说出来；不愿意就先维持现状。"
              },
              "surprise-small": {
                phase: "提前",
                text: "准备一个很小的惊喜：她提过的一本书、一张手写卡片。成本控制在“被拒绝也不尴尬”的范围。"
              },
              "surprise-private": {
                phase: "当天",
                text: "惊喜只发生在你们两个人之间，不要朋友起哄、不要录像、不要围观。"
              }
            },

            scripts: {
              byRelationship: {
                friends: {
                  direct:
                    "这段时间和你聊天、一起吃饭，我发现自己越来越期待见到你。想认真问问，你愿不愿意让我们从朋友变成更近一点的关系？",
                  soft:
                    "有件事想和你说，但不想让你有压力：我对你的感觉比朋友多一点。你不用现在回答，我只是想让你知道。",
                  short: "我对你的感觉比朋友多一点，想认真问问，我们能不能试试看？"
                },
                ambiguous: {
                  direct:
                    "我觉得我们之间好像不只是朋友。我想认真确认一下：你是不是也有同样的感觉？",
                  soft:
                    "这段时间和你相处得很开心，我想把这件事说清楚：我喜欢你。你可以慢慢想，我等你。",
                  short: "我好像比想象中更喜欢你，想认真问问，我们能不能在一起？"
                },
                close: {
                  direct:
                    "我们好像已经走到差一句话的地方了。我喜欢你，想和你正式在一起，你愿意吗？",
                  soft:
                    "很多话我们都没说破，今天想认真说一次：我喜欢你，也想认真和你在一起。你的答案是什么，我都尊重。",
                  short: "我们在一起吧。我喜欢你，认真想了很久。"
                },
                "one-sided": {
                  direct:
                    "有些话我想让你知道，但不想给你压力：我喜欢你。你不用急着回答，我们还是可以像现在这样相处。",
                  soft:
                    "我可能比你想象中更喜欢你一点。说这些不是想让你为难，只是不想让自己一直猜。你按自己的节奏来就好。",
                  short: "我喜欢你。你不用现在回答，我只是想让你知道。"
                }
              },

              dateLine: {
                christmasEve: "平安夜的灯亮起来的时候，说这句话刚刚好。",
                christmas: "圣诞节那天我们本来就会见面，就吃饭的时候慢慢说吧。",
                newYear: "元旦那天，把它当作新年里第一件认真做的事。"
              },

              styleSuffix: {
                "warm-ritual": "如果那天你愿意，我想和你一起走走，把这一天留成我们记得住的日子。",
                plain: "不用安排得很隆重，找个我们都能放松的时候，把话说完就好。",
                playful: "我还准备了一个小东西，不贵重，但想让你知道我是认真想过这件事的。",
                "warm-restrained":
                  "我不想把场面弄得太隆重，怕你有负担。就我们两个人，把话慢慢说清楚。"
              }
            },

            followUps: {
              signals: {
                friends: [
                  "她会主动开启话题，而不是每次都等你先找她。",
                  "约她时，她愿意给出替代时间；只说“最近有点忙”却不提下次，通常只是客气。",
                  "她会记得你随口提过的小事，并在之后的聊天里主动提起。"
                ],
                ambiguous: [
                  "她的主动是持续的：不只某一天热情，而是会在一段时间里稳定地找你。",
                  "她愿意把下班后或周末的时间留给你，并且会为见面调整自己的安排。",
                  "她会记得你提过的细节，也会主动把话题往“我们”上引。"
                ],
                close: [
                  "你们已经有过多次单独约会，而且分别后她会主动继续聊天。",
                  "她愿意让你进入她的日常：分享琐事、带你见朋友、讨论更远的计划。",
                  "她对你有明显的情绪依赖；这些比一句暧昧的话更可靠。"
                ],
                "one-sided": [
                  "先看最低成本的信号：她是否愿意单独见面，而不是只在群里或有事时回复。",
                  "她会主动开启和你的对话吗？如果几乎每次都是你先找她，先别把礼貌当好感。",
                  "她是否愿意为你调整时间？注意区分“客气答应”和“真的把时间留给你”。"
                ]
              },
              rejection: {
                friends:
                  "如果她说“还是做朋友吧”，先按字面接受。你们本来就有朋友的基础，退回原来的相处方式并不丢人。",
                ambiguous:
                  "如果她说“没往那方面想过”，那是她的真实状态，不是欲擒故纵。给她时间，也给自己一个不再猜测的出口。",
                close:
                  "如果她说“再想想”，别把这句话翻译成拒绝，也别翻译成立刻同意。把节奏还给她，像平时一样相处。",
                "one-sided":
                  "如果她没有给出肯定回应，就把这当成一次诚实的表达，而不是一场失败。不要追问原因，也不要反复确认。"
              },
              rejectionGeneral:
                "当天不要追问原因，不要反复确认“是不是我哪里不好”，也不要用礼物或节日氛围换一个答案。第二天照常联系，比任何解释都更有分寸。如果她明确拒绝，就尊重边界，别用“只是朋友”作为继续追求的名义。"
            }
          }
        };

        function ruleMatches(rule, answers) {
          return Object.keys(rule.when || {}).every(function (key) {
            return answers[key] === rule.when[key];
          });
        }

        function evaluateRules(answers) {
          const matched = CASE.rules
            .filter(function (rule) {
              return ruleMatches(rule, answers);
            })
            .sort(function (a, b) {
              return b.priority - a.priority || a.id.localeCompare(b.id);
            });

          const scores = {};
          Object.keys(CASE.dates).forEach(function (id) {
            scores[id] = CASE.dates[id].baseScore;
          });

          const slots = {};
          const trace = [];
          const reasons = [];
          const cautions = [];
          const planKeys = [];

          matched.forEach(function (rule) {
            const effects = rule.effects || {};
            const applied = [];
            const shadowed = [];

            if (effects.score) {
              Object.keys(effects.score).forEach(function (dateId) {
                if (Object.prototype.hasOwnProperty.call(scores, dateId)) {
                  scores[dateId] += effects.score[dateId];
                }
              });
              applied.push("score");
            }

            CASE.exclusiveSlots.forEach(function (slot) {
              if (effects[slot] === undefined) return;
              if (!slots[slot]) {
                slots[slot] = { value: effects[slot], ruleId: rule.id };
                applied.push(slot);
              } else {
                shadowed.push(slot + "（已被 " + slots[slot].ruleId + " 占用）");
              }
            });

            if (effects.reasons) {
              effects.reasons.forEach(function (key) {
                reasons.push({ key: key, ruleId: rule.id });
              });
              applied.push("reasons");
            }

            if (effects.cautions) {
              effects.cautions.forEach(function (key) {
                cautions.push(key);
              });
              applied.push("cautions");
            }

            if (effects.plans) {
              effects.plans.forEach(function (key) {
                planKeys.push(key);
              });
              applied.push("plans");
            }

            trace.push({
              id: rule.id,
              label: rule.label,
              priority: rule.priority,
              applied: applied,
              shadowed: shadowed
            });
          });

          const ranking = Object.keys(CASE.dates)
            .map(function (id) {
              const date = CASE.dates[id];
              return {
                id: id,
                name: date.name,
                date: date.date,
                order: date.order,
                atmosphere: date.atmosphere,
                baseReason: date.baseReason,
                fit: date.fit,
                styleLens: date.styleLens,
                plan: date.plan,
                introFit: date.introFit,
                introDo: date.introDo,
                score: scores[id]
              };
            })
            .sort(function (a, b) {
              return b.score - a.score || a.order - b.order;
            });

          return {
            matched: matched,
            slots: slots,
            scores: scores,
            ranking: ranking,
            trace: trace,
            reasons: reasons,
            cautions: cautions,
            planKeys: planKeys
          };
        }

        function phaseRank(phase) {
          const order = ["提前", "当天", "开口", "之后"];
          const index = order.indexOf(phase);
          return index === -1 ? order.length : index;
        }

        function dedupeByKey(items) {
          const seen = {};
          const out = [];
          items.forEach(function (item) {
            const key = typeof item === "string" ? item : item.key;
            if (seen[key]) return;
            seen[key] = true;
            out.push(item);
          });
          return out;
        }

        // 生成完整答案；不读写 DOM，可在控制台或未来 API 层直接调用。
        function generateAnswer(answers) {
          const missing = CASE.questions.filter(function (question) {
            return !answers[question.id];
          });

          if (missing.length) {
            return {
              ok: false,
              missing: missing.map(function (question) {
                return { id: question.id, title: question.title };
              })
            };
          }

          const evaluated = evaluateRules(answers);
          const rel = answers.relationship;
          const style = answers.style;
          const relLabel = CASE.copy.relationshipLabels[rel];
          const styleLabel = CASE.copy.styleLabels[style];
          const approachKey = evaluated.slots.approach.value;
          const toneKey = evaluated.slots.tone.value;
          const approach = CASE.approaches[approachKey] || CASE.approaches.balanced;
          const top = evaluated.ranking[0];
          const second = evaluated.ranking[1];

          const title = CASE.copy.titles[rel].replace("{date}", top.name);
          const sub =
            "你们现在是「" +
            relLabel +
            "」，想要「" +
            styleLabel +
            "」的表白。下面的日期排序、行动安排和话术都按这两点生成，没有额外假设。";

          const reasonParagraphs = [];
          const seenReasons = {};
          evaluated.reasons.forEach(function (entry) {
            const text = CASE.copy.reasonText[entry.key];
            if (text && !seenReasons[entry.key]) {
              seenReasons[entry.key] = true;
              reasonParagraphs.push(text);
            }
          });
          reasonParagraphs.push(
            "排在第一位的原因：" + top.baseReason + top.fit[rel]
          );
          reasonParagraphs.push(
            "表达方式上，" + CASE.copy.tones[toneKey]
          );

          const comparison = evaluated.ranking.map(function (date, index) {
            return {
              id: date.id,
              name: date.name,
              date: date.date,
              rank: index + 1,
              atmosphere: date.atmosphere,
              top: index === 0,
              note: date.fit[rel],
              lens: date.styleLens[style]
            };
          });

          const dayItems = [];
          top.plan.forEach(function (item) {
            dayItems.push({ key: item.phase + "|" + item.text, phase: item.phase, text: item.text });
          });
          dedupeByKey(evaluated.planKeys).forEach(function (key) {
            const item = CASE.copy.plans[key];
            if (item) {
              dayItems.push({ key: item.phase + "|" + item.text, phase: item.phase, text: item.text });
            }
          });
          const uniqueDayItems = dedupeByKey(dayItems).sort(function (a, b) {
            return phaseRank(a.phase) - phaseRank(b.phase);
          });

          const relScript = CASE.copy.scripts.byRelationship[rel];
          const styleSuffix =
            CASE.copy.scripts.styleSuffix[toneKey] ||
            CASE.copy.scripts.styleSuffix.plain;
          const scriptItems = [
            {
              label: "直接一点",
              text: relScript.direct,
              when: "时机：" + CASE.copy.scripts.dateLine[top.id]
            },
            {
              label: "留点余地",
              text: relScript.soft + " " + styleSuffix
            },
            {
              label: "如果只说得出一句",
              text: relScript.short
            }
          ];

          const cautionItems = [];
          evaluated.cautions.forEach(function (key) {
            const text = CASE.copy.cautions[key];
            if (text && cautionItems.indexOf(text) === -1) {
              cautionItems.push(text);
            }
          });
          const generalCaution = CASE.copy.cautions.general;
          if (cautionItems.indexOf(generalCaution) === -1) {
            cautionItems.push(generalCaution);
          }
          if (cautionItems.length === 1) {
            cautionItems.unshift(
              "信息不足时，先别用节日氛围替你做决定；把表达做得轻一点，给彼此留退路。"
            );
          }

          const followUps = [
            { id: "signals", label: "怎么判断她是不是也有好感" },
            { id: "rejection", label: "如果她拒绝了怎么办" },
            { id: "short", label: "给我一句更短的话" },
            { id: "altdate", label: "如果" + top.name + "见不到她" }
          ];

          return {
            ok: true,
            meta: {
              relationship: rel,
              style: style,
              relLabel: relLabel,
              styleLabel: styleLabel,
              dateId: top.id,
              dateName: top.name,
              secondId: second.id,
              secondName: second.name
            },
            title: title,
            sub: sub,
            modules: {
              reasoning: {
                heading: "为什么先选这里",
                paragraphs: reasonParagraphs,
                rankingLine:
                  "三个日期的排序：" +
                  evaluated.ranking
                    .map(function (date, index) {
                      return index + 1 + ". " + date.name;
                    })
                    .join("　") +
                  "。这个顺序只用于三选一，不代表表白成功率。"
              },
              comparison: {
                heading: "三个日期放在一起看",
                items: comparison
              },
              plan: {
                heading: "那天怎么安排",
                approach: approach,
                dayItems: uniqueDayItems,
                after: approach.after
              },
              scripts: {
                heading: "可以怎么说",
                note: "挑一句接近你平时语气的，不要整段背。",
                items: scriptItems
              },
              cautions: {
                heading: "别做这些",
                items: cautionItems
              }
            },
            followUps: followUps,
            trace: evaluated.trace,
            ranking: evaluated.ranking.map(function (date) {
              return { id: date.id, name: date.name, score: date.score };
            }),
            context: {
              rel: rel,
              style: style,
              toneKey: toneKey,
              approachKey: approachKey,
              topId: top.id,
              topName: top.name,
              secondId: second.id,
              secondName: second.name,
              secondFit: second.fit[rel]
            }
          };
        }

        // 追问同样由当前结果 + 规则内容组合，不是固定段落。
        function buildFollowUp(topicId, result) {
          if (!result || !result.ok) return null;
          const rel = result.context.rel;
          const topName = result.context.topName;
          const secondName = result.context.secondName;

          if (topicId === "signals") {
            return {
              title: "怎么判断她是不是也有好感",
              intro:
                "先看她是否愿意把时间和注意力持续留给你。单个动作说明不了什么，连续出现的模式才有意义。",
              bullets: CASE.copy.followUps.signals[rel],
              note: "这些都只是倾向，不是证据。也不要为了让答案成立，只挑符合期待的信号来看。"
            };
          }

          if (topicId === "rejection") {
            return {
              title: "如果她拒绝了",
              paragraphs: [
                CASE.copy.followUps.rejection[rel],
                CASE.copy.followUps.rejectionGeneral
              ],
              note: "表白是表达，不是交易。你说了真话，就已经完成了这件事本身。"
            };
          }

          if (topicId === "short") {
            return {
              title: "再短一点的版本",
              paragraphs: [CASE.copy.scripts.byRelationship[rel].short],
              note: "说得短不等于说得敷衍。语气比你背了多少字重要。"
            };
          }

          if (topicId === "altdate") {
            return {
              title: "如果" + topName + "见不到她",
              paragraphs: [
                "第二顺位是" + secondName + "。" + result.context.secondFit,
                "把同样的安排平移到" + secondName + "就好，不用为了赶节日临时改期；仓促的见面比晚几天更容易出错。"
              ],
              note: "如果两个日期都约不到，那说明现在缺的不是日期，而是单独相处的机会。先把这一步补上。"
            };
          }

          return null;
        }


  global.ConfessionAdvisor = {
    CASE: CASE,
    ruleMatches: ruleMatches,
    evaluateRules: evaluateRules,
    generateAnswer: generateAnswer,
    buildFollowUp: buildFollowUp,
    phaseRank: phaseRank,
    dedupeByKey: dedupeByKey
  };
})(window);

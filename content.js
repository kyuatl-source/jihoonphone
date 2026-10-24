/*
 * 这里是你今后最常编辑的文件。
 * 直接替换示例文字、日期、图片地址和聊天记录；网页会自动读取并显示。
 * 改日期时，请同步修改 lockScreen 里的 day / month / weekday，桌面日历组件与日历图标才会一致。
 * 备忘录用 category 区分文件夹：category: "日记" 或 category: "备忘录"。
 * 备忘录列表与详情页的加粗标题行默认使用 date（如 "260913"），写了 title 则优先显示 title；
 * 详情页顶部居中显示"2026年9月13日 21:57"，正文按原样逐段显示，段落之间不另加行距。
 * 正文中以 "* " 开头的行会显示为圆点列表。
 */
const phoneData = {
  owner: "志薰",
  // 开屏页。lead 是首行，body 是中间整段，question 是最后的提问。
  opening: {
    label: "开屏",
    lead: "Hi你好，今天是2026年12月10日。",
    body: "你和暧昧对象韩志薰先生正在汉江公园牵着doori吹冷风，之后的计划是在江边吃点零食。韩志薰先生在点完咖啡外卖后表示想去厕所，但又怕外卖员来了找不到地方，于是他把手机留给你后独自离开了。",
    question: "你对他的手机好奇吗？要不要打开看看呢？",
    open: "打开",
    close: "不打开",
    // 选择「不打开」后的占位画面，后续可以直接替换这四项
    declined: {
      kicker: "不打开",
      title: "故事先停在这里。",
      body: "这一部分的内容待补充。",
      back: "重新选择"
    }
  },
  lockScreen: {
    date: "12月10日 星期四",
    time: "10:56",
    day: "10",         // 日历图标与桌面日历组件上的日
    month: "十二月",     // 日历图标上的月
    weekday: "星期四",   // 日历图标上的星期
    weather: "3°",
    lunar: "大雪",
    carrier: "中国移动",
    battery: 79,
    wallpaper: "pics/桌面.jpg",
    // 锁屏 / 桌面音乐组件显示的内容
    player: { title: "plot twist", artist: "TWS", elapsed: "0:03", remaining: "-2:29", progress: 2 }
  },
  home: {
    photo: "pics/桌面.jpg"   // 照片小组件的图片，可换成 pics/照片.jpg
  },
  // 桌面图标顺序；badge 为红色角标，count 显示在 Days Matter 图标上
  homeApps: [
    { id: "kakaotalk", name: "KakaoTalk" },
    { id: "phone", name: "电话", badge: 82 },
    { id: "daysmatter", name: "Days Matter", count: "23" },
    { id: "notes", name: "备忘录" },
    { id: "applemusic", name: "Apple Music" },
    { id: "temu", name: "Temu" }
  ],
  dockApps: [
    { id: "safari", name: "Safari" },
    { id: "calendar", name: "日历" },
    { id: "chatgpt", name: "ChatGPT" }
  ],
  notes: [
    {
      date: "260807",
      time: "22:13",   // 显示在正文上方的居中日期行，可省略
      category: "日记",
      body: "今天要加班这件事属实是意料之外，整理数据又核算数据这种看似简单却繁琐到不行的事情落在我这种实习生身上似乎是再合适不过的。\n\n蜷在办公场地一天后身体发僵的酸痛感，时间仿佛重置到高三。\n\n前辈被一个电话叫走，难以置信的，今日工作的难点竟是在成为全公司最后下班的人后，我要识别出办公室那些为我亮着的灯分别被哪些开关操纵。\n\n黑暗里剩下的光源是各个主机显示器的电源，红的蓝的一闪闪的，再是紧急出口告示和跳动的电梯层数。\n\n可能是被那些星星点点不成片的光源晃了眼，在楼下便利店买雪糕时竟能漏看1+1。\n\n被店员提醒后才晕头转向地回冰柜里去找。\n\n大概是真的晕了，打算吃完一个雪糕就去坐地铁的我，要怎么处理剩下的雪糕？\n\n这样说来，还挺神奇的。我居然也能做出买1+1的产品然后把多的那一份送给店员这样有点莫名其妙的事？\n\n就因太不像自己会做出来的事情，所以今天太像梦。\n\n琐碎的工作是无意的呓语，便利店的场景倒像是惊醒十分残缺在脑海里的记忆。\n\n但应该没做错事，好像刚好碰到那位店员换班的时间点，我在店门口吃雪糕，她换好衣服下班。\n\n雪糕被她衔在嘴里，好像在看到我之后说了声谢谢。\n\n还是觉得有些奇怪，这样的交谈居然也会发生在我身上。"
    },
    {
      date: "260903",
      time: "22:24",
      category: "日记",
      body: "天气已有转凉的迹象，银杏叶染上一丝黄色，缠在我身上的件件事也被剥离得清晰。难得白天有大段的空隙，套上外套去舞室跳舞又是多久没有过的事情。\n\n好幸福啊？可以这样说吗？在再次明确地发现我真的很喜欢跳舞，在再次明确地发现我依旧拥有跳舞的自由的时候发出这样的感叹也是正确的吧？\n\n不知道是不是因为跳完舞后的幸福感作祟，在回家的路上收到同事发来的跑腿请求时居然也产生乐意为之的古怪情绪。\n\n但本身就是顺路的，能帮则帮又不是吃力的事。\n\n只是穿着跳舞时会穿的衣服去公司还是有些奇怪的吧？好在人脸识别的门禁只看脸不看穿搭，好在那周末没人在办公室加班。\n\n从公司离开时顺道在楼下便利店买点东西，结账时店员认出了我说要请回我吃雪糕，我大概是在愣了两秒后才回绝她的。\n\n应该是笑着回绝的，“谢谢”应该也是说了的，希望她不要觉得尴尬。\n\n说起来，好像有一段时间没看到她，明明是隔三差五就会去的便利店，上次遇到她也是在加班的时候。\n\n总之，今天过得很开心也很幸福。所有插曲似乎也都刚刚好，希望这样的情绪能一直延续。虽然我好像还是不擅长处理一些突发性的人际关系。"
    },
    {
      date: "260913",
      time: "22:17",
      category: "日记",
      body: "呃。\n\n为什么我会想在日记里写下今天的一切呢？比起我的感受，好像先需要把今天发生的一切一字不落的按照时间顺序写下来。在理清发生什么之后，我才有可能理顺我混乱的大脑以及更混乱的心情。\n\n学校里有事情要处理，所以回了学校，处理完事情后刚好是午饭时间，所以就近去食堂吃饭。一个人吃饭，看的视频是最近没来得及看的舞蹈综艺。\n\n突然有一瓶香蕉牛奶出现在我的餐盘旁边，抬头看到一张有点熟悉但不能马上想起的脸。第一反应是摘耳机，那时候我嘴巴里大概还有没有嚼碎的食物，开口讲话是万万不可能的。\n\n脑子转到第三秒，联想起来的是便利店的工作马甲，她说“请你喝的。”\n\n是在实习公司楼下便利店工作的女生，现在看来那个女生应该是兼职，同时也是我的“同校同学”。\n\n她留下香蕉牛奶就走了，像是随手随便做的事，没给我留下推辞的空间。\n\n香蕉牛奶下面压着一张纸条，字符串是她的联系方式。我好像还记得拿起那张纸条时指尖泛凉的温度，那张纸条变得和香蕉牛奶一样变得冰凉，是冰箱里的温度。\n\n现在这张纸条，已经有些发皱，躺在我眼前的桌子上。\n\n半天已过，我还没有联系那个账号。\n\n我应该在冰箱里。"
    },
    {
      date: "260729",
      time: "22:06",
      category: "日记",
      body: "今天——第一天去公司上班了。\n\n人在面对自己不熟悉的情景之前产生紧张的心里应该是再正常不过的，第一天过得比想象中顺利。\n\n虽然老姐说这是因为是第一天，正常人都不会在第一天为难一个来实习的学生的。\n\n我觉得她说得对。\n\n和我一起入职的还有两位同学，一个是中国来的留学生，另外一位比我小一点。简单说了两句话，应该都是好相处的人。\n\n第一天过得太混乱，我还没有记清楚每个人的名字。光是把姓氏记清楚就有够为难人了，分配到的组好像是新成立的，组长哥不过比我大三岁，其他两个哥好像只比我大一岁。这样看起来没有多少工作经验的人也可以在公司里单独列出项目组还同时带三个实习生吗？\n\n一瞬间搞不清楚自己所处的工作环境到底该划分到哪一步骤。\n\n又回到那句感受，他们应该都是好相处的人。\n\n这样想来，学生时代的大部分时期都在接触同龄人，虽然我有一个大我几岁的姐姐，手足之间的情谊相较于同龄人之间的关系还是不太一样。从小和姐姐吵闹到大的我又怎么敢随意和其他年长者吵闹。这样想来，在年纪稍微大一点接触到的环境更复杂后，相比于选择哪些人社交对我来说应该是只会“只会跟哪些人社交”。自以为自己并不擅长所谓的社交，这样的叙述或许有些奇怪，但我确实只会和对我而言相处起来舒服的人打交道。\n\n社会关系这点对于我来说还是太复杂，写了一堆东西却好像没把想说的说出来。\n\n想说只是，上班第一天，同事们上级们，似乎都是不错的人。\n\n期待明天吗？还是先别用“期待”这种词眼先了。"
    },
    {
      date: "260820",
      time: "21:58",
      category: "日记",
      body: "彻底明白什么是周一病的一天。\n\n上学面对上课的心情与上班面对工位的心情完全不一样，上班一个月不到的我，居然悟出了这样的结论。\n\n循序渐进着，今天猛然意识到在做的一些工作已然不是刚来报到时候所做的杂活。\n\n回忆这段时间，在实践中习得的某些技能比我预想中的进程还要快些。意识到要做什么工作的瞬间，居然回过头和前辈们确认自己收到的指令是否正确，得到的回复却是“是呀，你来做这部分，上周不是做过吗？完成得很不错呀。”\n\n有些开心。\n\n这样的心情也是正确的吧。\n\n小时候，最喜欢跳舞的时候，愿望是跳一辈子的舞。老实说现在自负的讲一句，就算没有上大学，就算不去传统的就业市场找一份工作，我也应该能用跳舞养活自己。因为太喜欢跳舞了，所以怀疑过自己是否能喜欢上别的东西。抱着好奇的想法才学习这个专业，才投简历来到这家公司实习。\n\n万幸，我还挺喜欢这份工作和现在的状态的。\n\n也还是很喜欢跳舞。\n\n喜欢的东西多的话不是很好吗？如果在一件事里找不到状态的话可以轻而易举地埋头到另一件喜欢的事情里。\n\n写来写去，又和最开始想写的内容越走越远。\n\n我只是无法回想起早上从地面走到地下等地铁来的每个瞬间。\n\n从未那么讨厌过周一。"
    },
    {
      date: "260909",
      time: "22:02",
      category: "日记",
      body: "今天回学校了。\n\n刚上大学的时候对校园很是好奇，后来因为早课和学业又对校园产生厌倦。\n\n大学校园是一个很神奇的地方，好像只要有校园卡，只要你想来，他就会包容很多。\n\n在快要离别的时候伤感起这些，大抵也有天气的原因。也清晰地记着刚来学校时想要实现的未来，模糊的框架现在已经被描绘得具体。\n\n所有学分都修完，剩下的只有论文和琐事。\n\n工作对我这个实习生的要求是每周出勤3到4天。\n\n除了舞室和家，我也想在学校多待一会儿。\n\n只是多待一会儿，没有想多见教授一会儿的意思。\n\n本科生为什么要写毕业论文？"
    },
    {
      date: "261121",
      time: "22:09",
      category: "日记",
      body: "一直捧着手机笑这件事被姐姐发现了\n\n都多大的人了还想偷看我手机，我不会给她看的。\n\n在家这几天要做的事无非剩下玩手机，和姐姐打游戏，以及遛狗。\n\n姐姐说我之前没那么爱玩手机的，甚至遛狗的时候都在那边拍狗的照片，她说我又没有可以分享的人，拍那么多照片有什么用。我懒得跟她讲，转头问我妈怎么把我姐的嘴生得那么毒。\n\n老妈翻了个白眼说自己不去遛狗了，我和我姐终于安静。\n\n我有可以分享照片的人。\n\n发送照片时的心情也好奇妙，是心动还是紧张？我不清楚，只是又有大象在我心里踏步。\n\n她说好可爱。\n\n很开心，她也喜欢小狗。"
    },
    {
      date: "261117",
      time: "22:21",
      category: "日记",
      image: "pics/261001.jpeg",   // 列表右侧缩略图 + 正文配图
      body: "她画的 很可爱吧\n\n原来以为不会见面了的，第一次想要感谢加班。\n\n…好像不止一次加班\n\n直到某些情感漫便全身才发现电视里演的那种情窦初开时不识爱情的茫然都是虚假的。\n\n心动是横冲直撞的，整个心房跟着发颤嘴角抑制不住笑的。怎么可能不知道这就是爱情呢。\n\n写下这些文字的我好傻，一直没有觉得“母胎单身”这个标签没对我造成过多大影响，现在细细品味这个标签…没什么好品味的，这个标签应该马上就会和我没有关系了。\n\n当然，这个标签本身就没什么意义。\n\n从公司离开的时候她还有二十多分钟才下班，站在公司电梯里我一直在想用什么借口填满那二十分钟才好。不是很饿，没办法在便利店吃泡面，蹩脚的借口一个接一个说不出口。\n\n“还有二十分钟吧？我能等你下班吗？”\n\n没练习过的台词被我说得飞快，她有愣住吗？我不知道，只记得她说真的吗，她说好。\n\n记录下这些文字的瞬间心间的小鹿又开始横冲直撞，为什么是小鹿乱撞呢？我感觉有一只成年大象在我心间乱撞。\n\n她下班前的最后一项工作是理废弃商品，注视别人工作好像是不太好的行为，而因为也确实没有太大的体力活，她没有用到我的地方。这点还挺让我沮丧的，是这样吗？陷入这种感情的男性都有开屏的迹象，而我好像没有找到开屏的机会。\n\n总之，大拇指上的笑脸是她在下班前给我画上的，说是给我的奖励。\n\n好开心，甚至不想洗掉。\n\n对了，她还把一部分废弃商品给了我，有两个饭团和一个三明治。她说那俩个品还挺好吃的，给我之后才补问我一句“你不介意吧？”\n\n本身就不在意这些能吃的临期商品，再者就是，只有好朋友才会分享这些免费食物吧？我和她的距离好像变近了。\n\n但没有到牵手的地步，光是送她回家路上偶尔蹭在一起的手肘就足够让我脸红。\n\n好没出息，她会喜欢我这种笨蛋吗？还是那种经验丰富的才更容易……\n\nOh my god 我是笨蛋。\n\n哎，不想去洗澡，找个办法把笑脸留下才行。\n\n要去美甲店吗？"
    },
    {
      date: "260819",
      time: "15:33",
      category: "备忘录",
      title: "同事喜好",   // 写了 title 就显示 title，否则标题显示日期
      body: "* 申课长喜生鱼片，他提议的聚餐一般都会去吃\n* 金代理喜喝桃子美式\n* 崔代理喜欢甜的\n\n韩振天天带自己打的小绿水，李炅潣和我一样说不上话。"
    },
    {
      date: "261009",
      time: "23:26",
      category: "日记",
      body: "回家的地铁晃晃悠悠，在夜晚坐地铁时总觉得地铁里的灯光太亮，和外面黑漆漆的天色仿佛是两个世界。\n\n今天过得比预想中还要充实些，睡到自然醒后刚好有整理收拾整个房间的时间。吃完简餐后去学校排舞..然后去见新朋友。\n\n其实…已经认识很多天了，好像也在日记里提起过她。\n\n该怎么描述呢，不知道是因为我过往的经历过于浅薄单调还是怎么，和异性不抱任何目的交流沟通似乎还是第一次。\n\n顺其自然的人生境遇中，真的是会有很多意想不到的经验闯入。\n\n约在我推荐的小店，今天可是假期，街上乌泱泱的都是人，我和她选的时间也不太讨巧，却也拥有未知的好运坐在店里仅剩一桌的位置上。\n\n聊了两句后才意识到，我和她还未曾有过互通姓名的环节。介绍名字年龄专业以及现在在做什么事情，像什么联谊。\n\n可我从未去过什么联谊。\n\n新朋友叫ㅇㅇ 跟她相处起来好像挺舒服的\n\n这样描述是正确的吗？"
    },
    {
      date: "261023",
      time: "23:48",
      category: "日记",
      body: "哇！！排练许久的舞终于演完了\n\n和社员练习的时候总会有一种怅然若失的情绪？在学校的最后一年，这样能够上台演出的机会怕是在往后的日子里也寻找不出太多\n\n一旦给今天的演出贴上“大学时代”最后的演出的标签，就没有不全力以赴的道理。练习的时候是，在舞台上表演的时候也是。\n\n可以说得偿所愿吗？不管是自身的体会还是表现出来的完成度，都达到了让自己满意的地步。\n\n对了，今天还收到了花。\n\nㅇㅇ送的\n\n早知道她会来给我送花我就也准备点什么了\n\n遇到她之后说谢谢的次数好像又变多了，但人生中时常有感谢的感人也是幸事不是吗？\n\n只是这份人情先欠下了，她好像还是很忙，没和我说几句话。\n\n晚上是和舞社的成员们聚餐，讲两句感言又想掉眼泪，想掉眼泪的时候不能喝酒。被社员拦着只喝了半杯酒，说喝多了晕了等下又要被我姐骂。\n\n为什么圆满的时候不全然是幸福的情绪呢？可就因为存在“最后”这个标签和词语所以才会衬托出圆满的幸福。感情总不是单一的，我又体会到了这些。\n\n即使明天是周末，也还是早点睡吧。\n\n我晕乎乎的。"
    },
    {
      date: "261027",
      time: "22:37",
      category: "日记",
      body: "见教授的日子\n\n虽然教授还是太严厉了…但因为严厉反而有安全感是怎么回事？！\n\n出门前还在疯狂修改上次见教授时得到的修改意见，被学术包裹的一天总算是结束了。\n\n明天要继续上班~金代理已经给我交代了明天的工作，是做过的内容，应该不算太难。\n\n怎么就快十一月了呢？时间又不吱声的溜走。\n\n对了，今天在学校遇到了ㅇㅇ，隔着玻璃远远地看了一眼，她和其他同学讨论的样子对着电脑皱眉的样子也是第一次见。\n\n给她和她的同学们买了咖啡，算是对上次鲜花的回送。\n\n但好像，没有上次的鲜花我也会想给她买咖啡。\n\n这是什么对后辈的关爱吗？就像公司的前辈也总是请我们喝下午茶那样。"
    },
    {
      date: "261111",
      time: "23:54",
      category: "日记",
      body: "我好像，有了喜欢的人，我好像，喜欢上ㅇㅇ了。\n\n应该不算突然把，第一次和她吃饭的时候相互之间察觉到的舒适感似乎就…诶。\n\n今天是빼빼로데이，大街小巷手机广告里全是빼빼로…好吧，我也有过要送她빼빼로的计划。是太胆小还是…不明心意。\n\n怎么开始责怪自己了，是要责怪一下的吧？\n\n不知道了…很久没有在写日记的时候有那么多想要大叫的念头。\n\n总之，她今天中午给了我빼빼로…不光去便利店见她，也帮申课长买送给大家的빼빼로。\n\n好混乱，流水账记录一下今天中午就是，我先在便利店里挑好申课长要送大家的빼빼로，多拿了便利店最显眼位置的送人礼包빼빼로，这个是给她的。\n\n然后我从她那收到了一样的回礼，她让我来便利店，就是打算给我빼빼로……\n\n算被她抢先一步吗？还是我太迟钝了……\n\n没脑子的人想要亡羊补牢想到的只有请她吃饭，慌张问她晚上要不要一起吃饭，没脑子的人那时正盯着她的眼睛。\n\n我看到她眼睛一闪，先是慌张然后是…我可以把我看到的东西解读成类似于“欣喜”的积极词汇吗？\n\n回工位看一圈餐厅才意识到因为是今天，所以一切餐厅都被约满了…还好有老姐。但正因为有姐姐的存在所以也可以说明一切都有天意吧。\n\n我天，怎么感叹了那么多。\n\n和她约好在下班后一起从公司出发过去，选好的鲜花的配送地址是餐厅。\n\n不知道为什么今天她和我似乎都很难开口说点什么，应该不是错觉吧。\n\n今天的她穿着大衣，很可爱。她的竞赛结束了，拿到不错的名次，教授有帮她推荐实习工作，顺利的话明年初就会入职。\n\n便利店的兼职应该只会做到年末，考试周前。\n\n我们聊了好多。\n\n学校、专业、公司楼里的日常。\n\n我好死不死地问她，那天原本的计划，她说，她在等我约她。\n\n天，原来。\n\n原来是这样。\n\n好在，她很喜欢我送的花。"
    },
    {
      date: "261129",
      time: "22:41",
      category: "日记",
      body: "白天处理了一下论文，刚才去上了喜欢老师的课程！原来计划是明天去上的，因为ㅇㅇ的邀请，改到今天了。\n\n今天在舞室再次感到每天抽空跳个20分钟的舞的确有防止身体机能倒退的作用，能跟上老师跳舞的节奏也是一件幸福的事情！这个季度去舞室的频率有所降低…要研究一下公司附近还有什么地方可以跳舞才好了。\n\n明天要和ㅇㅇ一起去看音乐剧，该穿成什么样呢？问问亲助吧。"
    },
    {
      date: "261130",
      time: "23:58",
      category: "日记",
      body: "今天…是第一次约会\n\n算吧？！这应该算是约会了吧\n\n她说我今天看上去很特别…见面之后我问她这是什么意思，她说特别帅的意思啊啊啊啊\n\n怎么又在日记里乱叫了！感谢亲助。\n\n看的音乐剧也有同样的见解，之后去的书店也是我之前逛过的…\n\n她最近在和我阅读同一本书诶？！\n\n一切都好合拍。\n\n带她去吃了以前和朋友吃过的好吃的烤肉，除了味道之外选择烤肉还有个原因是…给她展示烤肉技术也是开屏的一种吧\n\n不管了今天的肉烤的不错。\n\n她吃饭的样子也很可爱。\n\n一开始这样的进度是对的吧？！一起走在路上的时候也好想牵她的手，但我怎么敢…除了有人撞到她的时候把她拉了一把\n\n要反思的是，没给她准备礼物。\n\n送女生该送什么呢…这个问题是不是该问一下姐姐\n\n晚上的首尔还是好冷，愈发觉得她穿的单薄，自然是把围巾给她了，还好在冬天到来之前就把所有衣物都送去干洗过。围巾上应该还有好闻的香氛味，希望她能喜欢。\n\n礼物，告白，下周末应该去烦一下姐姐的。\n\n可不能再被她抢先一步了。\n\n明天也想见面，她会有这样的想法吗？可偏偏现在是我和她都忙碌到不行的时候……"
    },
    {
      date: "261203",
      time: "23:19",
      category: "日记",
      body: "现在是刚和姐姐吃完饭回家的状态。\n\n让我整理一下接下来要做的事情……\n\n首先，大体的计划是，10号要让她打开我的手机才行…虽然不打开我的手机我也应该能想出解决办法吧…但是如果能打开就好了\n\n姐姐说相比于密不透风的惊喜，稍微透点风的惊喜有时候也是不错的\n\n早保密具体事件的情况下，可以透露出日期\n\n在保密日期的情况下，可以透露出一点点时间\n\n最理想的情况里，我希望她能选出日期。"
    }
  ],
  calendar: [
    { date: "260729", title: "公司报道", time: "09:00" },
    { date: "260905", title: "舞室", time: "12:30-15:00" },
    { date: "260915", title: "见X教授", time: "09:30-11:00" },
    { date: "260924", end: "260926", title: "秋夕假期" },
    { date: "261005", title: "开天节" },
    { date: "261007", title: "舞社排练", time: "19:00-21:30" },
    { date: "261009", title: "韩文节" },
    { date: "261009", title: "舞社排练", time: "14:00-17:30" },
    { date: "261009", title: "和ㅇㅇ吃饭" },
    { date: "261023", title: "学校庆典", time: "18:30" },
    { date: "261027", title: "见X教授", time: "14:30-15:00" },
    { date: "261111", title: "빼빼로데이" },
    { date: "261111", title: "xx饭店 w/ㅇㅇ", time: "18:00" },
    { date: "261129", title: "舞室", time: "19:00-21:00" },
    { date: "261130", title: "音乐剧 w/ㅇㅇ", time: "14:00" },
    { date: "261206", title: "迎接doori w/ㅇㅇ", time: "14:00" },
    { date: "261206", title: "烤肉店 w/老姐", time: "18:00" },
    { date: "261210", title: "汉江公园", time: "14:00" },
    { date: "261224", title: "平安夜" },
    { date: "261225", title: "圣诞节" },
    { date: "270101", title: "元旦" }
  ],
  /*
   * KakaoTalk：
   * chats[] 每一项是一个聊天
   * - id：唯一标识，不用显示
   * - name / avatar：名字与头像上的字（写了 avatarImage 就用图片）
   * - preview / date / unread：列表里的消息预览、日期、红色未读数
   * - messages[]：聊天记录，按时间先后排列
   *   日期分割线：{ type: "date", text: "2026年10月20日 星期二" }
   *   普通消息：{ side: "me" | "them", time: "23:33", text: "..." }
   *   Apple Music 卡片：{ side: "them", time: "23:31", music: { title, artist, album, desc, link, cover } }
   *   PDF 卡片：{ side: "me", time: "23:40", pdf: { name, expire, size } }
   *   图片：{ side: "me", time: "16:43", image: "pics/doori1.jpeg" }
   */
  kakaotalk: {
    chats: [
      {
        id: "berry",
        name: "ㅇㅇ",
        avatar: "ㅇ",
        pinned: true,
        preview: "好呀 这个更好。",
        date: "12月6日",
        unread: 0,
        messages: [
          { type: "date", text: "2026年9月15日 星期二" },
          { side: "me", time: "20:34", text: "谢谢你的香蕉牛奶" },
          { side: "them", time: "20:35", text: "没想到会在学校遇到呢" },
          { side: "them", time: "20:35", text: "是你请我吃雪糕在先的啦？" },
          { side: "them", time: "20:36", text: "贸然递纸条是不是打扰你了" },
          { side: "them", time: "20:36", text: "以为你不会加我了来着哈哈哈对不起" },
          { side: "me", time: "20:38", text: "吃完饭有些事情在忙就忘了" },
          { side: "me", time: "20:38", text: "但是可以问一下理由吗？" },
          { side: "them", time: "20:39", text: "理由？" },
          { side: "them", time: "20:39", text: "哦哦就是觉得好像遇见很多次了想认识一下" },
          { side: "them", time: "20:40", text: "如果你介意的话" },
          { side: "me", time: "20:41", text: "啊啊不是这个意思" },
          { side: "me", time: "20:41", text: "没什么介意的" },
          { side: "me", time: "20:41", text: "谢谢香蕉牛奶" },
          { side: "them", time: "20:42", text: "那么多谢谢吗哈哈哈" },
          { side: "them", time: "20:42", text: "那我再告诉你一个会让你感谢的" },
          { side: "me", time: "20:43", text: "嗯？" },
          { side: "them", time: "20:44", text: "1+1吃不完的话是可以寄存的哈哈哈，下次女朋友不在不能分享的话可以直接跟店员说寄存下次用的哈哈哈" },
          { side: "me", time: "20:45", text: "啊" },
          { side: "me", time: "20:45", text: "原来还可以这样" },
          { side: "me", time: "20:46", text: "但是请对方吃也挺好的呀，本身就是1+1" },
          { side: "me", time: "20:46", text: "也没有女朋友可以分享哈哈哈" },
          { side: "me", time: "20:47", text: "但是告诉我这些真的太感谢了" },
          { side: "them", time: "20:47", text: "那我也 thanks to 1+1~" },
          { type: "date", text: "2026年10月7日 星期三" },
          { side: "them", time: "14:32", text: "你把卡落我这了" },
          { side: "them", time: "14:32", text: "应该是你的吧..？" },
          { side: "them", time: "14:33", text: "是在你后面的客人发现的" },
          { side: "them", time: "14:33", text: "先替你保管啦.." },
          { side: "me", time: "14:45", text: "오애앵是我的" },
          { side: "me", time: "14:46", text: "又要说谢谢了…" },
          { side: "me", time: "14:46", text: "我现在来拿" },
          { side: "them", time: "18:13", text: "你也在4号线吗？" },
          { side: "them", time: "18:13", text: "好像看到你了" },
          { side: "me", time: "18:14", text: "诶对" },
          { side: "me", time: "18:14", text: "要回趟学校" },
          { side: "them", time: "18:15", text: "ㅎㅎ怪不得会遇到呢" },
          { side: "them", time: "18:15", text: "我也要回学校" },
          { side: "me", time: "18:16", text: "要上课吗？" },
          { side: "them", time: "18:16", text: "有pre要小组讨论 快期中了" },
          { side: "me", time: "18:17", text: "诶对期中" },
          { side: "them", time: "18:18", text: "那个…你是大四的学长吗？" },
          { side: "me", time: "18:19", text: "嗯……已经没课了" },
          { side: "them", time: "18:20", text: "那今晚去学校干做什么呀" },
          { side: "me", time: "18:21", text: "排舞社的演出" },
          { side: "them", time: "18:21", text: "那么酷吗？" },
          { side: "me", time: "18:22", text: "诶？……就是很普通的那种啦" },
          { side: "them", time: "18:23", text: "什么时候演出呀" },
          { side: "me", time: "18:24", text: "半个月后的庆典" },
          { side: "them", time: "18:25", text: "原来没打算去的" },
          { side: "them", time: "18:25", text: "我会去看的ㅎㅎ" },
          { side: "them", time: "18:25", text: "会去应援的" },
          { side: "me", time: "18:26", text: "诶…谢谢……" },
          { side: "them", time: "21:13", text: "路过看到你了…好厉害啊…加油加油" },
          { side: "me", time: "21:33", text: "啊啊谢谢！" },
          { side: "me", time: "21:34", text: "你已经离开了吗" },
          { side: "them", time: "21:35", text: "嗯嗯已经快到家了" },
          { side: "them", time: "21:35", text: "你刚结束吗" },
          { side: "me", time: "21:36", text: "嗯" },
          { side: "them", time: "21:36", text: "那明天还要上班吗？" },
          { side: "them", time: "21:36", text: "是上班吧…?" },
          { side: "me", time: "21:38", text: "对呀实习生" },
          { side: "them", time: "21:38", text: "快快回去休息吧" },
          { side: "me", time: "21:39", text: "ㅎㅎ谢谢你" },
          { side: "me", time: "21:39", text: "你呢 明天要上班吗" },
          { side: "them", time: "21:40", text: "明天没排班" },
          { side: "them", time: "21:40", text: "我这种学生兼职一般周末的排班比较多" },
          { side: "me", time: "21:41", text: "啊原来是这样" },
          { side: "them", time: "21:42", text: "对呀还有就是假期这种" },
          { side: "them", time: "21:42", text: "9号10号都有半天班呢" },
          { side: "me", time: "21:43", text: "诶？节假日上班会累点吗" },
          { side: "them", time: "21:44", text: "好像不会" },
          { side: "them", time: "21:44", text: "但工资确实高点" },
          { side: "them", time: "21:45", text: "ㅎㅎㅎ我到家了" },
          { side: "me", time: "21:46", text: "好" },
          { type: "date", text: "2026年10月8日 星期四" },
          { side: "them", time: "00:42", text: "是这首吗？" },
          { side: "them", time: "00:42", music: { title: "FE!N (feat. Playboi Carti)", artist: "Travis Scott", album: "UTOPIA", desc: "Song · 2023 · Duration 3:11", link: "music.apple.com",
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/09/7d/b0/097db06f-8403-3cf7-7510-139e570ca66b/196871341882.jpg/600x600bb.jpg" } },
          { side: "them", time: "00:43", text: "你们晚上排练的" },
          { side: "me", time: "00:44", text: "是的" },
          { side: "them", time: "00:45", text: "你还醒着诶？" },
          { side: "me", time: "00:46", text: "还不困耶" },
          { side: "me", time: "00:46", text: "但好像应该要睡了" },
          { side: "me", time: "00:47", text: "睡前听这个吧" },
          { side: "me", time: "00:47", music: { title: "recently,", artist: "Liana Flores", album: "recently - EP", desc: "Song · 2019 · Duration 2:55", link: "music.apple.com",
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7c/50/96/7c509687-a64a-3e26-71e9-d4fa8ea1811a/194156854010.png/600x600bb.png" } },
          { side: "them", time: "00:48", text: "好" },
          { side: "them", time: "00:49", text: "晚安…？" },
          { side: "me", time: "00:50", text: "晚安" },
          { side: "them", time: "01:22", text: "9号可以和你约个饭吗？" },
          { side: "me", time: "08:32", text: "9号吗？明天" },
          { side: "me", time: "08:33", text: "好像可以" },
          { side: "me", time: "08:33", text: "那天下午要去排练 刚好可以吃晚饭" },
          { side: "them", time: "10:43", text: "诶好呀" },
          { side: "them", time: "10:43", text: "我三点下班" },
          { side: "them", time: "10:44", text: "那就在学校附近吧" },
          { side: "them", time: "10:44", text: "ㅋㅌㅌㅋㅌㅋㅋㅋㅋ" },
          { side: "them", time: "10:44", text: "还怕突然提议有点冒犯来着…" },
          { side: "them", time: "10:45", text: "10号和11号要做作业和复习，打算9号玩一下，结果朋友都有约了" },
          { side: "me", time: "10:47", text: "六点左右？" },
          { side: "me", time: "10:47", text: "我们排练五点半结束" },
          { side: "them", time: "10:48", text: "好呀" },
          { side: "them", time: "10:48", text: "明天见" },
          { side: "me", time: "10:49", text: "明天见" },
          { type: "date", text: "2026年10月9日 星期五" },
          { side: "them", time: "15:08", text: "我下班啦 等会儿六点店门口见？" },
          { side: "me", time: "15:28", text: "嗯嗯" },
          { side: "them", time: "20:37", text: "我到家了" },
          { side: "them", time: "20:37", text: "你还在地铁上吗？" },
          { side: "me", time: "20:39", text: "嗯 还要一会儿耶" },
          { side: "them", time: "20:40", text: "到家说一声" },
          { side: "me", time: "20:40", text: "好" },
          { side: "me", time: "21:03", text: "我到家了" },
          { side: "them", time: "21:04", text: "好的" },
          { side: "them", time: "21:04", text: "今天很开心" },
          { side: "me", time: "21:05", text: "我也是" },
          { type: "date", text: "2026年10月16日 星期五" },
          { side: "me", time: "11:43", text: "你是不是在教学楼食堂这边" },
          { side: "me", time: "11:43", text: "好像看到你了" },
          { side: "me", time: "11:44", text: "是和朋友一起吗？" },
          { side: "them", time: "11:49", text: "谢谢你的养乐多" },
          { side: "them", time: "11:49", text: "诶？让你看到今天这个样子真是有点难为情" },
          { side: "them", time: "11:50", text: "最近都是考试" },
          { side: "them", time: "11:50", text: "忙得有些自顾不暇了" },
          { side: "me", time: "11:51", text: "什么话呀…" },
          { side: "me", time: "11:51", text: "但真的好像有点憔悴了" },
          { side: "me", time: "11:52", text: "要注意身体呀…" },
          { side: "me", time: "11:52", text: "考试周快快过去" },
          { side: "me", time: "11:52", text: "你和你朋友要喝点什么吗？我正要去买咖啡" },
          { side: "them", time: "11:53", text: "这怎么好意思？都蹭到养乐多了" },
          { side: "me", time: "11:54", text: "那就冰美式吧？还是想喝点甜的呢？" },
          { side: "them", time: "11:55", text: "冰美式吧" },
          { side: "them", time: "11:55", text: "一边说安慰人的话 一边请喝冰美式" },
          { side: "them", time: "11:56", text: "学长你真的是ㅋㅌㅋㅌㅌㅋㅋㅋ👍🏻👍🏻👍🏻ㅠ" },
          { side: "me", time: "11:56", text: "ㅋㅌㅋㅌㅋㅋㅋㅋ对不起但是" },
          { side: "me", time: "11:57", text: "没办法的" },
          { side: "me", time: "11:58", text: "考试加油！" },
          { side: "them", time: "11:59", text: "也谢谢你的咖啡" },
          { side: "them", time: "11:59", text: "对了 你今天怎么在学校？排练吗？" },
          { side: "me", time: "12:00", text: "嗯嗯 下周五演出" },
          { side: "them", time: "12:00", text: "我那会儿完全考完了诶！" },
          { side: "them", time: "12:01", text: "真的会去应援的！" },
          { side: "me", time: "12:01", text: "再说下去我要满怀期待了" },
          { side: "them", time: "12:02", text: "满怀期待也可以" },
          { side: "me", time: "12:02", text: "诶？" },
          { side: "them", time: "12:03", text: "ㅋㅎㅋㅎㅋㅋㅋㅌ没什么" },
          { type: "date", text: "2026年10月23日 星期五" },
          { side: "them", time: "19:03", text: "哇完成得好好啊" },
          { side: "them", time: "19:03", text: "比之前在练习室里偷瞄到的完成度要好好多" },
          { side: "me", time: "19:04", text: "你来看了呀" },
          { side: "them", time: "19:04", text: "当然啦!!!都说了会来的" },
          { side: "them", time: "19:05", text: "总不能这点都做不到吧？" },
          { side: "me", time: "19:05", text: "谢谢…🥹🥹" },
          { side: "them", time: "19:06", text: "我能去后台找你吗？" },
          { side: "them", time: "19:06", text: "就一两分钟ㅋㅋㅋㅌ" },
          { side: "them", time: "19:07", text: "之后还有点事…" },
          { side: "me", time: "19:07", text: "可以呀" },
          { side: "me", time: "19:08", text: "我去后台入口接你" },
          { type: "date", text: "2026年10月27日 星期二" },
          { side: "me", time: "15:43", text: "你在H楼3楼的多功能教室吗？" },
          { side: "me", time: "15:43", text: "好像看到你了" },
          { side: "them", time: "15:53", text: "诶？对" },
          { side: "me", time: "15:54", text: "看你们三四个人，是还要准备pre吗？" },
          { side: "them", time: "15:54", text: "竞赛" },
          { side: "them", time: "15:55", text: "所以最近也晕头转向的ㅠㅠㅠㅠㅜㅠ" },
          { side: "me", time: "15:56", text: "给你们买了咖啡" },
          { side: "me", time: "15:56", text: "放门口的桌子上了" },
          { side: "me", time: "15:57", text: "怕有人要喝甜的，所以是两杯美式两杯焦糖拿铁" },
          { side: "them", time: "15:58", text: "诶??那么突然?" },
          { side: "me", time: "15:59", text: "咖啡店就在楼下嘛ㅋㅎㅋㅋㅋㅌ" },
          { side: "them", time: "16:00", text: "你已经走了吗？" },
          { side: "them", time: "16:00", text: "谢谢你的咖啡" },
          { side: "me", time: "16:02", text: "先回去改论文了" },
          { side: "me", time: "16:02", text: "你也加油呀" },
          { side: "them", time: "16:03", text: "谢谢ㅠㅠㅜㅠ" },
          { side: "them", time: "16:03", text: "学长也是!!!" },
          { type: "date", text: "2026年11月11日 星期三" },
          { side: "them", time: "09:21", text: "今天上班吗" },
          { side: "me", time: "09:22", text: "上的ㅠㅠ" },
          { side: "them", time: "09:23", text: "你们午休几点呀" },
          { side: "me", time: "09:24", text: "11:30-13:00" },
          { side: "them", time: "09:25", text: "我十二点上班" },
          { side: "them", time: "09:25", text: "十二点半能来一下店里吗" },
          { side: "me", time: "09:26", text: "诶？" },
          { side: "them", time: "09:27", text: "有东西要给你啦" },
          { side: "me", time: "09:27", text: "诶？" },
          { side: "them", time: "09:28", text: "应该不是会让你有负担的东西!!" },
          { side: "them", time: "09:28", text: "好奇的话中午见？" },
          { side: "me", time: "09:30", text: "好~" },
          { side: "me", time: "12:22", text: "方便吗？我现在来" },
          { side: "them", time: "12:23", text: "好" },
          { side: "me", time: "14:10", text: "18:00 xx店" },
          { side: "them", time: "14:10", text: "诶这家吗？" },
          { side: "them", time: "14:10", text: "想吃很久了诶！" },
          { side: "me", time: "14:11", text: "真的吗？" },
          { side: "me", time: "14:11", text: "那下班后前面路口见" },
          { side: "them", time: "14:12", text: "嗯 我们走过去" },
          { side: "me", time: "14:12", text: "好呀" },
          { type: "date", text: "2026年11月17日 星期二" },
          { side: "me", time: "20:43", text: "到家了吗" },
          { side: "them", time: "20:44", text: "到了" },
          { side: "me", time: "20:45", text: "谢谢你的饭团~明天早饭有着落了" },
          { side: "them", time: "20:45", text: "你不嫌弃就好ㅎㅋㅋㅋㅌ" },
          { side: "me", time: "20:46", text: "怎么会！" },
          { side: "them", time: "20:46", text: "那就好" },
          { side: "me", time: "20:47", text: "明天上班吗" },
          { side: "them", time: "20:47", text: "不上 明天上学" },
          { type: "date", text: "2026年11月21日 星期六" },
          { side: "me", time: "16:43", image: "pics/doori1.jpeg" },
          { side: "them", time: "16:44", text: "诶小狗！" },
          { side: "them", time: "16:44", text: "这是你之前说的家里养的小狗吗？" },
          { side: "them", time: "16:45", text: "好可爱呀" },
          { side: "them", time: "16:45", text: "名字是什么呀？" },
          { side: "me", time: "16:46", text: "大点的是doori，小点的是choco，choco是doori的妈妈" },
          { side: "them", time: "16:47", text: "好可爱……" },
          { side: "them", time: "16:47", text: "好想rua……" },
          { side: "me", time: "16:48", text: "要一起遛狗吗？" },
          { side: "them", time: "16:48", text: "可以吗？" },
          { side: "them", time: "16:48", text: "好呀！" },
          { side: "me", time: "16:49", text: "等等哦…下个月" },
          { side: "me", time: "16:49", text: "小狗要被寄养在我的小家几天" },
          { side: "them", time: "16:50", text: "诶啊啊好可爱好期待……" },
          { type: "date", text: "2026年11月27日 星期五" },
          { side: "them", time: "20:26", text: "那个学长…周天有空吗" },
          { side: "them", time: "20:26", text: "有个学音乐剧的姐姐送了我两张她音乐剧的票" },
          { side: "them", time: "20:27", text: "想问你有没有空，邀请你一起去看" },
          { side: "me", time: "20:28", text: "周天吗？" },
          { side: "me", time: "20:28", text: "几点呀" },
          { side: "them", time: "20:29", text: "下午两点开始" },
          { side: "me", time: "20:30", text: "好呀我可以空出来" },
          { side: "them", time: "20:30", text: "音乐剧大概四点不到会结束" },
          { side: "them", time: "20:31", text: "你之后有其他事情吗" },
          { side: "me", time: "20:31", text: "没有呢" },
          { side: "them", time: "20:32", text: "附近有家想去的书店" },
          { side: "them", time: "20:32", text: "可以一起去逛逛" },
          { side: "me", time: "20:33", text: "好耶" },
          { side: "me", time: "20:33", text: "要一起吃晚饭吗？" },
          { side: "me", time: "20:33", text: "能一起吃晚饭吗" },
          { side: "them", time: "20:34", text: "好呀" },
          { side: "them", time: "20:34", text: "又该怎么拒绝呢" },
          { side: "me", time: "20:35", text: "附近有家好吃的烤肉" },
          { side: "them", time: "20:35", text: "好 那就吃烤肉" },
          { type: "date", text: "2026年11月30日 星期日" },
          { side: "me", time: "13:45", text: "我到啦" },
          { side: "them", time: "13:46", text: "等个红绿灯就到" },
          { side: "them", time: "13:46", text: "诶 好像看到你了" },
          { side: "them", time: "13:47", text: "今天好特别" },
          { side: "them", time: "21:30", text: "我到家啦" },
          { side: "them", time: "21:30", text: "我这周四上班 你上班吗" },
          { side: "them", time: "21:31", text: "到时候把围巾还给你" },
          { side: "me", time: "21:32", text: "我也快到家了" },
          { side: "me", time: "21:32", text: "不着急还的" },
          { side: "me", time: "21:32", text: "不还也可以.." },
          { side: "them", time: "21:33", text: "这算礼物吗？" },
          { side: "me", time: "21:34", text: "不算" },
          { side: "me", time: "21:34", text: "礼物应该是全新的才对耶" },
          { side: "them", time: "21:35", text: "ㅋ明白了" },
          { type: "date", text: "2026年12月6日 星期日" },
          { side: "me", time: "20:16", image: "pics/doori2.HEIC" },
          { side: "me", time: "20:16", text: "这周有空吗" },
          { side: "me", time: "20:16", text: "已成奶爸" },
          { side: "them", time: "20:17", text: "诶！doori！" },
          { side: "me", time: "20:18", text: "我周四不上班，如果可以的话…" },
          { side: "them", time: "20:19", text: "刚好！我周四下午空着" },
          { side: "them", time: "20:19", text: "上午有课来着ㅠㅠ" },
          { side: "me", time: "20:20", text: "那我们周四下午在汉江公园见？" },
          { side: "them", time: "20:21", text: "好呀" },
          { side: "them", time: "20:21", text: "doori有喜欢吃的零食吗" },
          { side: "me", time: "20:22", text: "只要是零食 好像没有不吃的ㅎㅎ" },
          { side: "them", time: "20:22", text: "好小狗" },
          { side: "me", time: "20:23", text: "贪吃小狗ㅎㅎ" },
          { side: "them", time: "20:24", text: "那我们可以在江边野餐" },
          { side: "them", time: "20:24", text: "虽然天气有点冷" },
          { side: "them", time: "20:25", text: "但那天太阳应该会很不错" },
          { side: "me", time: "20:26", text: "你有喜欢吃的了零食吗？" },
          { side: "them", time: "20:27", text: "比起这个，我们买各自喜欢吃的零食到时候分享怎么样" },
          { side: "me", time: "20:28", text: "好呀 这个更好。" },
        ]
      },
      {
        id: "family",
        name: "有狗家庭",
        avatar: "狗",
        pinned: true,
        notice: "对狗好才是真的好",
        preview: "放心吧妈妈 我是绝对不会亏待doori的。",
        date: "11月17日",
        unread: 0,
        members: {
          sister: { name: "姐姐", avatar: "姐" },
          mom: { name: "妈妈", avatar: "妈" }
        },
        messages: [
          { type: "date", text: "2026年7月29日 星期三" },
          { side: "them", time: "10:33", sender: "sister", text: "你开始实习了？" },
          { side: "them", time: "10:33", sender: "sister", text: "@韩志薰" },
          { side: "me", time: "10:34", text: "嗯" },
          { side: "them", time: "10:34", sender: "sister", text: "老板快来看，他上班摸鱼" },
          { side: "me", time: "10:35", text: "🙄" },
          { type: "date", text: "2026年11月17日 星期二" },
          { side: "them", time: "21:08", sender: "sister", text: "我跟妈妈12.7-12.11要出去玩" },
          { side: "them", time: "21:08", sender: "sister", text: "doori给你带" },
          { side: "them", time: "21:09", sender: "sister", text: "choco已经拜托姑姑了" },
          { side: "me", time: "21:10", text: "👌🏻" },
          { side: "them", time: "21:11", sender: "mom", text: "6号我开车把doori送过去" },
          { side: "them", time: "21:11", sender: "mom", text: "每天都要遛狗" },
          { side: "them", time: "21:12", sender: "mom", text: "不要带doori做奇怪的事情" },
          { side: "me", time: "21:13", text: "放心吧妈妈 我是绝对不会亏待doori的。" },
        ]
      },
      {
        id: "tws",
        name: "TWS才刚刚开始",
        avatar: "T",
        pinned: true,
        notice: "TWS是组名，不爱加班，尽量到点就走。",
        preview: "那我去跑腿",
        date: "11月11日",
        unread: 0,
        members: {
          senior: { name: "申课长", avatar: "申" },
          kim: { name: "金代理", avatar: "金" },
          choi: { name: "崔代理", avatar: "崔" },
          hanjin: { name: "韩振", avatar: "韩" },
          lee: { name: "李炅潣", avatar: "李" }
        },
        messages: [
          { type: "date", text: "2026年9月5日 星期六" },
          { side: "them", time: "14:55", sender: "senior", text: "有人在公司附近可以去一趟公司，给我传一份历史文件吗" },
          { side: "them", time: "14:55", sender: "senior", text: "客户突然要" },
          { side: "them", time: "14:56", sender: "senior", text: "啊真的是，之前发给他又是挑刺又是讲一大堆，结果存都不存" },
          { side: "me", time: "14:57", text: "我三点多可以路过一下" },
          { side: "them", time: "14:57", sender: "senior", text: "志薰啊……" },
          { side: "them", time: "14:57", sender: "senior", text: "谢谢你……" },
          { side: "them", time: "14:58", sender: "senior", text: "我私聊跟你说" },
          { type: "date", text: "2026年9月7日 星期一" },
          { side: "them", time: "12:55", sender: "senior", text: "下午请大家喝下午茶" },
          { side: "them", time: "12:55", sender: "senior", text: "卡我等下放桌子上了" },
          { side: "them", time: "12:56", sender: "senior", text: "谁去跑一下腿" },
          { side: "them", time: "12:57", sender: "kim", text: "@三个实习生" },
          { side: "them", time: "12:58", sender: "hanjin", text: "1" },
          { side: "them", time: "12:58", sender: "lee", text: "1" },
          { side: "me", time: "12:59", text: "1" },
          { side: "them", time: "13:00", sender: "choi", text: "帮我顺两包糖浆" },
          { side: "them", time: "13:01", sender: "senior", text: "👍🏻👍🏻" },
          { type: "date", text: "2026年11月11日 星期三" },
          { side: "them", time: "10:04", sender: "senior", text: "据我观察 我们组0人收到빼빼로" },
          { side: "them", time: "10:04", sender: "senior", text: "作为你们的组长" },
          { side: "them", time: "10:05", sender: "senior", text: "我决定大发慈悲的送你们빼빼로" },
          { side: "them", time: "10:05", sender: "senior", text: "卡中午留桌子上" },
          { side: "me", time: "10:06", text: "那我去跑腿" }
        ]
      },
      {
        id: "sister",
        name: "姐姐",
        avatar: "姐",
        preview: "加油老弟",
        date: "12月6日",
        unread: 0,
        messages: [
          { type: "date", text: "2026年10月8日 星期四" },
          { side: "them", time: "15:33", text: "你明天才回来吗？" },
          { side: "me", time: "15:34", text: "嗯 明天还有点事" },
          { side: "me", time: "15:34", text: "吃完晚饭回去 到家应该挺晚了" },
          { side: "them", time: "15:35", text: "回的时候说一下" },
          { side: "them", time: "15:35", text: "到时候给我带点夜宵" },
          { side: "me", time: "15:36", text: "👌🏻" },
          { type: "date", text: "2026年10月9日 星期五" },
          { side: "me", time: "20:30", text: "要吃什么" },
          { side: "them", time: "20:31", text: "坐地铁回来的？" },
          { side: "me", time: "20:31", text: "？" },
          { side: "me", time: "20:31", text: "打车刷你卡回来的" },
          { side: "them", time: "20:32", text: "🙄" },
          { side: "them", time: "20:32", text: "炸鸡吃吗？地铁C口那家" },
          { side: "me", time: "20:33", text: "吃" },
          { side: "them", time: "20:33", text: "我现在点？" },
          { side: "me", time: "20:34", text: "再过十分钟下单 现在有点早" },
          { side: "them", time: "20:35", text: "👌🏻" },
          { type: "date", text: "2026年11月11日 星期三" },
          { side: "me", time: "13:25", text: "今天饭店怎么都预约满了" },
          { side: "them", time: "13:26", text: "？" },
          { side: "them", time: "13:26", text: "今天是빼빼로데이啊" },
          { side: "them", time: "13:26", text: "今天不满哪天满啊大哥" },
          { side: "me", time: "13:27", text: "请停止嘲笑一个母so" },
          { side: "them", time: "13:28", text: "不知道预约怪不得母so" },
          { side: "them", time: "13:28", text: "我帮我朋友多预约了一家餐厅" },
          { side: "them", time: "13:29", text: "现在看来应该是预约重了" },
          { side: "them", time: "13:29", text: "她对象也预约了" },
          { side: "me", time: "13:30", text: "好姐姐" },
          { side: "me", time: "13:30", text: "亲姐姐" },
          { side: "them", time: "13:31", text: "打钱" },
          { side: "me", time: "13:31", text: "打钱多伤感情" },
          { side: "me", time: "13:31", text: "挑好礼物发我代付链接" },
          { side: "them", time: "13:32", text: "👌🏻" },
          { side: "them", time: "13:32", text: "中餐厅可以吗" },
          { side: "them", time: "13:32", text: "你也没什么可以选择的了" },
          { side: "them", time: "13:33", text: "在你公司旁边 晚点发你地址 预约的六点两位 报我手机号就可以了" },
          { side: "me", time: "13:34", text: "姐姐🥹🥹" },
          { side: "them", time: "13:35", text: "记得给弟妹买花" },
          { side: "them", time: "13:35", text: "要我给你订吗？" },
          { side: "me", time: "13:36", text: "我自己来" },
          { side: "them", time: "13:36", text: "别挑点乱七八糟的东西" },
          { type: "date", text: "2026年11月21日 星期六" },
          { side: "them", time: "16:50", text: "照片发给谁了？" },
          { side: "me", time: "16:51", text: "朋友🙄" },
          { side: "them", time: "16:51", text: "🙄" },
          { side: "them", time: "16:52", text: "빼빼로데이女孩" },
          { side: "me", time: "16:52", text: "🙄" },
          { type: "date", text: "2026年12月3日 星期四" },
          { side: "me", time: "15:34", text: "周末请我吃饭" },
          { side: "them", time: "15:35", text: "？" },
          { side: "me", time: "15:35", text: "不请我吃饭的话你将错过许多" },
          { side: "them", time: "15:36", text: "？" },
          { side: "them", time: "15:36", text: "要吃什么" },
          { side: "me", time: "15:36", text: "？" },
          { side: "them", time: "15:37", text: "？" },
          { side: "me", time: "15:37", text: "你还是我姐吗？" },
          { side: "them", time: "15:38", text: "那我喊你姐？" },
          { side: "me", time: "15:38", text: "烤肉？" },
          { side: "them", time: "15:39", text: "ㅇㅋ" },
          { side: "them", time: "15:39", text: "要叫上妈妈吗？" },
          { side: "me", time: "15:40", text: "不不" },
          { side: "me", time: "15:40", text: "就我和你" },
          { side: "me", time: "15:40", text: "我付钱" },
          { side: "them", time: "15:41", text: "真有大事啊?" },
          { side: "me", time: "15:41", text: "组长找我了先上班了" },
          { type: "date", text: "2026年12月6日 星期日" },
          { side: "them", time: "17:45", text: "我到了" },
          { side: "them", time: "17:45", text: "点最贵的韩牛可以吧" },
          { side: "me", time: "17:46", text: "点吧" },
          { side: "me", time: "17:46", text: "付不起的话我会留下来刷碗的" },
          { side: "them", time: "17:47", text: "😅" },
          { side: "them", time: "20:53", text: "我到家了" },
          { side: "them", time: "20:53", text: "加油老弟" },
          { side: "me", time: "20:54", text: "1" },
        ]
      },
      {
        id: "kim",
        name: "金代理",
        avatar: "金",
        preview: "所以今天先和你说一下",
        date: "10月27日",
        unread: 4,
        messages: [
          { type: "date", text: "2026年10月18日 星期六" },
          { side: "them", time: "18:03", text: "报告我放你桌上了，周一再看也行" },
          { side: "me", time: "18:10", text: "好的，谢谢哥" },
          { type: "date", text: "2026年10月27日 星期二" },
          { side: "them", time: "16:32", text: "志薰啊，明天要处理的文件我放你桌上了" },
          { side: "them", time: "16:32", text: "和上次一样需要去技术部门对接一下看看数据有没有更新什么的" },
          { side: "them", time: "16:33", text: "我明天出外勤" },
          { side: "them", time: "16:33", text: "所以今天先和你说一下" },
          { side: "me", time: "16:40", text: "好的收到" }
        ]
      },
      {
        id: "senior",
        name: "申课长",
        avatar: "申",
        preview: "谢谢你志薰",
        date: "9月5日",
        unread: 0,
        messages: [
          { type: "date", text: "2026年9月5日 星期六" },
          { side: "them", time: "14:58", text: "在F盘…" },
          { side: "them", time: "14:58", text: "我电话跟你说" },
          { side: "me", time: "14:58", text: "申课长等下" },
          { side: "me", time: "14:59", text: "等我10分钟" },
          { side: "them", time: "15:00", text: "好的" },
          { side: "me", time: "15:43", pdf: { name: "pledis项目书_01.pdf", size: "大小 1.2 MB" } },
          { side: "me", time: "15:43", text: "是这个吗" },
          { side: "them", time: "15:44", text: "对的对的" },
          { side: "them", time: "15:44", text: "谢谢你志薰" }
        ]
      }
    ]
  },
  /*
   * ChatGPT：侧边栏历史 + “表白建议”这一段对话
   * answer 里：空行分段，"- " 开头是列表，整行用 ** 包起来是加粗小标题
   */
  chatgpt: {
    // 侧边栏「最近」列表，按时间从新到旧；id 决定点开是哪一种对话
    // confess / dateAdvice / musical 对应下面三段完整回答，其余用 question + answer
    history: [
      { id: "dateAdvice", title: "表白日期比较", time: "昨天 13:42" },
      { id: "confess", title: "表白建议", time: "11月30日 21:08" },
      { id: "musical", title: "音乐剧穿搭建议", time: "11月29日 09:26" },
      {
        id: "report",
        title: "报告被打回两次",
        time: "10月28日 19:16",
        question: "写的报告被组长打回来两次，说要「再想想」，这种情况怎么改？",
        answer: `「再想想」通常不是文笔问题，是组长没看到他要的那个判断。改之前先做一件事：问一句「这份报告您最想先看到哪个结论？」一句话就能省掉两轮返工。

**改的时候按这个顺序**
- 第一页先给结论：三行以内说清「现在什么情况、我建议怎么做、需要谁决策」
- 数据只留支撑结论的那部分，其余放附录，别让关键数字淹在中间
- 每条建议都写清代价：时间、人力、风险，组长看的是能不能落地
- 把你自己的判断写出来，不要只罗列现状。「我倾向于 A，因为……」比「A 有优点也有缺点」有用得多

第二次被打回时，可以直接问「是结构的问题还是结论的问题」，大部分人这时会给更具体的反馈。你不是写得不好，是还没写到他会签字的那一层。`
      },
      {
        id: "knee",
        title: "练舞后膝盖疼",
        time: "10月12日 23:07",
        question: "练完舞膝盖有点隐隐作痛，第二天还能继续练吗？",
        answer: `先别急着判断能不能练，先分清是「酸」还是「痛」。

**可以继续练的情况**
- 只有肌肉酸胀，活动开以后反而变轻
- 按压不痛，上下楼梯不痛
- 休息一晚明显缓解

**建议先停的情况**
- 膝盖内侧或髌骨周围有明确的点痛
- 上下楼梯、蹲下时有刺痛
- 有肿胀、发热，或者关节有卡住的感觉
- 第二天比第一天更痛

**这两天可以做的事**
- 练完冰敷 10–15 分钟，不要直接贴皮肤
- 减少跳跃和深蹲类动作，先练上肢和核心
- 练前热身至少 8 分钟，重点激活臀部和大腿前侧
- 睡前做直腿抬高，动作慢、不憋气

如果一周还没缓解，或者出现肿胀，去医院看运动医学科比继续忍更省时间。膝盖的问题很少是「练多了」，多半是「髋和踝没跟上」。`
      },
      {
        id: "chuseok",
        title: "秋夕祝福语怎么写",
        time: "9月22日 20:33",
        question: "秋夕要给公司前辈们发祝福短信，韩语怎么写比较得体？",
        answer: `秋夕祝福最稳妥的是「简洁 + 尊重」，不用写太长。给你三个可以直接用的版本：

**给前辈、组长**
- 잠시 쉬어가는 한가위 되세요. 늘 감사합니다.
  趁着秋夕好好休息一下。一直很感谢您。
- 풍성하고 따뜻한 한가위 보내세요. 감사드립니다.
  祝您过一个丰盛温暖的秋夕，谢谢您。

**给同岁同事、朋友**
- 즐거운 한가위 보내! 가족들이랑 맛있는 거 많이 먹어.
  秋夕快乐！跟家里人多吃点好吃的。

**需要更正式一点**
- 한가위를 맞아 가족과 함께하는 따뜻한 시간 보내시길 바랍니다.
  值此秋夕，祝您与家人共度温暖的时光。

一个小提醒：韩国人发祝福很少长篇大论，一两句就够；给前辈用「감사합니다」结尾基本不会出错。松饼那类玩笑式的祝福（比如「송편처럼 둥글둥글 행복하세요」）只在很熟的关系里用，对长辈说会有点轻。`
      }
    ],
    chat: {
      title: "表白建议",
      timestamp: "11月30日 21:08",
      question: "想和喜欢的女生表白，害怕她比我先开口，我该怎么做？",
      answer: `先别急着把表白当成一次决定。你们现在的关系不是停滞，而是在慢慢靠近——会主动递纸条、会约你吃饭、会说会去应援，这些都不是随手做出来的事。

**1. 不用立刻表白，但不要继续被动等待**
- 已有明显的暧昧：她把下班后的时间留给你，还特意问了演出是什么时候。
- 互相有好感：她会记得你随口提过的事，也会主动找话题。
- 你喜欢她：不然你不会为一条消息反复斟酌半天。

**2. 比起策划，先确认时机**
- 选一个你们都不赶时间的时候，饭后散步比在便利店结账时更合适。
- 把话说完整：说清楚你喜欢的理由，而不是只说「我喜欢你」。
- 给她回应的空间，别在气氛最好的时候追问答案。

**3. 准备一句你自己说得出口的话**
不用背诵台词。比起精心设计，她更容易记住你说这句话时的表情。比如：「我好像比想象中更喜欢你，想认真问问，我们能不能试着在一起。」

她如果比你先开口，那不是失败，是你们走到了同一步。你要做的不是抢先，而是别在她伸手的时候后退。`
    },
    dateAdvice: {
      title: "表白日期比较",
      timestamp: "昨天 13:42",
      question: "和女生表白选择平安夜、圣诞节还是元旦？",
      intro:
        "如果是想和女生表白，在平安夜、圣诞节、元旦这三个时间里，我最推荐平安夜，其次是圣诞节，最后是元旦。不过，真正决定表白效果的不是节日本身，而是你们目前的关系，以及她是否也对你有好感。"
    },
    musical: {
      title: "音乐剧穿搭建议",
      timestamp: "11月29日 09:26",
      question:
        "明天约了喜欢的女生去看音乐剧，穿什么比较好？我平时跳舞，穿搭偏街头，之前见面基本都在下班后。",
      intro: [
        "结合你说的情况，我现在的建议会更明确一些：明天穿一套「有设计感的 Smart Casual」，保留一点舞者的街头气质，但整体比平时更干净、利落、精致。",
        "我不建议你直接穿平时最典型的舞者风格，也不建议完全复制上班的通勤穿搭。你这次最值得尝试的是两种风格之间的第三种可能。",
        "因为你希望她看到不同的一面，而你们之前大多在下班后见面，她可能已经习惯了你在通勤场景中的样子。音乐剧约会恰好可以成为一次自然的风格变化。"
      ],
      looksHeading: "一、我最推荐的三套搭配",
      looks: [
        {
          no: "LOOK 1",
          title: "利落街头风",
          sub: "街头气质 × 约会精致感",
          top: true,
          items: [
            ["上装", "黑色短款夹克或简洁的深色外套"],
            ["内搭", "白色或灰色纯色 T 恤"],
            ["下装", "深蓝色直筒牛仔裤"],
            ["鞋子", "干净的板鞋或简洁的复古运动鞋"],
            ["配饰", "银色项链、戒指，选一两件即可"]
          ],
          why:
            "宽松裤型和球鞋保留了你的舞者气质，但整体轮廓更利落。她会看到你风格上的变化，却不会觉得你突然变成了另一个人。"
        },
        {
          no: "LOOK 2",
          title: "轻熟休闲风",
          sub: "比日常通勤更松弛一点",
          items: [
            ["上装", "宽松西装或简洁的短外套"],
            ["内搭", "纯色 T 恤或薄针织"],
            ["下装", "垂感西裤或宽松直筒裤"],
            ["鞋子", "低帮板鞋、简洁运动鞋"]
          ],
          why:
            "如果你平时穿得很运动、很有街头感，这套会让整体气质出现比较明显的变化，同时不需要穿得过于正式。",
          note:
            "注意西装最好有一定宽松度，不要为了显正式而选择让你感觉拘束的版型。"
        },
        {
          no: "LOOK 3",
          title: "克制的舞者风",
          sub: "最接近平日的自己，但更完整",
          items: [
            ["上装", "版型挺括的飞行夹克或深色拉链外套"],
            ["内搭", "黑白灰纯色上衣"],
            ["下装", "有垂感的宽松长裤"],
            ["鞋子", "你平时喜欢的球鞋，但保持整洁"]
          ],
          why:
            "如果你不习惯轻熟风，这套最容易穿出自信。它保留了你对舞者风格的偏好，同时减少运动服或排练服的感觉。"
        }
      ],
      whySection: {
        heading: "二、为什么看音乐剧，我更推荐第一套？",
        intro:
          "音乐剧和普通逛街有一点区别：你们会一起坐在剧场里，也可能在开演前、散场后吃饭聊天。衣服既要让你自己舒服，也要适合这种稍微有仪式感的场景。",
        lead: "我会按照下面的优先级来选：",
        priorities: [
          ["场合适配", "休闲但有完整的搭配感，不必正装化"],
          ["个人辨识度", "保留一个明显的街头元素，例如裤型或球鞋"],
          ["风格变化", "用利落外套替代平时最常穿的运动上装"],
          ["舒适程度", "选择坐着不紧绷、走路方便的衣服"],
          ["整体协调", "全身控制在 2–3 个主色，避免太多元素争抢视觉重点"]
        ],
        closing: [
          "尤其是第一套，它的优势在于：她能看出你今天有认真准备，但你仍然像你自己。",
          "当然，衣服本身不能决定她对你的感情。你也不需要把这次见面变成一场穿搭测试。穿好之后，如果你能自在地和她聊天、分享你对音乐剧的看法，这套衣服就已经很好地完成了任务。"
        ]
      },
      details: {
        heading: "三、明天有三个小细节值得注意",
        items: [
          [
            "别把自己完全藏在宽大衣服里。",
            "舞者风格可以宽松，但外套肩线、裤长和整体比例最好有一个明确的轮廓。"
          ],
          [
            "别为了约会临时尝试完全陌生的风格。",
            "如果你从来不穿西装，就不必明天突然穿一整套。只改变一两件单品就足够。"
          ],
          [
            "提前考虑散场后的场景。",
            "如果还会一起吃饭或散步，外套、包和鞋最好都适合继续活动，不要只考虑剧场里的效果。"
          ]
        ]
      }
    },
    replies: [
      "我在。慢慢说就好。\n\n如果这件事已经在你心里反复出现很多次，说明它对你来说很重要。要不要先说说，你打算在什么场合、什么时候和她说？",
      "听起来你已经想了很久。也许可以先把「怕她先开口」拆开看：你怕的是失去先说的机会，还是怕她拒绝？\n\n这两件事的应对方式不太一样。",
      "有些话不必一次说完。可以先从「下次还想和你一起吃饭」开始，看她怎么接。\n\n关系是两个人的事，你只需要走好你那一步。"
    ]
  },
  // 手机内 Apple Music 播放列表。封面样式由 style.css 里的 .am-c-* 提供；
  // glyph 是封面上的短字，tint 是顶部柔光的两段颜色。
  applemusic: [
    { title: "recently", artist: "Liana Flores", cover: "recently", glyph: "r", tint: ["#c6d9b8", "#8dab84"] },
    { title: "Phonecert", artist: "10CM", cover: "phonecert", glyph: "10", tint: ["#e8a87c", "#b86b4b"] },
    { title: "plot twist", artist: "TWS", cover: "plottwist", glyph: "✦", tint: ["#cdbbff", "#8fb9ff"] },
    { title: "Friday (feat. Jang Yi-jeong)", artist: "IU", cover: "friday", glyph: "fri", tint: ["#ffab73", "#e85c53"] },
    { title: "Fox Rain", artist: "Lee Sun Hee", cover: "foxrain", glyph: "雨", tint: ["#1d506c", "#3c8a92"] },
    { title: "You", artist: "Fujii Kaze", cover: "youkaze", glyph: "you", tint: ["#bfe4ff", "#ffd7c2"] },
    { title: "nop", artist: "ChenYueLong", cover: "nop", glyph: "nop", tint: ["#1a2938", "#0a0d12"] },
    { title: "The Love Of Foreigner", artist: "AKMU", cover: "love", glyph: "L", tint: ["#6f2d3f", "#d16b4d"] },
    { title: "You", artist: "Vietra", cover: "youvietra", glyph: "you", tint: ["#b8a9cf", "#8a7ca7"] },
    { title: "i love you", artist: "Billie Eilish", cover: "iloveyou", glyph: "♡", tint: ["#16383a", "#2e5a53"] },
    { title: "My Love Mine All Mine", artist: "Mitski", cover: "mylove", glyph: "m", tint: ["#8b2446", "#d66c8c"] },
    { title: "green to blue (slowed + reverbed)", artist: "daniel.mp3", cover: "greenblue", glyph: "≋", tint: ["#4f8f86", "#2d5f8c"] }
  ],
  temu: [
    { status: "已收藏", title: "草莓图案杯套", detail: "她的水杯总是很烫。", price: "¥ 18.90" },
    { status: "已取消", title: "拍立得相纸", detail: "取消原因：再想想。", price: "¥ 56.00" },
    { status: "待收货", title: "浅蓝色发夹", detail: "预计在 6 月 11 日送达。", price: "¥ 12.80" }
  ],

  /* ===== 结局：她的手机 =====
   * 她在 ChatGPT 里选好日期、点「把手机还给他」之后，页面会跳到她自己的手机。
   * 这里的所有内容都可以直接改写：
   * - lockScreen 的 time / weather / lunar / battery / wallpaper 是她的锁屏外观
   * - album.photos 是她相册里的照片，顺序就是照片墙的顺序；fav: true 表示已经点过小红心
   * - bridge.lines 是转场时逐行浮现的旁白
   * - story.messages 是「志薰」聊天里 12 月 6 日之后补上的内容；
   *   d 表示离选定日期还有几天（-1 = 前一天，0 = 当天），日期分割线会自动生成
   * - endings 的键必须和 advisor.js 里的日期 ID 一致：christmasEve / christmas / newYear
   *   replies 是他发回来的消息，coda 是最后那张日记卡片
   */
  herPhone: {
    lockScreen: {
      time: "22:41",
      weather: "−2°",
      lunar: "冬至",
      carrier: "中国移动",
      battery: 46,
      wallpaper: "linear-gradient(168deg,#1f2230 0%,#3a3448 44%,#7c5b68 78%,#c08f77 100%)",
      notification: { app: "KakaoTalk", title: "室友", text: "门没锁，我先进去了", time: "22:10" },
      player: { title: "My Love Mine All Mine", artist: "Mitski", elapsed: "0:52", remaining: "-1:45", progress: 33 }
    },
    home: {
      photo: "pics/doori1.jpeg"   // 她桌面上的照片小组件
    },
    homeApps: [
      { id: "kakaotalk", name: "KakaoTalk", badge: 1 },
      { id: "applemusic", name: "Apple Music" },
      { id: "calendar", name: "日历" },
      { id: "notes", name: "备忘录" },
      { id: "photos", name: "相册" },
      { id: "daysmatter", name: "Days Matter", count: "1" },
      { id: "temu", name: "Temu" }
    ],
    dockApps: [
      { id: "phone", name: "电话" },
      { id: "safari", name: "Safari" },
      { id: "chatgpt", name: "ChatGPT" }
    ],
    // 相册：点开是 3 列的照片墙，点任意一张可以看大图，左右滑动切换
    // person 是「人物」里那一栏，photos 里的 fav: true 表示已经点过小红心
    album: {
      person: { name: "志薰", avatar: "pics/album/04.jpg" },
      photos: [
        { src: "pics/album/01.jpg" },
        { src: "pics/album/02.jpg", fav: true },
        { src: "pics/album/03.jpg" },
        { src: "pics/album/04.jpg" },
        { src: "pics/album/05.jpg" },
        { src: "pics/album/06.jpg" },
        { src: "pics/album/07.jpg", fav: true },
        { src: "pics/album/08.jpg" },
        { src: "pics/album/09.jpg" },
        { src: "pics/album/10.jpg" },
        { src: "pics/album/11.jpg" },
        { src: "pics/album/12.jpg" },
        { src: "pics/album/13.jpg" },
        { src: "pics/album/14.jpg" },
        { src: "pics/album/15.jpg" },
        { src: "pics/album/16.jpg", fav: true },
        { src: "pics/album/17.jpg" },
        { src: "pics/album/18.jpg", fav: true },
        { src: "pics/album/19.jpg" }
      ]
    },
    // 转场旁白：一行一行浮现，轻触屏幕可以直接跳过
    bridge: {
      lines: [
        "韩志薰回来了",
        "外卖电话出现在他回来之后",
        "那天的太阳明媚江风也依旧刺骨",
        "穿着两层衣服的doori蹲坐在垫子上",
        "他从兜里掏出两个刚拆封不久的暖宝宝塞到你手里"
      ]
    },
    story: {
      // 输入框里预先写好的那句话，由你来按下发送
      sendText: "是明天吗？",
      // side "them" = 志薰，side "me" = 她
      messages: [
        { d: -13, time: "21:07", side: "them", text: "今天下班早" },
        { d: -13, time: "21:09", side: "me", text: "那你早点休息" },
        { d: -13, time: "21:10", side: "them", text: "嗯 你也是" },
        { d: -9, time: "08:41", side: "them", text: "今天很冷 出门多穿点" },
        { d: -9, time: "08:44", side: "me", text: "知道了 你也是" },
        { d: -9, time: "08:45", side: "them", text: "围巾还在我这" },
        { d: -9, time: "08:46", side: "me", text: "那就先借你" },
        { d: -5, time: "19:22", side: "me", text: "doori今天乖吗" },
        { d: -5, time: "19:25", side: "them", text: "乖 就是把我拖鞋叼走了" },
        { d: -5, time: "19:26", side: "me", text: "哈哈哈" },
        { d: -5, time: "19:27", side: "them", text: "回头拍给你看" },
        { d: -2, time: "22:03", side: "them", text: "年末有点忙 回消息可能会慢" },
        { d: -2, time: "22:05", side: "me", text: "没关系 你忙你的" },
        { d: -1, time: "19:40", side: "them", text: "明天有空吗" },
        { d: -1, time: "19:52", side: "me", text: "有啊" },
        { d: -1, time: "19:53", side: "them", text: "嗯" }
      ]
    },
    kakaotalk: {
      chats: [
        // 和「我」的聊天记录会在运行时由他手机上的那份镜像过来，这里留空即可
        { id: "jihun", name: "志薰", avatar: "薰", avatarImage: "pics/jihun-avatar.jpg", pinned: true, preview: "嗯", date: "12月6日", unread: 0, messages: [] },
        {
          id: "mom", name: "妈妈", avatar: "妈", preview: "周末回来吃饭吗", date: "昨天", unread: 0,
          messages: [
            { side: "them", time: "18:20", text: "周末回来吃饭吗" },
            { side: "me", time: "19:02", text: "可能不行 这周要上班" },
            { side: "them", time: "19:03", text: "那给你寄点吃的" },
            { side: "me", time: "19:05", text: "好呀" }
          ]
        },
        {
          id: "roomie", name: "室友", avatar: "舍", preview: "门没锁，我先进去了", date: "22:10", unread: 0,
          messages: [
            { side: "them", time: "22:10", text: "门没锁，我先进去了" },
            { side: "me", time: "22:18", text: "好 我在房间" }
          ]
        },
        {
          id: "store", name: "店长", avatar: "店", preview: "24号那天能来顶半天吗", date: "星期一", unread: 0,
          messages: [
            { side: "them", time: "15:12", text: "24号那天能来顶半天吗" },
            { side: "me", time: "15:20", text: "那天不行诶 有约了" },
            { side: "them", time: "15:21", text: "行吧 玩得开心" }
          ]
        }
      ]
    },
    endings: {
      christmasEve: {
        dateName: "平安夜",
        target: "2026-12-24",     // 跳转发生在它的前一天晚上
        sendTime: "22:41",
        replies: [
          { time: "22:43", text: "嗯。" },
          { time: "22:43", text: "明天七点，舞室后面那家小酒馆。二楼靠窗，老板认识我，不吵。" },
          { time: "22:44", text: "门口有台阶，别穿那双高跟的。" },
          { time: "22:44", text: "我七点前到，你不用赶。" }
        ],
        coda: {
          date: "12月24日 21:40",
          lines: ["今天表白了。", "这样明天就能一起过圣诞了。"],
          quote: "明年也一起过吧。"
        }
      },
      christmas: {
        dateName: "圣诞节",
        target: "2026-12-25",
        sendTime: "22:41",
        replies: [
          { time: "22:43", text: "嗯。" },
          { time: "22:43", text: "明天四点，百货正门那棵大树下面。" },
          { time: "22:44", text: "人很多，你跟紧我。" },
          { time: "22:44", text: "有个东西要给你。" }
        ],
        coda: {
          date: "12月25日 17:20",
          lines: ["树下面很吵。", "我说的话，只有她听见了。"],
          quote: "我喜欢你。"
        }
      },
      newYear: {
        dateName: "元旦",
        target: "2027-01-01",
        sendTime: "22:41",
        replies: [
          { time: "22:43", text: "是明天。不过不是晚上，是早上。" },
          { time: "22:43", text: "五点半，我在你楼下。" },
          { time: "22:44", text: "人多的地方我不太行，想找个安静点的。" },
          { time: "22:44", text: "你只要下来就行。" }
        ],
        coda: {
          date: "1月1日 07:46",
          lines: ["太阳出来的时候，我问了她今年的第一个问题。"],
          quote: "今年我的身边可以有你吗。"
        }
      }
    }
  }
};

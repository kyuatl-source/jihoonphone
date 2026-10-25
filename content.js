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
    close: "不打开"
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
    photo: "pics/doori2.jpg"   // 照片小组件的图片（不要和锁屏壁纸用同一张）
  },
  // 桌面图标顺序；badge 为红色角标，count 显示在 Days Matter 图标上
  homeApps: [
    { id: "kakaotalk", name: "KakaoTalk" },
    { id: "phone", name: "电话" },
    { id: "daysmatter", name: "Days Matter", count: "10" },
    { id: "notes", name: "备忘录" },
    { id: "photos", name: "相册" },
    { id: "applemusic", name: "Apple Music" },
    { id: "temu", name: "Temu" }
  ],
  // 他手机里的相册：照片不多，一半是 doori，一半是她
  album: {
    person: { name: "doori", avatar: "pics/doori2.jpg" },
    photos: [
      { src: "pics/doori2.jpg" },
      { src: "pics/doori1.jpeg" },
      { src: "pics/志薰手机相册展示.JPG" },
      { src: "pics/261001.jpeg", fav: true }
    ]
  },
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
    },
    {
      date: "261208",
      time: "00:41",
      category: "备忘录",
      title: "12月要做的事",
      body: "10号 让她打开我的手机\n\n* 位置先订好 要安静一点的 能好好说话\n* 花 不要康乃馨 也不要太香的那种\n* 第一句说什么 想好了再说 不要一开口就结巴\n* 出门前再练两遍 不要在镜子前面站太久\n* doori 那天怎么办 要不要一起带过去\n* 如果她没打开手机 就当作什么都没发生 重新想一次"
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
  // Days Matter：kind 为 "since" 是纪念日（已经过去多少天），"until" 是倒数日
  daysmatter: [
    { title: "香蕉牛奶那天", date: "2026-09-13", kind: "since", note: "她给的" },
    { title: "第一次约会", date: "2026-11-30", kind: "since", note: "音乐剧" },
    { title: "doori来家里", date: "2026-12-06", kind: "since" },
    { title: "论文初稿", date: "2026-12-20", kind: "until" },
    { title: "平安夜", date: "2026-12-24", kind: "until" },
    { title: "元旦", date: "2027-01-01", kind: "until" }
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
  // 他的 Temu：手机壳为主，混着随手买的杂货；tab 决定进「订单 / 收藏 / 购物车」哪一栏，glyph 是封面上的字
  temu: [
    { tab: "order", status: "已签收", glyph: "壳", title: "透明手机壳 3个装", detail: "9 月买的，现在黄得像琥珀。", price: "¥ 4.90" },
    { tab: "order", status: "已签收", glyph: "磁", title: "磁吸手机壳 黑色", detail: "吸不住。壳比手机还重。", price: "¥ 12.90" },
    { tab: "order", status: "已签收", glyph: "液", title: "液态硅胶壳 雾蓝", detail: "买错型号了，iPhone 14 的。", price: "¥ 9.80" },
    { tab: "order", status: "已签收", glyph: "架", title: "手机支架 折叠款", detail: "在便利店吃饭的时候用。", price: "¥ 6.50" },
    { tab: "order", status: "已签收", glyph: "线", title: "发光数据线 1.8m", detail: "晚上充电一闪一闪，吓到 doori。", price: "¥ 8.90" },
    { tab: "order", status: "已退款", glyph: "绳", title: "手机壳 带挂绳", detail: "孔位不对，退了三天。", price: "¥ 15.00" },
    { tab: "order", status: "已签收", glyph: "暖", title: "暖宝宝 50 片", detail: "她说站一天脚冷。", price: "¥ 19.90" },
    { tab: "order", status: "待收货", glyph: "狗", title: "doori 的发声玩具", detail: "第三天了，它还是很喜欢咬鞋。", price: "¥ 11.90" },
    { tab: "order", status: "待收货", glyph: "灯", title: "9.9 小夜灯", detail: "放在玄关，回家不用摸黑。", price: "¥ 9.90" },
    { tab: "fav", status: "已收藏", glyph: "壳", title: "手机壳 透明磨砂 2个", detail: "等这个先用黄了再说。", price: "¥ 7.90" },
    { tab: "fav", status: "已收藏", glyph: "镜", title: "手机壳 相机保护款", detail: "评论说镜头会顶膜。", price: "¥ 13.90" },
    { tab: "cart", status: "购物车", glyph: "壳", title: "手机壳 3个装（又）", detail: "颜色随机，赌一把。", price: "¥ 6.90" },
    { tab: "cart", status: "购物车", glyph: "扣", title: "数据线收纳扣", detail: "凑单用的。", price: "¥ 3.20" }
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
      // 她锁屏 / 桌面音乐组件上的这首是他唱的外国人的告白；写了 audio 播放键就真的会放
      player: {
        title: "외국인의 고백",
        artist: "지훈",
        elapsed: "0:00",
        remaining: "-1:31",
        progress: 0,
        audio: "音频/10月25日.mp3"
      }
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
      { id: "daysmatter", name: "Days Matter", count: "1" }
    ],
    dockApps: [
      { id: "phone", name: "电话" },
      { id: "safari", name: "Safari" },
      { id: "chatgpt", name: "ChatGPT" }
    ],
    // 结局卡：合上最后一页日记之后出现，两条线各有一句自己的总结
    endCard: {
      kicker: "END",
      open: {
        title: "打开了他的手机",
        line: "他准备好的那些话，你一句一句看完了。"
      },
      noOpen: {
        title: "把手机放回了长椅",
        line: "你没打开他的手机。他还是找到了你。"
      }
    },
    // 她的备忘录不建文件夹，所有笔记平铺在一起（notesFlat）；不写 category，列表里也不会出现分类标签
    notesFlat: true,
    notes: [
      {
        date: "261210",
        time: "23:47",
        title: "12月10日",
        body: "今天在汉江很冷。\n\n他把手机留给我，说自己就去一下。回来的时候手是红的，耳朵也是红的，还嘴硬说不冷。\n\n外卖到的时候，他把热的先递给我。\n\n有些话他好像一直没说出口。\n\n……那就等他自己说。"
      },
      {
        date: "261209",
        time: "21:18",
        title: "要问他的",
        body: "他那句「有话要跟我说」说了多久了\n\n* 到底去干嘛了 去那么久\n* 为什么一看我就笑\n* doori到底更喜欢谁\n* 上次的围巾是不是本来就要给我\n\n答不上来请我吃三次饭"
      },
      {
        date: "261207",
        time: "19:12",
        title: "买",
        body: "拍立得相纸\n暖宝宝 多买\n香蕉牛奶（冰箱只剩一瓶）\n给doori的小零食 不要买错口味\n\n对了 室友的生日礼物"
      },
      {
        date: "261205",
        time: "01:12",
        body: "他那件灰色卫衣是不是还在我这\n\n洗了 但是还没还\n\n……不还也可以吧"
      },
      {
        date: "261203",
        time: "08:40",
        title: "12.3 便利店的班",
        body: "周四 18-22\n周六换班 要提前跟组长说\n\n12月排班表还没贴出来"
      },
      {
        date: "261201",
        time: "22:18",
        title: "最近",
        body: "最近老是遇到他。\n\n便利店、地铁、学校食堂，还有舞室。\n\n舞室那次他跳得很好看，我在下面喊得有点大声。\n\n回来之后一直在想要不要先问他。\n\n算了，等他先说 ㅎㅎ"
      },
      {
        date: "261130",
        time: "23:59",
        title: "草稿",
        body: "在干嘛\n（删掉）\n\n睡了吗\n（删掉）\n\n今天很开心\n\n……还是明天再说"
      }
    ],
    // 她的日历：这些是固定的，和「他」见面的那一天会在运行时按选定的日期补上
    calendar: [
      { date: "2026-12-09", title: "便利店晚班", time: "18:00 - 22:00" },
      { date: "2026-12-12", title: "和室友看电影", time: "15:00" },
      { date: "2026-12-18", title: "期末小组讨论", time: "10:00" },
      { date: "2026-12-19", title: "期末结束" }
    ],
    // Days Matter：固定几个日子；「和志薰见面」同样在运行时补到最前面
    daysmatter: [
      { title: "认识志薰", date: "2026-09-15", kind: "since", note: "香蕉牛奶" },
      { title: "doori来家里", date: "2026-10-20", kind: "since" },
      { title: "期末结束", date: "2026-12-19", kind: "until" },
      { title: "下次发工资", date: "2027-01-10", kind: "until" },
      { title: "寒假回家", date: "2027-01-16", kind: "until" }
    ],
    // 她自己的歌单。musicIndex 是打开 Apple Music 时停在哪一首
    musicIndex: 0,
    applemusic: [
      { title: "My Love Mine All Mine", artist: "Mitski", cover: "mylove", glyph: "m", tint: ["#8b2446", "#d66c8c"] },
      { title: "recently,", artist: "Liana Flores", cover: "recently", glyph: "r", tint: ["#c6d9b8", "#8dab84"] },
      { title: "plot twist", artist: "TWS", cover: "plottwist", glyph: "✦", tint: ["#cdbbff", "#8fb9ff"] },
      { title: "Friday (feat. Jang Yi-jeong)", artist: "IU", cover: "friday", glyph: "fri", tint: ["#ffab73", "#e85c53"] },
      { title: "You", artist: "Fujii Kaze", cover: "youkaze", glyph: "you", tint: ["#bfe4ff", "#ffd7c2"] },
      { title: "i love you", artist: "Billie Eilish", cover: "iloveyou", glyph: "♡", tint: ["#16383a", "#2e5a53"] },
      { title: "Phonecert", artist: "10CM", cover: "phonecert", glyph: "10", tint: ["#e8a87c", "#b86b4b"] },
      { title: "The Love Of Foreigner", artist: "AKMU", cover: "love", glyph: "L", tint: ["#6f2d3f", "#d16b4d"] },
      { title: "green to blue (slowed + reverbed)", artist: "daniel.mp3", cover: "greenblue", glyph: "≋", tint: ["#4f8f86", "#2d5f8c"] }
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
    // 转场旁白：一行一行浮现；轻触一次先显示全文，再轻触一次才切到她的手机
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
      sendText: "明天要跟我说什么呀 我很期待 ㅎㅎ",
      // side "them" = 志薰，side "me" = 她
      // 志薰的口癖：笑 ㅋㅋㅋㅌㅌㅎㅋ、哭 ㅠㅠㅠㅠ、感叹 ㅎㅎ、喜欢用「耶」结尾
      // 她这边是暧昧期的语气：会接话、会撩回去，不冷冷地只回一个「好」
      messages: [
        { d: -13, time: "21:07", side: "them", text: "今天下班早" },
        { d: -13, time: "21:09", side: "me", text: "这么早？终于不用加班到半夜啦 ㅎㅎ" },
        { d: -13, time: "21:10", side: "them", text: "嗯 你也是 ㅎㅎ" },
        { d: -13, time: "21:11", side: "them", text: "今天舞室放了首超好听的歌 我跳了三遍才走 耶" },
        { d: -13, time: "21:12", side: "me", text: "三遍？那一定很好看 下次跳给我看嘛" },
        { d: -13, time: "21:13", side: "them", text: "真的要看吗 那我可能会紧张 ㅋㅋㅋㅌㅌㅎㅋ" },
        { d: -13, time: "21:13", side: "me", text: "紧张什么 我又不会笑你 我只会一直看" },
        { d: -13, time: "21:14", side: "them", text: "被你这么一说 我明天还想再去跳 ㅠㅠㅠㅠ" },
        { d: -9, time: "08:41", side: "them", text: "今天很冷 出门多穿点" },
        { d: -9, time: "08:44", side: "me", text: "知道啦 你才是 别只顾着说我 ㅎㅎ" },
        { d: -9, time: "08:45", side: "them", text: "我穿了四层 现在像个球 ㅋㅋㅋ" },
        { d: -9, time: "08:45", side: "me", text: "想看看球长什么样" },
        { d: -9, time: "08:46", side: "them", text: "围巾还在我这 明天带给你" },
        { d: -9, time: "08:47", side: "me", text: "不用还 你戴着吧 反正我也想看你戴" },
        { d: -9, time: "08:47", side: "them", text: "好耶 那我天天戴 反正你说了借我 ㅎㅎ" },
        { d: -9, time: "08:49", side: "me", text: "嗯 天天戴 我会检查的" },
        { d: -9, time: "08:50", side: "them", text: "那我明天就戴着去见你 耶" },
        { d: -5, time: "19:22", side: "me", text: "doori今天乖吗" },
        { d: -5, time: "19:25", side: "them", text: "乖 就是把我拖鞋叼走了" },
        { d: -5, time: "19:25", side: "them", text: "叼走之后还坐在上面看我 好像在等我夸它 ㅋㅋㅋㅌㅌㅎㅋ" },
        { d: -5, time: "19:26", side: "me", text: "哈哈哈 它是不是跟你学的 这么会撒娇" },
        { d: -5, time: "19:27", side: "them", text: "它现在听得懂你名字哦" },
        { d: -5, time: "19:28", side: "me", text: "真的假的 那它喜欢我吗" },
        { d: -5, time: "19:29", side: "them", text: "真的 我一说ㅇㅇ 它耳朵就竖起来 耶" },
        { d: -5, time: "19:30", side: "me", text: "那你要多替我说点好话 我还想讨好它呢" },
        { d: -5, time: "19:31", side: "them", text: "……我本来也天天说 ㅎㅎ" },
        { d: -2, time: "22:03", side: "them", text: "年末有点忙 回消息可能会慢" },
        { d: -2, time: "22:05", side: "me", text: "没关系 忙完记得吃饭 别又只喝咖啡" },
        { d: -2, time: "22:06", side: "them", text: "但是我不会忘的 真的" },
        { d: -2, time: "22:06", side: "them", text: "有件事想跟你说 等我忙完 ㅎㅎ" },
        { d: -2, time: "22:08", side: "me", text: "什么事呀 现在说一点点也不行吗" },
        { d: -2, time: "22:09", side: "them", text: "不行 说了就没意思了 等我 耶" },
        { d: -2, time: "22:10", side: "me", text: "那你最好快点忙完 我会一直想的" },
        { d: -1, time: "19:40", side: "them", text: "明天有空吗" },
        { d: -1, time: "19:52", side: "me", text: "有啊 怎么 要请我吃饭吗 ㅎㅎ" },
        { d: -1, time: "19:53", side: "them", text: "嗯" },
        { d: -1, time: "19:53", side: "them", text: "那明天 我有话想跟你说 ㅎㅎ" },
        { d: -1, time: "19:54", side: "them", text: "不是坏事 真的" },
        { d: -1, time: "19:58", side: "me", text: "你这样说 我今晚要睡不着了" },
        { d: -1, time: "19:59", side: "them", text: "那你就期待一下吧 耶" }
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
        meetTime: "19:00",
        replies: [
          { time: "22:43", text: "嗯!!" },
          { time: "22:43", text: "明天七点 舞室后面那家小酒馆 二楼靠窗 耶" },
          { time: "22:44", text: "老板认识我 那个位置很安静 我提前打过招呼了 ㅎㅎ" },
          { time: "22:44", text: "门口有台阶 别穿那双高跟的 真的" },
          { time: "22:45", text: "我七点前到 你不用赶 ㅠㅠ" },
          { time: "22:45", text: "刚刚想到明天 我好像有点睡不着了 ㅋㅋㅋ" }
        ],
        coda: {
          date: "12月24日 21:40",
          lines: [
            "今天表白了。",
            "说完之后她没讲话 我心跳快得像刚跳完一整支舞 ㅠㅠㅠㅠ",
            "然后她笑了 说「嗯」。",
            "这样明天就能一起过圣诞了 耶。"
          ],
          quote: "明年也一起过吧。"
        }
      },
      christmas: {
        dateName: "圣诞节",
        target: "2026-12-25",
        sendTime: "22:41",
        meetTime: "16:00",
        replies: [
          { time: "22:43", text: "嗯!!" },
          { time: "22:43", text: "明天四点 百货正门那棵大树下面 耶" },
          { time: "22:44", text: "那棵树今年挂了好多灯 我路过看了好几次 ㅎㅎ" },
          { time: "22:44", text: "人很多 你跟紧我 我会一直牵着你的" },
          { time: "22:45", text: "有个东西要给你 准备了很久的 ㅠㅠㅠㅠ" },
          { time: "22:45", text: "啊 说漏嘴了 你就当没看到这句 ㅋㅋㅋㅌㅌㅎㅋ" }
        ],
        coda: {
          date: "12月25日 17:20",
          lines: [
            "树下面很吵。",
            "我说的话，只有她听见了。",
            "她点头的时候 我差点当场哭出来 ㅠㅠㅠㅠ",
            "这条我写在备忘录里了 以后每年都可以看 耶。"
          ],
          quote: "我喜欢你。"
        }
      },
      newYear: {
        dateName: "元旦",
        target: "2027-01-01",
        sendTime: "22:41",
        meetTime: "05:30",
        replies: [
          { time: "22:43", text: "是明天 不过不是晚上 是早上 耶" },
          { time: "22:43", text: "五点半 我在你楼下等你" },
          { time: "22:44", text: "人多的地方我不太行 想找个安静点的 ㅎㅎ" },
          { time: "22:44", text: "我带了热可可和暖宝宝 不会让你冷的" },
          { time: "22:45", text: "你只要下来就行 真的" },
          { time: "22:45", text: "……我已经开始紧张了 ㅋㅋㅋ" }
        ],
        coda: {
          date: "1月1日 07:46",
          lines: [
            "太阳出来的时候，我问了她今年的第一个问题。",
            "她没马上回答 我紧张得手都不知道放哪 ㅠㅠㅠㅠ",
            "然后她说「可以」。",
            "新的一年 第一个见到的人是她 耶。"
          ],
          quote: "今年我的身边可以有你吗。"
        }
      }
    },
    /*
     * 「不打开」分支：不翻他的手机，直接跳到那天晚上她自己的手机。
     * 每次进入都会随机抽一个 plans，再随机抽其中一个 ideas；
     * 聊天里的 {place} / {detail} / {extra} / {dateWord} / {whenWord} 会被替换成抽中的内容。
     * steps 里每一步都是一次玩家选择，choices 的 tone 决定最后那张日记卡上的那句话
     * （warm 温柔 / tease 打趣 / shy 害羞 / hesitant 犹豫）。
     */
    noOpen: {
      bridge: {
        lines: [
          "你把他的手机放回了长椅。",
          "他说「等我一下」的时候，好像有点失望。",
          "那天晚上回到房间，你自己的手机亮了一下。",
          "是韩志薰。"
        ]
      },
      // 聊天结束后他打来的那通电话：接听后播放 audio，caption 是他在电话里说的那句
      // 音频放在「音频」文件夹里；换文件时记得同步改这里
      call: {
        from: "志薰",
        kind: "KakaoTalk 语音通话",
        subtitle: "邀请你进行语音通话",
        againSubtitle: "又打来了",
        avatar: "pics/jihun-avatar.jpg",
        audio: "音频/辛苦了 晚安.m4a",
        caption: "辛苦了，晚安。",
        endingNote: "通话结束"
      },
      plans: [
        {
          id: "tomorrow",
          dateWord: "12月11号",
          whenWord: "明天",
          lockTime: "23:06",
          preview: "ㅇㅇ啊 睡了吗??",
          target: "2026-12-11",
          meetTime: "19:00",
          ideas: [
            { place: "가로수길那家一直想去的意面店", detail: "沿着汉江走一走", extra: "一条新围巾" },
            { place: "学校附近那家烤肉店", detail: "去清溪川看灯", extra: "一盒草莓蛋糕" }
          ],
          opening: [
            { time: "23:07", text: "ㅇㅇ啊 睡了吗??" },
            { time: "23:07", text: "没睡的话 陪我说两分钟话吧 ㅎㅎ" },
            { time: "23:08", text: "今天在汉江 我说去厕所" },
            { time: "23:08", text: "其实不是 我是去给自己做心理建设了 ㅋㅋㅋㅌㅌㅎㅋ" },
            { time: "23:09", text: "回来看到你在喂doori 话又咽回去了 ㅠㅠㅠㅠ" },
            { time: "23:09", text: "所以现在 隔着手机 我好像比较勇敢 耶" }
          ],
          steps: [
            {
              choices: [
                { text: "还没睡 怎么啦", tone: "warm", replies: ["好耶!!! 居然秒回", "那我就直说了 ㅎㅎ", "{whenWord} 你有空吗"] },
                { text: "两分钟？你每次都说两分钟 ㅋㅋ", tone: "tease", replies: ["ㅋㅋㅋㅌㅌㅎㅋ 被你发现了", "那这次真的两分钟", "…好吧 可能要五分钟", "{whenWord} 你有空吗"] },
                { text: "嗯 我在听", tone: "shy", replies: ["谢谢 ㅠㅠㅠㅠ", "你这么认真 我反而有点紧张了 ㅎㅎ", "{whenWord} 你有空吗"] },
                { text: "有点晚了 明天还要早起…", tone: "hesitant", replies: ["啊 对哦 对不起!!", "那我长话短说 ㅎㅎ", "{whenWord} 晚上 你有空吗"] }
              ]
            },
            {
              lead: [
                "我订了{place}",
                "你不是说过想去吗 我一直记着耶",
                "然后{detail} 我准备很久了 ㅎㅎ"
              ],
              choices: [
                { text: "你还记得我说过想去那里", tone: "warm", replies: ["当然记得!! 你说的时候眼睛都亮了", "我当天就写进备忘录了 ㅋㅋ", "所以 可以吗 {whenWord}"] },
                { text: "准备很久？比如什么", tone: "tease", replies: ["呀 这个是秘密 说了就没意思了 ㅋㅋㅋㅌㅌㅎㅋ", "只能告诉你 不是随便准备的 是很用心的那种!", "所以 {whenWord} 来不来 耶"] },
                { text: "你别搞很大阵仗 我会紧张的…", tone: "shy", replies: ["那我不搞很大阵仗 ㅎㅎ", "就我们两个人 安安静静的", "不过该准备的我还是会准备耶", "所以 {whenWord} 可以吗"] },
                { text: "我明天穿什么好…", tone: "hesitant", replies: ["穿暖一点!! 晚上江边很冷", "我带了{extra} 到时候给你", "所以 不用想太多 人来就行 ㅋㅋㅎㅋ"] }
              ]
            },
            {
              lead: [
                "其实我今天一直在想要不要跟你说",
                "姐姐说 稍微透点风的惊喜 才让人安心",
                "所以我现在 把风透给你一点点 ㅎㅎ",
                "{whenWord} 不只是吃饭 也不只是散步",
                "是我想认真和你待在一起的一天 耶"
              ],
              choices: [
                { text: "嗯 我也有点期待", tone: "warm", replies: ["真的吗!!! 你说了期待 我今天晚上睡不着了 ㅠㅠㅠㅠ", "那我要把{whenWord}准备得更好 耶"] },
                { text: "透风透成这样 已经不算惊喜了吧 ㅋㅋ", tone: "tease", replies: ["ㅋㅋㅋㅌㅌㅎㅋ 完了 被我透完了", "那…至少剩下的部分 我还是想留到{whenWord} 耶"] },
                { text: "你这样说我更紧张了…", tone: "shy", replies: ["我也是 我手都在抖 你看不到而已 ㅋㅋ", "但是我们一起紧张 好像也不错耶"] },
                { text: "我还没想好…", tone: "hesitant", replies: ["没关系 真的没关系", "{whenWord} 你只要来 其他的都交给我 ㅎㅎ", "不来也可以 我会等 ㅠㅠ"] }
              ]
            },
            {
              lead: [
                "最后一个问题 问完我就去睡 真的",
                "{whenWord} 可以当作…约会吗",
                "不是朋友那种 是我喜欢你那种 耶"
              ],
              choices: [
                { text: "好呀 约会", tone: "warm", replies: ["……", "我现在在原地转圈 ㅋㅋㅋㅌㅌㅎㅋ", "{whenWord}见 ㅇㅇ啊 我会很早到的!!", "晚安 ㅎㅎ"] },
                { text: "你先说清楚 是哪种约会", tone: "tease", replies: ["当然是 我喜欢你的那种 ㅎㅎ", "还要我说多少遍 我喜欢你 喜欢你 喜欢你 耶", "{whenWord}见!! 晚安 ㅋㅋ"] },
                { text: "…嗯。", tone: "shy", replies: ["嗯是答应了吗 我可以这样理解吗 ㅠㅠㅠㅠ", "那{whenWord}我要牵你的手 可以吗", "……不用回 我当作可以了 ㅋㅋ 晚安"] },
                { text: "让我再想想 可以吗", tone: "hesitant", replies: ["当然可以!! 慢慢想 我等你", "{whenWord}的位置我先留着 你不来也没关系", "但是 我有点希望你来 ㅎㅎ 晚安"] }
              ]
            }
          ],
          coda: {
            date: "12月10日 23:58",
            lines: [
              "她没打开我的手机。",
              "我准备了一整晚的台词，一句都没用上 ㅋㅋㅋ",
              "可是她答应{whenWord}见我的时候，我在房间里跳了一下。",
              "姐姐说得对，透一点风的惊喜，好像真的会让人安心。",
              "{dateWord}。这次换我等耶。"
            ],
            quotes: {
              warm: ["她说「好呀」的时候，我听见了自己的心跳。", "她答应得那么快，我反而有点想哭 ㅠㅠㅠㅠ"],
              tease: ["她嘴上嫌我，最后还是答应了。", "被拆穿了也没关系 反正她来了 耶"],
              shy: ["她回了一个「嗯」，我看了不止二十遍。", "原来一个「嗯」也可以让人睡不着。"],
              hesitant: ["她说再想想。那我就等到她想好。", "等多久都可以 我很有耐心的 真的 ㅎㅎ"]
            }
          }
        },
        {
          id: "eve",
          dateWord: "12月24号",
          whenWord: "平安夜",
          lockTime: "23:04",
          preview: "ㅇㅇ啊 今天谢谢你陪doori",
          target: "2026-12-24",
          meetTime: "19:00",
          ideas: [
            { place: "舞室后面那家小酒馆 二楼靠窗", detail: "去南山看灯", extra: "一条围巾" },
            { place: "我家附近那家汤饭店", detail: "去汉江看平安夜的灯", extra: "暖宝宝和热可可" }
          ],
          opening: [
            { time: "23:05", text: "ㅇㅇ啊 今天谢谢你陪doori" },
            { time: "23:05", text: "还有 谢谢你没打开我的手机 ㅋㅋㅋ" },
            { time: "23:06", text: "别问为什么 问就是里面有点丢人的东西 ㅋㅋㅌㅌㅎㅋ" },
            { time: "23:06", text: "不过也好 这样我就只能自己说了 耶" },
            { time: "23:07", text: "平安夜 你有安排吗" }
          ],
          steps: [
            {
              choices: [
                { text: "还没安排 怎么啦", tone: "warm", replies: ["好耶!!! 那我不客气了 ㅎㅎ", "我想约你 平安夜"] },
                { text: "你先说 是不是又想使唤我", tone: "tease", replies: ["ㅋㅋㅋㅌㅌㅎㅋ 不是使唤!!", "是很认真那种约", "平安夜 可以吗"] },
                { text: "平安夜…你怎么突然问这个", tone: "shy", replies: ["因为我想约你 ㅎㅎ", "想了很久了 真的", "平安夜 可以吗"] },
                { text: "平安夜店里可能会很忙…", tone: "hesitant", replies: ["啊 对 你在店里…", "那你几点下班 我去接你 ㅠㅠ", "晚一点也可以 真的!"] }
              ]
            },
            {
              lead: [
                "我订了{place}",
                "你不是说过想去吗 我一直记着耶",
                "然后{detail} 我准备很久了 ㅎㅎ"
              ],
              choices: [
                { text: "你还记得我说过想去那里", tone: "warm", replies: ["当然记得!! 你说的时候语气都不一样了", "我当天就写进备忘录了 ㅋㅋ", "所以 平安夜 可以吗"] },
                { text: "准备很久？我怎么一点都没发现", tone: "tease", replies: ["因为我藏得很好 耶", "本来想再藏久一点的", "但是看到你今天把手机还给我 我就藏不住了 ㅎㅎ"] },
                { text: "我有点紧张…那天人会不会很多", tone: "shy", replies: ["人多也没关系 你跟着我就行", "二楼靠窗 我订的是安静的位置", "其实我也有点紧张 ㅋㅋ"] },
                { text: "我还没想好穿什么…", tone: "hesitant", replies: ["穿暖一点!! 那天会很冷", "我准备了{extra} 到时候给你", "所以 不用想太多 人来就行 耶"] }
              ]
            },
            {
              lead: [
                "其实我从秋天开始就在想这天了",
                "想了很多版本 又全部推翻 ㅋㅋㅋ",
                "姐姐说 心意要自己说出口 才不算浪费",
                "所以我现在 说出口了"
              ],
              choices: [
                { text: "嗯 我听见了", tone: "warm", replies: ["谢谢 ㅠㅠㅠㅠ", "你这样说 我好像更有勇气了 耶", "那 平安夜见?"] },
                { text: "韩志薰 你今天怎么这么会说", tone: "tease", replies: ["ㅋㅋㅎㅋㅎ 我练了很久的!!", "结果真的说出口还是结巴了", "你听出来了没 我刚刚手都在抖"] },
                { text: "我…也有点想见你", tone: "shy", replies: ["!!!!!", "你这句话我要截图保存 耶", "平安夜 我会很早到的"] },
                { text: "再给我一点时间 好吗", tone: "hesitant", replies: ["好 当然好", "那我先不催你 ㅎㅎ", "但是平安夜的位置 我会一直留着"] }
              ]
            },
            {
              lead: [
                "最后一个问题 问完我就去睡觉 真的",
                "平安夜 可以和我一起过吗",
                "以 我喜欢你的人的身份 耶"
              ],
              choices: [
                { text: "好呀 一起过", tone: "warm", replies: ["……", "我现在在房间里转圈 ㅋㅋㅋㅌㅌㅎㅋ", "平安夜见 ㅇㅇ啊 晚安 ㅎㅎ"] },
                { text: "先说好 不许迟到", tone: "tease", replies: ["绝不迟到!! 我提前一个小时到 耶", "那你也不许放我鸽子 ㅠㅠ", "平安夜见 晚安 ㅎㅎ"] },
                { text: "…嗯", tone: "shy", replies: ["嗯是答应了吗 我可以这样想吗 ㅠㅠㅠㅠ", "那我平安夜要牵你的手 可以吗", "不用回我 我当作可以了 ㅋㅋ 晚安"] },
                { text: "我再想想 明天告诉你", tone: "hesitant", replies: ["好!! 我等你", "想多久都没关系 真的", "晚安 ㅎㅎ 做个好梦"] }
              ]
            }
          ],
          coda: {
            date: "12月10日 23:57",
            lines: [
              "她没打开我的手机。",
              "我以为计划全泡汤了。",
              "结果我自己把话说了。她答应平安夜和我一起过。",
              "放下手机我在阳台站了很久 一点都不冷 耶。"
            ],
            quotes: {
              warm: ["她说好呀的时候，比南山所有的灯都亮。", "原来最亮的那天 可以自己造出来。"],
              tease: ["她让我不许迟到。那我提前一个小时。", "被她管着的感觉 好像也不错 ㅋㅋ"],
              shy: ["她只回了一个「嗯」。我盯着屏幕笑了很久。", "一个「嗯」就够我过完这个冬天了。"],
              hesitant: ["她说再想想。那我就等。", "平安夜的位置我会一直留着 真的。"]
            }
          }
        },
        {
          id: "christmas",
          dateWord: "12月25号",
          whenWord: "圣诞那天",
          lockTime: "23:08",
          preview: "ㅇㅇ啊 圣诞那天你有空吗",
          target: "2026-12-25",
          meetTime: "16:00",
          ideas: [
            { place: "百货正门那棵大树下面", detail: "去看一场小型live", extra: "一个真的礼物" },
            { place: "剧场旁边那家咖啡店", detail: "去看圣诞档的音乐剧", extra: "一封手写的信" }
          ],
          opening: [
            { time: "23:09", text: "ㅇㅇ啊 今天在汉江 我其实一直想说来着" },
            { time: "23:09", text: "但是doori一直往我这边拱 我就忘了 ㅋㅋㅋ" },
            { time: "23:10", text: "回家才想起来 然后懊恼到现在 ㅠㅠㅠㅠ" },
            { time: "23:10", text: "所以 趁现在还没到十二点 我问你" },
            { time: "23:11", text: "圣诞那天 你有空吗" }
          ],
          steps: [
            {
              choices: [
                { text: "有呀 怎么了", tone: "warm", replies: ["好耶!!!", "那我就不绕弯子了 ㅎㅎ", "我想约你 圣诞那天"] },
                { text: "你有话就直说 别又去厕所 ㅋㅋ", tone: "tease", replies: ["ㅋㅋㅋㅌㅌㅎㅋ 被嘲笑了", "好 我直说", "圣诞那天 我想约你"] },
                { text: "圣诞…我还没想好要做什么", tone: "shy", replies: ["那正好 我已经想好了 耶", "你只要把那天留给我", "可以吗 ㅎㅎ"] },
                { text: "圣诞店里可能会很忙", tone: "hesitant", replies: ["啊…这样", "那你下班之后呢 我可以等 ㅠㅠ", "多晚都可以 真的!"] }
              ]
            },
            {
              lead: [
                "那天我约了{place}",
                "然后{detail}",
                "还有{extra} 这个不能提前说太多 ㅎㅎ"
              ],
              choices: [
                { text: "听起来好棒", tone: "warm", replies: ["真的吗!! 我好开心 耶", "那就这样定了", "我会准备得很好很好的 ㅎㅎ"] },
                { text: "你是不是又准备了很多 然后自己先紧张", tone: "tease", replies: ["……被你说中了 ㅋㅋㅎㅋㅎ", "我从上周就开始紧张了", "但是你答应的话 我就不紧张了 耶"] },
                { text: "会不会太隆重了…", tone: "shy", replies: ["不会!! 一点都不隆重", "就是我想认真对待这一天", "你只要来 就已经很好了 ㅎㅎ"] },
                { text: "那天人应该很多吧", tone: "hesitant", replies: ["嗯 会很多", "但是我会一直牵着你 不会走散的", "所以 可以吗 ㅎㅎ"] }
              ]
            },
            {
              lead: [
                "其实 圣诞对我来说一直是很普通的一天",
                "以前就是和姐姐吃个饭 然后回家",
                "但是今年不一样了",
                "今年我想和一个人一起过 想被她记住 耶"
              ],
              choices: [
                { text: "那就一起过吧", tone: "warm", replies: ["!!!! 你说了一起过", "我现在笑得有点傻 ㅋㅋ", "圣诞那天 我会很早到的 耶"] },
                { text: "被我记住这件事 你压力会不会很大", tone: "tease", replies: ["有点!! 但是我很期待 ㅋㅋㅋ", "我会努力让你记住的", "毕竟我准备了{extra} 耶"] },
                { text: "我也想被你记住…", tone: "shy", replies: ["那我们扯平了 ㅎㅎ", "不对 是我赚了", "圣诞那天 我有话想当面说 ㅠㅠ"] },
                { text: "我还不确定那天能不能去…", tone: "hesitant", replies: ["没关系 真的", "你先忙 我等你消息", "但是我会一直期待 ㅎㅎ"] }
              ]
            },
            {
              lead: [
                "最后一个问题",
                "圣诞那天 可以和我在一起吗",
                "不是朋友那种 是我想牵你手的那种 耶"
              ],
              choices: [
                { text: "可以", tone: "warm", replies: ["……", "我现在说不出话了 ㅋㅋㅋ", "圣诞见 ㅇㅇ啊 我会带{extra} 晚安 ㅎㅎ"] },
                { text: "牵手要经过我同意才行", tone: "tease", replies: ["好 那我现在申请 ㅋㅋㅎㅋ", "可以吗 可以吗 可以吗", "……那我到时候再问一次 耶 晚安"] },
                { text: "…好", tone: "shy", replies: ["好!!! 我听见了 ㅠㅠㅠㅠ", "圣诞那天 我会好好说一遍的", "晚安 ㅎㅎ 做个好梦"] },
                { text: "给我一点时间 好吗", tone: "hesitant", replies: ["好 我等你", "圣诞还早 你慢慢想 真的", "晚安 ㅎㅎ"] }
              ]
            }
          ],
          coda: {
            date: "12月10日 23:59",
            lines: [
              "她没打开我的手机。",
              "我准备的那些东西 好像都用不上了。",
              "可是她说可以的时候 我一点都不觉得可惜。",
              "圣诞快点来吧。我已经等不及了 耶。"
            ],
            quotes: {
              warm: ["她说可以。我在房间里笑出了声。", "原来最好的圣诞礼物 是她答应我。"],
              tease: ["她让我先申请。那我申请一辈子 可以吗 ㅋㅋ", "被她为难的感觉 怎么就那么好 耶"],
              shy: ["她只回了一个「好」。我听了三遍。", "今年圣诞 终于不是普通的一天了。"],
              hesitant: ["她说再想想。没关系 圣诞还早。", "我会等 等到她愿意为止 真的。"]
            }
          }
        },
        {
          id: "newYear",
          dateWord: "1月1号",
          whenWord: "元旦",
          lockTime: "23:10",
          preview: "ㅇㅇ啊 还没睡吧??",
          target: "2027-01-01",
          meetTime: "05:30",
          ideas: [
            { place: "你家楼下", detail: "去汉江看今年的第一个日出", extra: "热可可和暖宝宝" },
            { place: "南山塔下面", detail: "去看新年第一场日出", extra: "一条手织的围巾" }
          ],
          opening: [
            { time: "23:11", text: "ㅇㅇ啊 还没睡吧??" },
            { time: "23:11", text: "今天把手机留给你的时候 我其实有点期待" },
            { time: "23:12", text: "期待你会不会打开 ㅋㅋㅋ" },
            { time: "23:12", text: "结果你没打开 我居然有点高兴 耶" },
            { time: "23:13", text: "那样的话 就只能我亲口说了" },
            { time: "23:13", text: "元旦那天 你有空吗" }
          ],
          steps: [
            {
              choices: [
                { text: "元旦？有空的", tone: "warm", replies: ["好耶!!!", "那我先说好 那天会很早", "你会不会起不来 ㅋㅋ"] },
                { text: "这么晚问 是不是预谋很久了", tone: "tease", replies: ["ㅋㅋㅋㅌㅌㅎㅋ 被发现了", "从秋天开始预谋的 耶", "所以 元旦有空吗"] },
                { text: "元旦…你怎么会想到那天", tone: "shy", replies: ["因为是一年的第一天 ㅎㅎ", "我想第一个见到你", "可以吗"] },
                { text: "元旦可能会和家里一起…", tone: "hesitant", replies: ["啊 对哦", "那…那前一天晚上呢 ㅠㅠ", "或者你什么时候方便 我都行 真的"] }
              ]
            },
            {
              lead: [
                "那天早上五点半 我会在{place}等你",
                "然后{detail}",
                "我还准备了{extra} 不会让你冷的 耶"
              ],
              choices: [
                { text: "五点半…好早", tone: "warm", replies: ["早才有意义 ㅎㅎ", "而且我想和你一起看太阳出来", "所以 起得来吗 耶"] },
                { text: "万一我起不来呢", tone: "tease", replies: ["那我就等到你起来 ㅋㅋ", "等到太阳下山也行", "……不过还是希望你来 ㅠㅠ"] },
                { text: "第一次一起看日出 有点紧张", tone: "shy", replies: ["我也是 真的", "但是紧张好像也挺好的 ㅎㅎ", "我会先到 给你占个最好的位置 耶"] },
                { text: "太早了 我怕我状态不好", tone: "hesitant", replies: ["没关系 状态不好也好看", "……啊 我是不是说太直白了 ㅋㅋ", "你人来就行 真的"] }
              ]
            },
            {
              lead: [
                "其实我一直在想 怎么开口才不算唐突",
                "想了很久 想到今天都要过完了",
                "后来发现 好像怎么说都会紧张",
                "那就干脆不准备了 把想说的直接说 耶"
              ],
              choices: [
                { text: "你说吧 我听着", tone: "warm", replies: ["谢谢 ㅠㅠㅠㅠ", "你这么一说 我又不知道从哪开始了 ㅋㅋ", "那就从最简单的开始吧"] },
                { text: "不准备反而更让人期待了", tone: "tease", replies: ["那我更要好好说了 ㅎㅎ", "虽然可能会结巴", "你别笑我 真的"] },
                { text: "我好像知道你要说什么…", tone: "shy", replies: ["!! 你知道?", "那我还是要说完 耶", "因为这句话 我想亲口说"] },
                { text: "你不用勉强自己", tone: "hesitant", replies: ["不是勉强 真的不是", "是我自己想说的", "想了很久的那种想 ㅎㅎ"] }
              ]
            },
            {
              lead: [
                "今年最后一天 我想和你一起过",
                "明年第一天 我想第一个见到你",
                "今年我的身边 可以有你吗"
              ],
              choices: [
                { text: "可以 我也想", tone: "warm", replies: ["……", "我现在在房间原地跳 ㅋㅋㅋㅌㅌㅎㅋ", "元旦见 ㅇㅇ啊 晚安 耶"] },
                { text: "先看你明天能不能起得来 ㅋㅋ", tone: "tease", replies: ["我一定起得来!! 我定十个闹钟", "那说好了 元旦见 耶", "晚安 ㅎㅎ"] },
                { text: "…嗯", tone: "shy", replies: ["嗯是答应了吗 ㅠㅠㅠㅠ", "那我元旦要牵你的手", "可以吗 不用回答 我当作可以了 ㅋㅋ 晚安"] },
                { text: "让我想一想 好吗", tone: "hesitant", replies: ["好 当然好", "今年还有几天 我等你", "晚安 ㅎㅎ 想你"] }
              ]
            }
          ],
          coda: {
            date: "12月10日 23:59",
            lines: [
              "她没打开我的手机。",
              "没关系 我还是把想说的都说了。",
              "她答应了 明年第一天第一个见到我。",
              "今年的最后一天 好像突然有了盼头 耶。"
            ],
            quotes: {
              warm: ["她说「可以」。我把这两个字在心里放了一整晚。", "明年第一天 会是很好的一年。"],
              tease: ["她让我先证明起得来。那我定十个闹钟 耶", "被她这样一说 我更睡不着了 ㅋㅋ"],
              shy: ["她只回了一个「嗯」。我抱着手机笑了半天。", "原来「嗯」也可以是一句情话。"],
              hesitant: ["她说再想想。那我就等到今年结束。", "反正新的一年 我最先想见的人 不会变。"]
            }
          }
        }
      ]
    }
  }
};

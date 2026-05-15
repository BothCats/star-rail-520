const photo = (file, alt) => ({ src: `photos/${file}`, alt });

const stations = [
  {
    id: "s01",
    order: "第 1 站",
    date: "2026.4.14",
    title: "五棵松初见站",
    lead: "一条临时改道的1号线，把八宝山和玉泉路轻轻推近；一顿晚饭，把两个原本陌生的人接进同一条星轨。",
    story: "4月14日下午，蜡烛先生还在雁栖湖旁边的西山步道团建。16:15，秋秋发来正式邀约；17:40，两个人在五棵松地铁站B口见面。她穿着蓝色衣服，先一起吃了大米冰激凌，又在五棵松下沉广场转了一圈，最后坐进了“能吃一头牛·鲜切牛肉自助火锅”。饭后，秋秋带蜡烛先生去了她常来的“The Highlander”，小酒吧很安静，两个人从饮品聊到“刀盾梗”，也聊到了后来常玩的“欢乐球球”。",
    tags: ["初见", "蓝色衣服", "The Highlander", "刀盾", "欢乐球球"],
    details: ["秋秋请了酒吧饮品，还很坚持自己付款", "“教父”、菊花订制特调、“热情似火”，都留在这一晚", "蜡烛先生没戴眼镜，秋秋说想看他戴眼镜的样子"],
    images: [
      photo("s01_metro_exit.webp", "4月14日晚第一次见面五棵松地铁口"),
      photo("s01_metro_inside.webp", "4月14日晚第一次见面五棵松地铁内"),
      photo("s01_icecream.webp", "4月14日俩人的野人先生冰淇凌"),
      photo("s01_hotpot.webp", "4月14日能吃一头牛·鲜切牛肉自助火锅"),
      photo("s01_drinks.webp", "4月14日晚对饮"),
      photo("s01_giftcard.webp", "4月14日小酒吧给的礼品卡")
    ]
  },
  {
    id: "s02",
    order: "第 2 站",
    date: "2026.4.17",
    title: "玉泉路食堂站",
    lead: "第二次见面发生在秋秋的学校食堂，晚饭、有好吃的、党会、游泳卡，从此把日常感一点点铺开。",
    story: "4月16日，两个人约好第二天去食堂吃饭。4月17日18:26，蜡烛先生带着公司买来的好吃的去见秋秋。那天吃得很多，也聊得很密。秋秋发现晗晗表情包真的很多，于是封他为“古希腊掌管表情包的神”。两个人还发现，竟然都在“中铁建”办了游泳卡，这个巧合也太过分了。",
    tags: ["食堂", "有回必应", "表情包之神", "中铁建", "深水证"],
    details: ["从这天起，秋秋经常开始吃早餐，追赶早起的晗晗", "晗晗分享了好多下饭剧，虽然很可能被后来的聊天淹没了", "睡前打趣，也慢慢变成了固定的小日常"],
    artifact: {
      title: "食堂小票",
      lines: ["到站时间：18:26", "携带物资：公司好吃的", "隐藏成就：同在中铁建办卡", "新称号：表情包之神"]
    }
  },
  {
    id: "s03",
    order: "第 3 站",
    date: "2026.4.19",
    title: "欧也咖啡站",
    lead: "第一次白天面对面畅聊，咖啡、点心、小游戏，还有一通长到2小时8分16秒的电话。",
    story: "在“欧也 Wiggly Jiggly's”精品咖啡店，秋秋趁晗晗去上厕所时结了咖啡账；后来去“蔡澜点心”，晗晗结了饭账。两个人在店里玩“动物园、蔬菜园、水果园”，秋秋虽然被放水很多次，还是输掉了。店员送的小礼品，也像这一站的小小彩蛋。当天晚上，第一次微信电话畅聊，信号持续2小时8分16秒。",
    tags: ["欧也", "蔡澜点心", "三园游戏", "2h8m16s"],
    details: ["一杯热美式，一杯带酒精和奶油摩斯盖顶的招牌咖啡", "两个人一起给店铺写了好评", "白天面对面聊天，让关系更稳地往前走了一格"],
    images: [
      photo("s03_xiaojiu.webp", "4月19日周六小啾照片"),
      photo("s03_cafe.webp", "4月19日宝藏咖啡厅欧也"),
      photo("s03_coffee.webp", "4月19日我们喝的咖啡"),
      photo("s03_dim_sum.webp", "4月19日蔡澜点心餐厅一角"),
      photo("s03_game_lost.webp", "4月19日饭后游戏玩输的小啾")
    ]
  },
  {
    id: "s04",
    order: "第 4 站",
    date: "2026.4.20",
    title: "阳光公园站",
    lead: "中科院贴纸被好好收起来，晚上和芒果女士在阳光公园玩了很久。",
    story: "秋秋送了晗晗两张中科院贴纸。它们没有被随便贴掉，而是一直被当作收藏留下。晚上两个人去了阳光公园，玩了很久，也被蚊子发了红包。小小的贴纸和小小的红包，都很像这段关系刚开始时的生活质感。",
    tags: ["中科院贴纸", "阳光公园", "蚊子红包"],
    details: ["贴纸没有贴上，因为舍不得", "这不是照片空白，而是被收进抽屉里的纪念物", "芒果女士这个称呼，也在日常里越来越顺口"],
    artifact: {
      title: "收藏盒",
      lines: ["物品：中科院贴纸 ×2", "状态：未贴，收藏中", "夜间事件：阳光公园散步", "附加印记：蚊子红包"]
    }
  },
  {
    id: "s05",
    order: "第 5 站",
    date: "2026.4.21-4.22",
    title: "解决世界站",
    lead: "第一次认真处理小矛盾之后，两个人没有把矛头指向彼此，而是一起把问题放到桌面上。",
    story: "4月21日晚，关于安全感和承诺，两个人有了一次小矛盾。4月22日见面后认真详谈，关系也因此更进一步。那句后来很重要的话，就是在这一站亮起来的：“我们的目标要解决世界，而不是解决对方。”",
    tags: ["安全感", "承诺", "认真沟通", "解决世界"],
    details: ["晗晗觉得会喝酒的女孩儿很酷", "秋秋说以后会超乖的", "这一站不是波折，是两个人学会一起面对问题"],
    artifact: {
      title: "获胜宣言",
      lines: ["“我们不解决对方”", "“我们一起解决世界”", "认真说清楚", "认真往前走"]
    },
    featured: true
  },
  {
    id: "s06",
    order: "第 6 站",
    date: "2026.4.23",
    title: "电车初骑站",
    lead: "秋秋第一次骑电车，星轨之外，多了一条轻快的小支线。",
    story: "这是一张很有生活感的照片。不是正式摆拍，也不是盛大事件，但它记录了一个很具体的第一次。关系里很多珍贵的东西，就是这样突然从普通的一天里冒出来。",
    tags: ["第一次骑电车", "支线任务", "生活感"],
    details: ["第一次总要被记下来", "电车支线并入1号线星轨", "普通日子也可以发光"],
    images: [photo("s04_ebike.webp", "4月23日她第一次骑电车")]
  },
  {
    id: "s07",
    order: "第 7 站",
    date: "2026.4.25",
    title: "第一次合照站",
    lead: "第一张合照，是星轨列车的第一张正式双人车票。",
    story: "4月25日，两个人第一次拍了合照。照片好看，不只是因为画面好看，也因为从这一刻开始，“我们”有了可以被反复打开、反复确认的具体样子。",
    tags: ["第一次合照", "美美", "双人车票"],
    details: ["从聊天记录走到同一张照片里", "照片以后会越来越多，但第一张永远特别", "这一站适合多停留几秒"],
    images: [photo("s05_first_photo.webp", "4月25日第一次美美合照")]
  },
  {
    id: "s08",
    order: "第 8 站",
    date: "2026.4.26",
    title: "陶然亭站",
    lead: "公园、手合照、豆包视频通话、肉夹馍和电影，把一天填得满满当当。",
    story: "两个人一起出发逛陶然亭公园，拍了很多好看的照片。后来发现“豆包App”视频通话真的很好用，又一起买了肉夹馍，去看太空科幻电影《挽救计划》。这一站像一整天被阳光铺开的相册。",
    tags: ["陶然亭", "手合照", "豆包", "肉夹馍", "挽救计划"],
    details: ["电梯上也值得拍", "手合照很适合作为这一站的小封面", "小芒果、小蛋糕、蜡烛先生，都在照片里发光"],
    images: [
      photo("s06_elevator.webp", "4月26日出发去陶然亭公园的电梯上"),
      photo("s06_hands.webp", "4月26日陶然亭公园手合照"),
      photo("s06_mango.webp", "4月26日陶然亭公园小芒果女士美美照"),
      photo("s06_cake.webp", "4月26日陶然亭公园小蛋糕美美照"),
      photo("s06_candle.webp", "4月26日陶然亭公园蜡烛先生美美照")
    ]
  },
  {
    id: "s09",
    order: "第 9 站",
    date: "2026.4.27",
    title: "电话粥站",
    lead: "电话粥煲了很久，屏幕截图留下了芒果女士的好多种小表情。",
    story: "坏笑、好玩、皱眉，这些截图不只是可爱，也说明两个人已经可以把夜晚很自然地交给彼此。聊天不是为了完成任务，是因为真的还想再多说一会儿。",
    tags: ["电话粥", "坏笑", "好玩", "皱眉"],
    details: ["截图是这一站的照片", "每一种表情都是一个小星相", "电话粥后来也成了稳定日常"],
    images: [
      photo("s07_smirk.webp", "4月27日电话粥坏笑芒果女士"),
      photo("s07_fun.webp", "4月27日电话粥好玩芒果女士"),
      photo("s07_frown.webp", "4月27日电话粥皱眉芒果女士")
    ]
  },
  {
    id: "s10",
    order: "第 10 站",
    date: "2026.4.28",
    title: "雏菊站",
    lead: "第一束花是白色雏菊。那天还有烧鸟、烤串、五子棋，以及一次手机丢丢又找回的小插曲。",
    story: "晗晗第一次送花花，送的是白色雏菊。后来两个人走路出去吃饭，吃烧鸟和烤串。五子棋怒输六把，回程时手机落在网约车上，司机不太想回来，最后转了200才跑回来。秋秋陪晗晗在教室里等了好久，钱也不收。",
    tags: ["白色雏菊", "烧鸟", "五子棋", "手机找回"],
    details: ["第一束花要好好记得", "输赢和等待都变成了故事", "秋秋不收那200，温柔也很倔强"],
    images: [
      photo("s08_daisy.webp", "4月28日第一次送花花雏菊"),
      photo("s08_yakitori.webp", "4月28日吃烧鸟")
    ]
  },
  {
    id: "s11",
    order: "第 11 站",
    date: "2026.4.29",
    title: "火警铃站",
    lead: "酸奶成功遗落在火警铃上，这种离谱的小事，反而最像两个人的专属回忆。",
    story: "晚上一起吃饭后，酸奶出现在了一个非常不应该出现的位置。火警铃旁边的那一刻，不一定浪漫，但一定很“我们”。很多年以后再看到这张照片，应该还是会笑出来。",
    tags: ["酸奶", "火警铃", "离谱但可爱"],
    details: ["物理定律短暂失效", "照片证据确凿", "这一站适合归档到“只有我们懂”"],
    images: [photo("s09_yogurt_fire_alarm.webp", "4月29号酸奶遗落在火警铃上")]
  },
  {
    id: "s12",
    order: "第 12 站",
    date: "2026.5.4",
    title: "山西野山站",
    lead: "劳动节各回各家，山西野山的13公里也被分享进了两个人的频道里。",
    story: "晗晗和家人去山西徒步13公里，把山里的照片分享给秋秋。杏花、山路、太阳和一点点晒黑，都说明即使没有见面，生活也还是会自然地流向对方。",
    tags: ["山西", "13公里", "杏花", "分享"],
    details: ["各回各家，也保持联系", "山中照片变成远程同行", "晒黑一点也算劳动节印记"],
    images: [
      photo("s10_hike.webp", "5月4日山西野山13公里环穿照片"),
      photo("s10_apricot.webp", "5月4日山西野山杏花")
    ]
  },
  {
    id: "s13",
    order: "第 13 站",
    date: "2026.5.5",
    title: "熹舍站",
    lead: "这不是普通的一顿火锅，而是晗晗把自己很认真珍藏的小店，带秋秋一起走进去。",
    story: "5月5日回到北京后，两个人又在学校门口见面。秋秋带来了无糖饮料和山东青岛啤酒，晗晗带来了河北定州焖子，也送出了精挑细选的白水牛角梳。晚上去了“熹舍·和牛自助火锅”。以前这是晗晗一个人常去的小店，现在是两个人啦。",
    tags: ["熹舍·和牛自助火锅", "青岛啤酒", "定州焖子", "白水牛角梳", "重要的人"],
    details: ["这家小店从来没带其他人去过", "宽齿、有柄、无柄，礼物挑了很久", "《寒战1994》看了，但好像又没完全看"],
    featured: true,
    images: [
      photo("s11_carwash.webp", "5月5日小车清洗"),
      photo("s11_combs.webp", "5月5日送给小秋秋的金字和秋字白水牛角梳"),
      photo("s14_beer.webp", "秋秋带来的青岛啤酒"),
      photo("s13_xishe_menu.webp", "熹舍·和牛火锅自助菜单")
    ]
  },
  {
    id: "s14",
    order: "第 14 站",
    date: "2026.5.6",
    title: "接下班站",
    lead: "秋秋第一次来到晗晗单位附近接他下班，工作日的傍晚也因此变得很亮。",
    story: "两个人在麻辣烫小店吃晚饭，回家路上走了很久，再坐地铁回去。路上有秋秋买的樱桃，也有晗晗买的绿箭口香糖。划拳输了好多次，巴旦木也被送到晗晗手里。",
    tags: ["接下班", "麻辣烫", "樱桃", "绿箭", "巴旦木"],
    details: ["不是周末也能见面，是一种很踏实的靠近", "一边走路一边吃东西，普通但很甜", "秋秋把工作日傍晚变成了约会时间"],
    artifact: {
      title: "下班路线卡",
      lines: ["起点：南礼士路附近", "晚饭：麻辣烫小店", "路上：樱桃 + 绿箭", "抵达物资：巴旦木"]
    }
  },
  {
    id: "s15",
    order: "第 15 站",
    date: "2026.5.7",
    title: "派大星站",
    lead: "视频通话里，秋秋认识了派大星先生。晗晗的小世界，又被秋秋认识了一点。",
    story: "一个玩偶被介绍给另一个人，其实是很生活化的信任。它说明两个人分享的不只是约会地点，也包括房间里的角落、平时陪伴自己的小物件。",
    tags: ["视频通话", "派大星先生", "小世界"],
    details: ["派大星先生正式进入星轨档案", "日常角落被看见，也是一种靠近", "视频通话继续承担远程陪伴功能"],
    images: [photo("s12_patrick.webp", "5月7号她认识了我的派大星先生")]
  },
  {
    id: "s16",
    order: "第 16 站",
    date: "2026.5.9",
    title: "小屋站",
    lead: "秋秋第一次来到晗晗的小屋。认真打扫、热乎晚饭和零食冰箱，都在表达欢迎。",
    story: "那天上午晗晗去医院看皮肤科，医生开了很多药。下午回家后，他把屋子里里外外打扫干净：门窗、马桶、地板、洗漱台、床单、书桌、柜台等等等...晚上秋秋来了，两个人吃热的酸汤牛肉水饺，看《哆啦A梦：大雄的恐龙》。小屋从此不只是一个人的临时驻扎点。",
    tags: ["第一次来小屋", "认真打扫", "酸汤水饺", "哆啦A梦"],
    details: ["不让秋秋吃凉的和寒性食物，因为担心她身体不舒服", "零食填满冰箱，是晗晗的欢迎方式", "小牙刷和小牙缸属于日常，不属于满月礼物"],
    images: [photo("s15_toothbrush.webp", "我俩的小牙刷")],
    artifact: {
      title: "小屋准备清单",
      lines: ["门窗、地板、洗漱台", "床单、书桌、柜台", "热的酸汤牛肉水饺", "零食填满冰箱"]
    }
  },
  {
    id: "s17",
    order: "第 17 站",
    date: "2026.5.10-5.12",
    title: "日常照顾站",
    lead: "椰子蛋、取药、抹药药、西北风味，都是两个人把对方放进日常的方式。",
    story: "5月10日早晨，晗晗做了一个“椰子蛋”：去掉外壳，留下完整光滑的椰肉和椰子水。后来他去医院取代煎的中药。5月11日晚上，秋秋帮晗晗在后背够不到的地方抹药；最近每晚都会帮忙。5月12日，两个人又解锁了“西北风味”餐厅。",
    tags: ["椰子蛋", "中药", "抹药药", "西北风味"],
    details: ["照顾不是口号，是每天一点点做出来", "秋秋帮忙抹药药，晗晗真的很开心", "解锁新餐厅，也是日常地图继续扩张"],
    images: [
      photo("s14_alcohol_lamp.webp", "5月10号第一次在中西医结合医院见到酒精灯"),
      photo("s14_snacks.webp", "5月13日我带的小零食")
    ]
  },
  {
    id: "s18",
    order: "第 18 站",
    date: "2026.5.13",
    title: "发言星光站",
    lead: "秋秋作为论坛第一个发言人发言，认真、厉害，也闪闪发光。",
    story: "秋秋参加了第一届语言与科学交叉研究专题论坛，并作为第一个发言人，发表了关于实验研究文章图形摘要的研究。晚上因为在宿舍不方便说话，于是秋秋打字，晗晗发语音，两个人依然无缝衔接。照片撤下了，但这份骄傲要留下。",
    tags: ["第一发言人", "好棒棒", "无缝衔接", "语音和打字"],
    details: ["专业认真是一种很稳定的光", "晗晗是真的为秋秋骄傲", "即使不能说话，也能把电话打得很顺"],
    artifact: {
      title: "发言记录",
      lines: ["身份：第一位发言人", "主题：graphical abstracts", "通话方式：她打字，他语音", "评价：真的好棒棒"]
    }
  },
  {
    id: "s19",
    order: "第 19 站",
    date: "2026.5.15",
    title: "满月站",
    lead: "31天整，满月礼物是一支认真挑选的天蓝色钢笔。",
    story: "晗晗准备送给秋秋 Platinum 白金 PNS-5000，M尖0.5mm，天蓝色，还有真空吸墨器和百乐蓝色墨水。据说这支钢笔特别耐干，盖好放一个月也能立刻出水。选它，不只是因为好用，也是因为秋秋喜欢浅蓝色，因为写字、读博、研究和表达都属于她闪闪发光的世界。",
    tags: ["31天", "天蓝钢笔", "浅蓝色", "认真挑选"],
    details: ["小牙刷已经放回日常站", "满月站留给这支钢笔和它代表的心意", "我们会互相为了对方而改变"],
    pendingPhoto: {
      title: "钢笔照片预留位",
      text: "等天蓝色钢笔到手后，这里可以替换成正式照片。先把位置留好，心意先到站。"
    },
    artifact: {
      title: "满月礼物清单",
      lines: ["Platinum PNS-5000", "M尖 0.5mm · 天蓝色", "真空吸墨器", "百乐蓝色墨水"]
    },
    featured: true
  }
];

const randomMemories = [
  ["刀盾梗", "从 The Highlander 开始，一个玩笑一直开到了今天。"],
  ["表情包之神", "古希腊掌管表情包的神，正式上岗。"],
  ["欢乐球球", "秋秋说，晗晗是她认识的人里唯一一个玩这个小程序还很厉害的人。"],
  ["三园游戏", "动物园、蔬菜园、水果园，放水很多次也没有阻止胜负出现。"],
  ["解决世界", "“我们的目标要解决世界，而不是解决对方。”"],
  ["酸奶火警铃", "酸奶被放到火警铃上，这件事确实需要被星轨档案收录。"],
  ["青岛啤酒和定州焖子", "家乡特产互相抵达，是很认真也很可爱的交换。"],
  ["樱桃和绿箭", "下班路上一边走一边吃，工作日傍晚也能很甜。"],
  ["抹药药", "有些后背够不到的地方，后来有人会帮忙。"],
  ["派大星先生", "一个玩偶被介绍出去，小世界就多开了一扇窗。"],
  ["小牙刷", "它不放在满月站，它是日常站的证据。"],
  ["秋秋发言", "第一位发言人，真的好棒棒。"]
];

const herNames = [
  ["小啾", "很轻、很亲近的专属称呼"],
  ["小蛋糕", "甜甜的，也很适合美美照片"],
  ["芒果女士", "明亮、可爱、带一点热带水果气息"],
  ["秋秋", "最常被认真叫出的名字"],
  ["无情铁手", "专属超能力，威力不小"]
];

const hisNames = [
  ["蜡烛先生", "内心是红色，点燃后很明亮"],
  ["粑粑", "两个人之间幼稚但快乐的称呼"],
  ["十阿哥", "偶尔出现的特别封号"],
  ["表情包之神", "库存充足，掌管聊天气氛"]
];

const tipIcons = ["✨", "🍬", "💌", "🌙", "🚇", "🍒", "🫶"];

const stationList = document.querySelector("#stationList");
const railNav = document.querySelector("#railNav");
const stationBadge = document.querySelector("#stationBadge");
const dialog = document.querySelector("#photoDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogCaption = document.querySelector("#dialogCaption");
let currentPageIndex = 0;

function renderStations() {
  stationList.innerHTML = stations.map((station) => {
    const photos = station.images?.length
      ? `<div class="photo-strip ${station.images.length === 1 ? "single" : ""}">
          ${station.images.map((image) => `
            <button type="button" class="photo-button" data-src="${image.src}" data-alt="${image.alt}">
              <img src="${image.src}" alt="${image.alt}" loading="lazy">
            </button>
          `).join("")}
        </div>`
      : "";

    const artifact = station.artifact
      ? `<article class="memory-artifact">
          <span>MEMORY</span>
          <strong>${station.artifact.title}</strong>
          ${station.artifact.lines.map((line) => `<p>${line}</p>`).join("")}
        </article>`
      : "";

    const pendingPhoto = station.pendingPhoto
      ? `<article class="pending-photo">
          <span>PHOTO SLOT</span>
          <strong>${station.pendingPhoto.title}</strong>
          <p>${station.pendingPhoto.text}</p>
        </article>`
      : "";

    return `
      <section class="screen station-page ${station.featured ? "featured" : ""}" id="${station.id}" data-nav-title="${station.title}">
        <article class="station-card">
          <div class="station-head">
            <span class="station-kicker">${station.order} · ${station.date}</span>
            <h2>${station.title}</h2>
            <p>${station.lead}</p>
          </div>
          <div class="station-content">
          <div class="station-media">${photos}${pendingPhoto}${artifact}</div>
          <div class="station-copy">
            <p>${station.story}</p>
              <div class="detail-list">${station.details.map((detail, index) => `<span>${tipIcons[index % tipIcons.length]} ${detail}</span>`).join("")}</div>
              <div class="tags">${station.tags.map((tag) => `<span>#${tag}</span>`).join("")}</div>
            </div>
          </div>
        </article>
      </section>
    `;
  }).join("");
}

function renderNames() {
  const render = ([name, note]) => `<button type="button"><strong>${name}</strong><small>${note}</small></button>`;
  document.querySelector("#herNames").innerHTML = herNames.map(render).join("");
  document.querySelector("#hisNames").innerHTML = hisNames.map(render).join("");
}

function allPages() {
  return [...document.querySelectorAll("[data-nav-title]")];
}

function renderRailNav() {
  railNav.innerHTML = allPages().map((page, index) => (
    `<a href="#${page.id}" aria-label="${page.dataset.navTitle}" title="${page.dataset.navTitle}" data-index="${index}"></a>`
  )).join("");
}

function updateActivePage(page) {
  const pages = allPages();
  currentPageIndex = pages.indexOf(page);
  const title = page.dataset.navTitle || "星轨站";
  stationBadge.querySelector("strong").textContent = title;
  stationBadge.querySelector("small").textContent = currentPageIndex <= 2 ? "当前页面" : "当前停靠";

  railNav.querySelectorAll("a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${page.id}`);
  });
}

function bindObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      updateActivePage(entry.target);
    });
  }, { threshold: 0.58 });

  allPages().forEach((page) => observer.observe(page));
}

function bindPhotoDialog() {
  document.querySelectorAll(".photo-button").forEach((button) => {
    button.addEventListener("click", () => {
      dialogImage.src = button.dataset.src;
      dialogImage.alt = button.dataset.alt;
      dialogCaption.textContent = button.dataset.alt;
      if (typeof dialog.showModal === "function") dialog.showModal();
    });
  });

  document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function startCountdown() {
  const el = document.querySelector("#countdown");

  const tick = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const is520 = now.getMonth() === 4 && now.getDate() === 20;
    el.classList.toggle("is-celebrating", is520);

    if (is520) {
      el.innerHTML = `
        <span class="countdown-year-tile"><strong>${currentYear}</strong>年</span>
        <span class="countdown-colon">:</span>
        <div class="countdown-celebrate"><strong>520快乐</strong><span>今天，星轨终点站亮灯。</span></div>
      `;
      return;
    }

    const hasThisYear520Passed = now >= new Date(currentYear, 4, 21, 0, 0, 0);
    const targetYear = hasThisYear520Passed ? currentYear + 1 : currentYear;
    const target = new Date(targetYear, 4, 20, 0, 0, 0).getTime();
    const diff = target - now.getTime();
    const day = Math.floor(diff / 86400000);
    const hour = Math.floor(diff % 86400000 / 3600000);
    const minute = Math.floor(diff % 3600000 / 60000);
    const second = Math.floor(diff % 60000 / 1000);
    el.innerHTML = `<span class="countdown-year-tile"><strong>${targetYear}</strong>年</span><span class="countdown-colon">:</span>` + [
      ["天", day],
      ["时", hour],
      ["分", minute],
      ["秒", second]
    ].map(([label, value]) => `<span><strong>${String(value).padStart(2, "0")}</strong>${label}</span>`).join("");
  };

  tick();
  setInterval(tick, 1000);
}

function bindGlobalActions() {
  document.querySelector("#toTop").addEventListener("click", () => {
    document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("#openLetter").addEventListener("click", () => {
    document.querySelector("#letter").classList.toggle("open");
  });

  let candleClicks = 0;
  document.querySelector("[data-secret='candle']").addEventListener("click", () => {
    candleClicks += 1;
    if (candleClicks % 3 === 0) {
      document.body.classList.add("warm-flash");
      setTimeout(() => document.body.classList.remove("warm-flash"), 780);
    }
  });
}

function bindRandomMemory() {
  const orb = document.querySelector("#memoryOrb");
  const toast = document.querySelector("#memoryToast");
  let last = -1;

  const show = () => {
    let index = Math.floor(Math.random() * randomMemories.length);
    if (index === last) index = (index + 1) % randomMemories.length;
    last = index;
    const [title, text] = randomMemories[index];
    toast.innerHTML = `<strong>${title}</strong><p>${text}</p>`;
    toast.classList.add("show");
    clearTimeout(show.timer);
    show.timer = setTimeout(() => toast.classList.remove("show"), 5200);
  };

  orb.addEventListener("click", show);
}

function bindKeyboardPaging() {
  window.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "PageDown", "ArrowUp", "PageUp"].includes(event.key)) return;
    const pages = allPages();
    const direction = event.key.includes("Down") ? 1 : -1;
    const next = Math.max(0, Math.min(pages.length - 1, currentPageIndex + direction));
    pages[next].scrollIntoView({ behavior: "smooth" });
  });
}

function restoreHashPosition() {
  const id = window.location.hash.slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  setTimeout(() => {
    target.classList.add("is-visible");
    updateActivePage(target);
    window.scrollTo({ top: target.offsetTop, behavior: "auto" });
  }, 80);
}

function startStarfield() {
  const canvas = document.querySelector("#starfield");
  const ctx = canvas.getContext("2d");
  const stars = [];
  const count = 130;
  let width = 0;
  let height = 0;
  let raf = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const seed = () => {
    stars.length = 0;
    for (let i = 0; i < count; i += 1) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + .35,
        speed: Math.random() * .15 + .035,
        alpha: Math.random() * .52 + .28
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    for (const star of stars) {
      star.y += star.speed;
      if (star.y > height + 4) {
        star.y = -4;
        star.x = Math.random() * width;
      }
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(202, 236, 255, ${star.alpha})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  };

  const reset = () => {
    cancelAnimationFrame(raf);
    resize();
    seed();
    draw();
  };

  window.addEventListener("resize", reset);
  reset();
}

renderStations();
renderNames();
renderRailNav();
bindPhotoDialog();
bindObservers();
startCountdown();
bindGlobalActions();
bindRandomMemory();
bindKeyboardPaging();
window.addEventListener("hashchange", restoreHashPosition);
startStarfield();
restoreHashPosition();

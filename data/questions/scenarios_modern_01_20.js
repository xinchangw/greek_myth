// data/questions/scenarios_modern_01_20.js
(function () { "use strict";
  window.QUESTIONS = window.QUESTIONS || [];
  window.QUESTIONS.push(
    {
      id: 1,
      type: "scenario",
      question: "神庙把一卷能让普通人少死于瘟疫的药典封进金柜，只有祭司长可阅。一位抱着病孩的母亲在台阶下拽住你的衣袖求你：",
      options: [
        { text: "悄悄抄一份删改版塞进她怀里，哪怕被祭司长追罪。", scores: { prometheus: 3, antigone: 1, pandora: 1 } },
        { text: "按庙规把她劝离，典籍的边界不是我能越的。", scores: { hera: 3, zeus: 1 } },
        { text: "私下口耳相传几味关键药草，不留任何字迹。", scores: { hermes: 3, odysseus: 1 } },
        { text: "在祭议会上正式提请开放典籍，走长路也要改这规矩。", scores: { athena: 3, demeter: 1 } }
      ]
    },
    {
      id: 2,
      type: "scenario",
      question: "你与远行的爱人约定：各自磨练一年，其间不通音讯。某个深夜，你突然很想拆开他留下的那捆信笺和日记。",
      options: [
        { text: "忍不住拆了一封，只看一眼就好——结果越读越乱。", scores: { orpheus: 3, cassandra: 1, pandora: 1 } },
        { text: "把信放回枕下，给自己倒杯水，信任是此刻唯一能做的事。", scores: { persephone: 3, hera: 1 } },
        { text: "连夜备马赶去找他，有什么话当面问个清楚。", scores: { ares: 3, hera: 1 } },
        { text: "把这份不安写成一封长信，等重逢时亲手递给他。", scores: { apollo: 3, demeter: 1 } }
      ]
    },
    {
      id: 3,
      type: "scenario",
      question: "你新写的诗篇一夜之间在城中疯传，少年们争相传抄。一位老诗人警告你：写得太快灵气会枯，但趁势再写几卷，你的名字就能刻进最高那座诗坛。",
      options: [
        { text: "通宵再作七卷，趁势冲顶，哪怕烧尽灵感也值得。", scores: { icarus: 3, achilles: 1, narcissus: 1 } },
        { text: "回到缓慢的节奏，写得久远比写得刺眼更重要。", scores: { demeter: 3, hera: 1 } },
        { text: "去请教懂避灵思枯竭之道的前辈，找一条既快又不触禁的路。", scores: { athena: 3, hermes: 1 } },
        { text: "把已写的抄本一次卖给最富的贵族，见好就收。", scores: { hermes: 3, hades: 1 } }
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "你在山中书院已抄录同一部古卷两年，每日核对、比对、再誊写一遍，字句永无终点。到了第二年年末，你会：",
      options: [
        { text: "继续抄，把重复当修行，反正那块石头明日还要推上山。", scores: { sisyphus: 3, demeter: 1 } },
        { text: "一夜离开书院，人不该把自己耗在无尽的誊写里。", scores: { dionysus: 3, achilles: 1 } },
        { text: "偷偷跟师兄学另一门新技艺，为下次下山攒足筹码。", scores: { hermes: 3, athena: 1 } },
        { text: "自造一架誊录机关，让齿轮替我推那块石头。", scores: { hephaestus: 3, prometheus: 1 } }
      ]
    },
    {
      id: 5,
      type: "scenario",
      question: "城邦颁下新令：一位刚去世的同伴留下的书信、诗稿、所有痕迹，都必须焚尽。你是她最后的朋友。",
      options: [
        { text: "不焚。有些东西比律令更该被守住，我愿承担后果。", scores: { prometheus: 3, antigone: 1 } },
        { text: "严格执行，律令是律令，我的位置不允许我越界。", scores: { hera: 3, zeus: 1 } },
        { text: "焚前偷偷抄录一份，留给她的家人。", scores: { hermes: 3, persephone: 1 } },
        { text: "去议事堂正式申诉，推动城邦废掉这条冷酷的律。", scores: { athena: 3, demeter: 1 } }
      ]
    },
    {
      id: 6,
      type: "scenario",
      question: "一位长辈托你去北方极寒之地独守一座旧灯塔三年，换回的酬金足以让家人一生衣食无忧。但那里没有朋友，只有海风与孤星。第一个月结束时，你会：",
      options: [
        { text: "慢慢在灯塔脚下种几株耐寒的花，把这里当成新的家。", scores: { persephone: 3, demeter: 1, circe: 1 } },
        { text: "每月乘船回一次故乡，不肯让生活真的在这里扎根。", scores: { orpheus: 3, odysseus: 1 } },
        { text: "把这里当作跳板，闷头熬过三年一到立刻走。", scores: { odysseus: 3, athena: 1 } },
        { text: "弃灯塔而去，没有朋友的北方不值得留。", scores: { dionysus: 3, aphrodite: 1 } }
      ]
    },
    {
      id: 7,
      type: "scenario",
      question: "你本打算赶在节庆前回海岛与家人相聚，一场风暴毁了最后一班船。要回家，只能绕经三座港口、换三次船、走整整四天。",
      options: [
        { text: "规划最曲折的航线，一程一程换船挪回去。", scores: { odysseus: 3, hermes: 1 } },
        { text: "干脆不回了，托人捎一封家书也一样过节。", scores: { hades: 3, hephaestus: 1, circe: 1 } },
        { text: "雇最贵的私船走直线，透支也要今夜靠岸。", scores: { achilles: 3, icarus: 1 } },
        { text: "留在码头，召集同样回不去的旅人一起办一场异乡夜宴。", scores: { dionysus: 3, demeter: 1 } }
      ]
    },
    {
      id: 8,
      type: "scenario",
      question: "你筹备半年的仪典在今夜举行，你却病倒在家。台上所有的光都落在代你主持的同伴身上。",
      options: [
        { text: "从幕后默默盯着一切器物运作，成品漂亮就够了。", scores: { hephaestus: 3, prometheus: 1 } },
        { text: "心里不是滋味，录下一段话让人在台上替你宣读。", scores: { aphrodite: 3, ares: 1, narcissus: 1 } },
        { text: "关上门窗出去散步，不给自己看那个热闹。", scores: { artemis: 3, hades: 1 } },
        { text: "把自己筹备的每一处细节写成长卷，寄给有心人。", scores: { apollo: 3, athena: 1 } }
      ]
    },
    {
      id: 9,
      type: "scenario",
      question: "两位邻居为共同开垦的那片地究竟归谁吵红了脸，都来请你做最终的仲裁——你一句话就能定输赢。",
      options: [
        { text: "听完双方陈述，给出定论，让所有人签字作证。", scores: { zeus: 3, hera: 1 } },
        { text: "把他们带到集市广场，逼双方当众把话讲清楚。", scores: { ares: 3, zeus: 1 } },
        { text: "私下和稀泥，各让一步，表面和气最重要。", scores: { hermes: 3, aphrodite: 1 } },
        { text: "拒绝介入，告诉他们自己的事自己解决。", scores: { hades: 3, artemis: 1 } }
      ]
    },
    {
      id: 10,
      type: "scenario",
      question: "你发现长期伴侣背着你与别人眉目传情，对方还给出了一套冠冕堂皇的解释。",
      options: [
        { text: "冷静收集蛛丝马迹，在合适时机连本带利追究到底。", scores: { hera: 3, athena: 1 } },
        { text: "当场翻脸，有什么事说什么事，绝不隐忍。", scores: { ares: 3, hera: 1 } },
        { text: "装作没看见，继续经营自己的生活和远方。", scores: { demeter: 3, persephone: 1 } },
        { text: "当夜收拾行李离开，连解释的机会都不给。", scores: { artemis: 3, hecate: 1 } }
      ]
    },
    {
      id: 11,
      type: "scenario",
      question: "你被一位气质独特的人吸引，主动写信、送礼、邀约相见。对方却始终温和地与你保持距离。",
      options: [
        { text: "继续用真诚与热度去打动，相信心诚所至终能破冰。", scores: { apollo: 3, aphrodite: 1, narcissus: 1 } },
        { text: "改用巧思与小心机，制造一次又一次看似偶然的相遇。", scores: { hermes: 3, aphrodite: 1 } },
        { text: "停下来尊重对方的边界，默默祝福，转身离开。", scores: { artemis: 3, athena: 1 } },
        { text: "把这份失落写成一首长歌，让所有人都知道这段故事。", scores: { orpheus: 3, apollo: 1 } }
      ]
    },
    {
      id: 12,
      type: "scenario",
      question: "你独自穿林而行，撞见几个陌生人架起网子猎杀林中幼鹿，还嬉笑着拍手。只有你一人看见这一幕。",
      options: [
        { text: "独自上前制止，必要时撕网砸弓也在所不惜。", scores: { artemis: 3, ares: 1 } },
        { text: "远处屏息留下证据，回城立刻报予林官与乡议。", scores: { athena: 3, hecate: 1 } },
        { text: "把这一幕刻写成檄文，让舆论替野地出头。", scores: { hermes: 3, apollo: 1 } },
        { text: "心里难过但选择走开，这不是自己能管的事。", scores: { demeter: 3, persephone: 1 } }
      ]
    },
    {
      id: 13,
      type: "scenario",
      question: "议事厅上，一位与你同辈的人当众嘲讽你的主张「天真」，还带了几个人随声附和。你就坐在他的对面。",
      options: [
        { text: "立刻反击，用更锋利的话把对方的漏洞当场撕开。", scores: { ares: 3, hera: 1, narcissus: 1 } },
        { text: "不动声色地把议程听完，末尾一条条逻辑反杀回去。", scores: { athena: 3, zeus: 1 } },
        { text: "笑着化解气氛，把话题引向合作的可能。", scores: { aphrodite: 3, hermes: 1 } },
        { text: "议毕单独把人叫到门外，约一场说清楚。", scores: { poseidon: 3, ares: 1 } }
      ]
    },
    {
      id: 14,
      type: "scenario",
      question: "三位祭司学徒的最终试炼只取一人。你听说主祭极看重「眼缘」与「气场」，胜过一切卷轴功课。你怎么准备？",
      options: [
        { text: "精心打磨衣饰、语气、微笑，让主祭第一眼就喜欢你。", scores: { aphrodite: 3, apollo: 1, narcissus: 1 } },
        { text: "把这几年读过的经卷拆成硬功夫，用专业碾压另外两人。", scores: { athena: 3, hephaestus: 1 } },
        { text: "提前向熟人打听主祭的偏好，量身准备一套说辞。", scores: { hermes: 3, aphrodite: 1 } },
        { text: "保持本色，靠表演赢来的位置也守不长。", scores: { artemis: 3, hades: 1 } }
      ]
    },
    {
      id: 15,
      type: "scenario",
      question: "你与同住一屋的人共用厨房，对方总把好吃的锁进自己柜子从不分你。半夜你饿醒，柜门恰好没锁，里面一盒看起来极贵的蜜饯。",
      options: [
        { text: "拿一块，摆回原样，第二天一脸无辜地与他聊天气。", scores: { hermes: 3, dionysus: 1, pandora: 1 } },
        { text: "克制住，泡一碗简餐，第二天提议定一份共用的规矩。", scores: { athena: 3, demeter: 1 } },
        { text: "吃掉大半，留一张字条写「下次请我吃饭还你」。", scores: { dionysus: 3, hermes: 1 } },
        { text: "忍一夜，天亮后当面把不满说清楚，该翻脸就翻脸。", scores: { hera: 3, ares: 1 } }
      ]
    },
    {
      id: 16,
      type: "scenario",
      question: "忙完整整一季的活儿，今夜大伙围着篝火收尾。一整排烈酒和鼓声摆在你面前，所有人都劝你「今晚彻底放开」。",
      options: [
        { text: "一杯接一杯，带头跳上场中，让所有人都跟着疯。", scores: { dionysus: 3, ares: 1 } },
        { text: "喝两杯暖场，保持分寸，主要照看喝多了的同伴。", scores: { hera: 3, demeter: 1 } },
        { text: "只碰一点，躲到角落与一两个人聊深一点的话题。", scores: { hades: 3, athena: 1 } },
        { text: "不碰酒，抱起琴来把篝火旁变成自己的舞台。", scores: { apollo: 3, orpheus: 1 } }
      ]
    },
    {
      id: 17,
      type: "scenario",
      question: "你接下了一座无人愿去的荒凉边城守备——没人关心，也无人争功。你会怎么做？",
      options: [
        { text: "沉默接管，把它建成连上头也动不了的隐秘王国。", scores: { hades: 3, hera: 1, circe: 1 } },
        { text: "把被忽视的边民一个个收为自己的班底。", scores: { persephone: 3, hecate: 1 } },
        { text: "公开立下新律，让所有人都知道这里谁说了算。", scores: { zeus: 3, ares: 1 } },
        { text: "埋首整理档案与旧事，情报就是未来的筹码。", scores: { athena: 3, hermes: 1 } }
      ]
    },
    {
      id: 18,
      type: "scenario",
      question: "深夜，你站在三条看不清尽头的岔路口，每一条都可能改写此后的一生，也都没有回头的票。",
      options: [
        { text: "我先不选，站在此处看别人怎么走，再决定。", scores: { hecate: 3, athena: 1 } },
        { text: "走最危险那条，只有险的才配我走。", scores: { achilles: 3, icarus: 1 } },
        { text: "唤醒身边所有朋友，一起帮我拆解。", scores: { hermes: 3, dionysus: 1 } },
        { text: "闭上眼问直觉，然后头也不回地走。", scores: { artemis: 3, orpheus: 1 } }
      ]
    },
    {
      id: 19,
      type: "scenario",
      question: "为了弥补一次失控，上头给你安排了一长串几近羞辱的差事，每一件都几乎不可能办成。",
      options: [
        { text: "一件一件干完，用结果堵住所有人的嘴。", scores: { heracles: 3, sisyphus: 1 } },
        { text: "做是做，但每一件都要留下我的签名。", scores: { odysseus: 3, prometheus: 1 } },
        { text: "拒绝这种惩罚的逻辑，从根上掀桌。", scores: { prometheus: 3, antigone: 1 } },
        { text: "先完成最显眼的那件，造势之后其他自然松动。", scores: { hermes: 3, apollo: 1 } }
      ]
    },
    {
      id: 20,
      type: "scenario",
      question: "一位挚友深夜来敲门求你帮个大忙。这个忙会明显消耗你自己的时间、钱粮，甚至前途。",
      options: [
        { text: "不问条件，我先到场再说。", scores: { heracles: 3, achilles: 1 } },
        { text: "帮，但我要让他清楚我这次担了什么。", scores: { prometheus: 3, hephaestus: 1 } },
        { text: "用最聪明的方式帮，让代价降到最低。", scores: { odysseus: 3, hermes: 1 } },
        { text: "我帮不了，我有自己的边界。", scores: { artemis: 3, athena: 1 } }
      ]
    }
  );
})();

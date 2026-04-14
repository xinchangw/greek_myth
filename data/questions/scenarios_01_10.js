// data/questions/scenarios_01_10.js
(function () { "use strict";
  window.QUESTIONS = window.QUESTIONS || [];
  window.QUESTIONS.push(
    {
      id: 1,
      type: "scenario",
      question: "神庙把一卷能让普通人少死于瘟疫的药典封进金柜，只有祭司长可阅。一位抱着病孩的母亲在台阶下拽住你的衣袖求你：",
      options: [
        { text: "悄悄抄一份删改版塞进她怀里，哪怕被祭司长追罪。", scores: { prometheus: 3, antigone: 1 } },
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
        { text: "忍不住拆了一封，只看一眼就好——结果越读越乱。", scores: { orpheus: 3, cassandra: 1 } },
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
        { text: "通宵再作七卷，趁势冲顶，哪怕烧尽灵感也值得。", scores: { icarus: 3, achilles: 1 } },
        { text: "回到缓慢的节奏，写得久远比写得刺眼更重要。", scores: { demeter: 3, hera: 1 } },
        { text: "去请教懂避灵思枯竭之道的前辈，找一条既快又不触禁的路。", scores: { athena: 3, hermes: 1 } },
        { text: "把已写的抄本一次卖给最富的贵族，见好就收。", scores: { hermes: 3, hades: 1 } }
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "两条路摆在你面前：一条是加入寻金羊毛的远航船队，三年归来若成则名震四海，若败则葬身鱼腹；另一条是继承一块世代为业的良田，衣食无忧一生。",
      options: [
        { text: "上船，哪怕只燃三年，也要在行吟诗里留下我的名字。", scores: { achilles: 3, icarus: 1 } },
        { text: "守田，平稳一生陪家人走过四季也是福气。", scores: { demeter: 3, hera: 1 } },
        { text: "同时应承两边，看谁许的金币和承诺更重再决定。", scores: { odysseus: 3, hermes: 1 } },
        { text: "都不要，自己造一条小船，按自己的节奏出海。", scores: { hephaestus: 3, prometheus: 1 } }
      ]
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
      type: "scenario",
      question: "一位长辈托你去北方极寒之地独守一座旧灯塔三年，换回的酬金足以让家人一生衣食无忧。但那里没有朋友，只有海风与孤星。第一个月结束时，你会：",
      options: [
        { text: "慢慢在灯塔脚下种几株耐寒的花，把这里当成新的家。", scores: { persephone: 3, demeter: 1 } },
        { text: "每月乘船回一次故乡，不肯让生活真的在这里扎根。", scores: { orpheus: 3, odysseus: 1 } },
        { text: "把这里当作跳板，闷头熬过三年一到立刻走。", scores: { odysseus: 3, athena: 1 } },
        { text: "弃灯塔而去，没有朋友的北方不值得留。", scores: { dionysus: 3, aphrodite: 1 } }
      ]
    },
    {
      id: 8,
      type: "scenario",
      question: "你本打算赶在节庆前回海岛与家人相聚，一场风暴毁了最后一班船。要回家，只能绕经三座港口、换三次船、走整整四天。",
      options: [
        { text: "规划最曲折的航线，一程一程换船挪回去。", scores: { odysseus: 3, hermes: 1 } },
        { text: "干脆不回了，托人捎一封家书也一样过节。", scores: { hades: 3, hephaestus: 1 } },
        { text: "雇最贵的私船走直线，透支也要今夜靠岸。", scores: { achilles: 3, icarus: 1 } },
        { text: "留在码头，召集同样回不去的旅人一起办一场异乡夜宴。", scores: { dionysus: 3, demeter: 1 } }
      ]
    },
    {
      id: 9,
      type: "scenario",
      question: "你随船队出海，最早看出领航员正把大家一点点带向暗礁。你说了三次，船长只当你晦气。",
      options: [
        { text: "每日继续在甲板上喊，直到有人肯听见为止。", scores: { cassandra: 3, antigone: 1 } },
        { text: "闭嘴做自己的活，等他们真撞上那天再说。", scores: { hades: 3, sisyphus: 1 } },
        { text: "绕过船长，把海图分析直接送到船队主人手里。", scores: { prometheus: 3, odysseus: 1 } },
        { text: "先把自己看管的那一段船帆固好，哪怕船翻也烧不到我。", scores: { athena: 3, hera: 1 } }
      ]
    },
    {
      id: 10,
      type: "scenario",
      question: "你筹备半年的仪典在今夜举行，你却病倒在家。台上所有的光都落在代你主持的同伴身上。",
      options: [
        { text: "从幕后默默盯着一切器物运作，成品漂亮就够了。", scores: { hephaestus: 3, prometheus: 1 } },
        { text: "心里不是滋味，录下一段话让人在台上替你宣读。", scores: { aphrodite: 3, ares: 1 } },
        { text: "关上门窗出去散步，不给自己看那个热闹。", scores: { artemis: 3, hades: 1 } },
        { text: "把自己筹备的每一处细节写成长卷，寄给有心人。", scores: { apollo: 3, athena: 1 } }
      ]
    }
  );
})();

// data/questions/scenarios_01_10.js
(function () { "use strict";
  window.QUESTIONS = window.QUESTIONS || [];
  window.QUESTIONS.push(
    {
      id: 1,
      type: "scenario",
      question: "公司把一份能帮新人少踩坑的内部资料列为机密，只高层可看。新人私下向你求助，你会：",
      options: [
        { text: "悄悄整理一份脱敏版发到新人群，哪怕被管理层追责。", scores: { prometheus: 3, antigone: 1 } },
        { text: "按规矩办事，让他们自己摸索，这是公司的规则。", scores: { hera: 3, zeus: 1 } },
        { text: "私聊几个熟人，口头传递关键点，不留痕迹。", scores: { hermes: 3, odysseus: 1 } },
        { text: "在会上提议公开这份资料，走正规流程推动改革。", scores: { athena: 3, demeter: 1 } }
      ]
    },
    {
      id: 2,
      type: "scenario",
      question: "你和伴侣约定异地三年各自努力、期间不查对方手机。某个深夜你突然很想打开他的社交账号看看，你会：",
      options: [
        { text: "忍不住点开了，只看一眼就好——结果越看越乱。", scores: { orpheus: 3, cassandra: 1 } },
        { text: "关掉手机，给自己倒杯水，信任是此刻唯一能做的事。", scores: { persephone: 3, hera: 1 } },
        { text: "直接打电话过去把想查的事问个清楚。", scores: { ares: 3, hera: 1 } },
        { text: "把这份不安写成信，等见面当面交给他。", scores: { apollo: 3, demeter: 1 } }
      ]
    },
    {
      id: 3,
      type: "scenario",
      question: "你用AI写作刚火，粉丝暴涨。平台提示你更新过快可能被限流，但继续加更几乎肯定能冲进头部。你会：",
      options: [
        { text: "再加一倍更新量，趁势冲顶，风险我扛。", scores: { icarus: 3, achilles: 1 } },
        { text: "调回稳定节奏，长期留在牌桌上更重要。", scores: { demeter: 3, hera: 1 } },
        { text: "去研究平台规则，找到一条能加速又不触线的路。", scores: { athena: 3, hermes: 1 } },
        { text: "干脆把账号卖掉套现，见好就收。", scores: { hermes: 3, hades: 1 } }
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "你拿到两个offer：一个是高强度创业项目，三年内可能上市也可能归零；另一个是稳定国企，一辈子衣食无忧。你会：",
      options: [
        { text: "选创业，哪怕只燃烧三年，也要在行业里留下名字。", scores: { achilles: 3, icarus: 1 } },
        { text: "选国企，平稳一生陪家人走过四季也是福气。", scores: { demeter: 3, hera: 1 } },
        { text: "同时谈，看谁给的筹码更好再决定。", scores: { odysseus: 3, hermes: 1 } },
        { text: "都不选，自己做独立工作室，按自己的节奏来。", scores: { hephaestus: 3, prometheus: 1 } }
      ]
    },
    {
      id: 5,
      type: "scenario",
      question: "你在一个看不到尽头的项目里，每天处理同样的表格、同样的bug、同样的甲方改稿。到了第二年，你会：",
      options: [
        { text: "继续推，把重复当成修行，反正石头明天还要滚下来。", scores: { sisyphus: 3, demeter: 1 } },
        { text: "裸辞，人不该为无意义的事耗尽自己。", scores: { dionysus: 3, achilles: 1 } },
        { text: "偷偷学新技能，为下一次跳槽攒弹药。", scores: { hermes: 3, athena: 1 } },
        { text: "把流程自动化，让机器替我推那块石头。", scores: { hephaestus: 3, prometheus: 1 } }
      ]
    },
    {
      id: 6,
      type: "scenario",
      question: "公司强制要求删除一位去世员工留下的所有内部账号和资料，你是她最后的同事。你会：",
      options: [
        { text: "不删。有些东西比制度更该被守住，我愿意承担后果。", scores: { prometheus: 3, antigone: 1 } },
        { text: "严格执行，规定就是规定，我的位置不允许我越界。", scores: { hera: 3, zeus: 1 } },
        { text: "先备份到私人硬盘再删除，留一份给她家人。", scores: { hermes: 3, persephone: 1 } },
        { text: "在内部系统发起申诉，推动公司改这条冷漠的规定。", scores: { athena: 3, demeter: 1 } }
      ]
    },
    {
      id: 7,
      type: "scenario",
      question: "你被外派到一个冷清偏远的城市三年，薪水翻倍但远离所有朋友。第一个月结束，你会：",
      options: [
        { text: "慢慢接受这里，开始种花、交当地朋友，就当这是新的家。", scores: { persephone: 3, demeter: 1 } },
        { text: "每周飞回原城市，不肯让生活真的在这里扎根。", scores: { orpheus: 3, odysseus: 1 } },
        { text: "把这里当跳板，闷头攒业绩，三年一到立刻走。", scores: { odysseus: 3, athena: 1 } },
        { text: "直接辞职回去，没有朋友的城市不值得留。", scores: { dionysus: 3, aphrodite: 1 } }
      ]
    },
    {
      id: 8,
      type: "scenario",
      question: "回家过年的机票被取消，改签要绕三个城市、花四天才能到。你会：",
      options: [
        { text: "规划最曲折的路线，一站一站换着交通工具往回挪。", scores: { odysseus: 3, hermes: 1 } },
        { text: "干脆不回了，视频拜年也一样过节。", scores: { hades: 3, hephaestus: 1 } },
        { text: "砸钱包机或高价黄牛票，哪怕透支也要今晚到家。", scores: { achilles: 3, icarus: 1 } },
        { text: "留在原地组织同样回不去的朋友办一个异乡年夜饭。", scores: { dionysus: 3, demeter: 1 } }
      ]
    },
    {
      id: 9,
      type: "scenario",
      question: "你在团队里最早看出项目方向错了，说了三次没人听，leader还觉得你在唱衰。你会：",
      options: [
        { text: "继续在每次会议上把问题摆出来，说到他们听见为止。", scores: { cassandra: 3, antigone: 1 } },
        { text: "算了，闭嘴做事，他们撞墙那天再说。", scores: { hades: 3, sisyphus: 1 } },
        { text: "绕开leader，把分析发给更上层的决策者。", scores: { prometheus: 3, odysseus: 1 } },
        { text: "先把自己的那块做稳，项目崩了也烧不到我。", scores: { athena: 3, hera: 1 } }
      ]
    },
    {
      id: 10,
      type: "scenario",
      question: "你因为身体原因无法出席自己策划了半年的发布会，当天所有聚光灯都在台上的同事身上。你会：",
      options: [
        { text: "在后台默默盯着直播做最后的技术保障，成品漂亮就够了。", scores: { hephaestus: 3, prometheus: 1 } },
        { text: "心里不是滋味，录一段视频发朋友圈宣示主权。", scores: { aphrodite: 3, ares: 1 } },
        { text: "关掉直播出去散步，不给自己看那个热闹。", scores: { artemis: 3, hades: 1 } },
        { text: "复盘自己做过的每个细节，写成长文发出来。", scores: { apollo: 3, athena: 1 } }
      ]
    }
  );
})();

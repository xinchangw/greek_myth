// data/questions/scenarios_11_20.js
(function () { "use strict";
  window.QUESTIONS = window.QUESTIONS || [];
  window.QUESTIONS.push(
    {
      id: 11,
      type: "scenario",
      question: "部门两位同事因为项目署名争执不下,都跑来让你当最后的裁判,一句话就能决定胜负,你怎么做?",
      options: [
        { text: "听完双方陈述,给出最终定论,并让所有人签字承认。", scores: { zeus: 3, hera: 1 } },
        { text: "把他们拉进会议室,逼双方当面把话讲清楚再说。", scores: { ares: 3, zeus: 1 } },
        { text: "私下调解,各打五十大板,表面和气最重要。", scores: { hermes: 3, aphrodite: 1 } },
        { text: "拒绝介入,告诉他们自己的事自己解决。", scores: { hades: 3, artemis: 1 } }
      ]
    },
    {
      id: 12,
      type: "scenario",
      question: "你发现长期伴侣在社交软件上和别人暧昧,对方还给你冠冕堂皇的解释,你会?",
      options: [
        { text: "冷静收集证据,在合适时机连本带利追究到底。", scores: { hera: 3, athena: 1 } },
        { text: "当场拍桌翻脸,有什么事说什么事,绝不隐忍。", scores: { ares: 3, hera: 1 } },
        { text: "假装没看见,继续经营自己的生活和副业。", scores: { demeter: 3, persephone: 1 } },
        { text: "直接拉黑删除,连解释的机会都不给。", scores: { artemis: 3, hecate: 1 } }
      ]
    },
    {
      id: 13,
      type: "scenario",
      question: "你准备最充分的竞标方案,却被对手用一个看似朴素的点子拿下,客户说对方更懂他们,你如何反应?",
      options: [
        { text: "气到摔杯子,回头立刻再开战场,一定要赢回来。", scores: { poseidon: 3, ares: 1 } },
        { text: "冷静复盘,承认对手的智慧,把经验写进下次的方案。", scores: { athena: 3, prometheus: 1 } },
        { text: "怀疑评委有内幕,托关系去查个水落石出。", scores: { hera: 3, hades: 1 } },
        { text: "表面祝贺,心里记下这笔账,以后绕着对方走。", scores: { hades: 3, poseidon: 1 } }
      ]
    },
    {
      id: 14,
      type: "scenario",
      question: "公司内部作品赛,你对自己的手艺极有信心,甚至想挑战行业里公认最厉害的那位前辈,怎么参赛?",
      options: [
        { text: "正面PK,把自己最硬核的作品摆出来,细节吊打对手。", scores: { athena: 3, artemis: 1 } },
        { text: "做个惊艳的视觉表演,让评委和观众一眼记住你。", scores: { apollo: 3, dionysus: 1 } },
        { text: "联合几个人组团参赛,靠协作和人脉取胜。", scores: { hermes: 3, aphrodite: 1 } },
        { text: "低调提交,不和前辈比,专注自己的节奏。", scores: { hephaestus: 3, demeter: 1 } }
      ]
    },
    {
      id: 15,
      type: "scenario",
      question: "你被一个很有气质的人吸引,主动发消息、送礼物、安排见面,对方却始终温和地拉开距离,你会?",
      options: [
        { text: "继续浪漫攻势,坚信真诚和热度总能打动人。", scores: { apollo: 3, aphrodite: 1 } },
        { text: "改变策略,用巧妙的话术和小心机制造偶遇。", scores: { hermes: 3, aphrodite: 1 } },
        { text: "停下来尊重对方的边界,默默祝福,转身离开。", scores: { artemis: 3, athena: 1 } },
        { text: "把失落写成作品,让所有人都知道这段故事。", scores: { orpheus: 3, apollo: 1 } }
      ]
    },
    {
      id: 16,
      type: "scenario",
      question: "周末徒步时,你看见几个人在山林里架网捕猎野生动物,还嬉笑拍照,只有你一个人撞见,你会?",
      options: [
        { text: "独自上前制止,必要时动手拆网,不怕对方人多。", scores: { artemis: 3, ares: 1 } },
        { text: "保持距离拍下证据,立刻报警和举报平台。", scores: { athena: 3, hecate: 1 } },
        { text: "假装路过录下视频,发到网上让舆论去解决。", scores: { hermes: 3, apollo: 1 } },
        { text: "心里难过但选择走开,这不是自己能管的事。", scores: { demeter: 3, persephone: 1 } }
      ]
    },
    {
      id: 17,
      type: "scenario",
      question: "会议上,一位同级同事当众嘲讽你的方案「天真」,还带节奏让其他人附和,你坐在对面,接下来?",
      options: [
        { text: "立刻反击,用更锋利的话把对方的漏洞当场撕开。", scores: { ares: 3, hera: 1 } },
        { text: "不动声色记下数据,等议程末尾一条条逻辑反杀。", scores: { athena: 3, zeus: 1 } },
        { text: "笑着化解气氛,把话题转到合作可能性上。", scores: { aphrodite: 3, hermes: 1 } },
        { text: "会后单独找对方约架式谈话,要个说法。", scores: { poseidon: 3, ares: 1 } }
      ]
    },
    {
      id: 18,
      type: "scenario",
      question: "三位候选人里只会录取一个,你知道面试官私下很在意「氛围感」和「眼缘」,你怎么准备?",
      options: [
        { text: "精心打磨外形、语气、微笑,让面试官第一眼就喜欢你。", scores: { aphrodite: 3, apollo: 1 } },
        { text: "把项目经验拆成硬数据,用专业度碾压另外两位。", scores: { athena: 3, hephaestus: 1 } },
        { text: "提前打听面试官的偏好,量身定制一套话术。", scores: { hermes: 3, aphrodite: 1 } },
        { text: "保持本色,觉得靠表演赢来的位置也待不长。", scores: { artemis: 3, hades: 1 } }
      ]
    },
    {
      id: 19,
      type: "scenario",
      question: "合租室友总囤一箱好吃的却从不分享,你半夜饿醒,冰箱里刚好有一盒看起来很贵的甜点,你会?",
      options: [
        { text: "拿一块,摆回原样,第二天一脸无辜地和对方聊天气。", scores: { hermes: 3, dionysus: 1 } },
        { text: "克制住,泡碗泡面,第二天提议大家做个食物公约。", scores: { athena: 3, demeter: 1 } },
        { text: "直接吃掉大半,留张字条写「下次请我吃饭还你」。", scores: { dionysus: 3, hermes: 1 } },
        { text: "忍一夜,早上当面把不满说清楚,该翻脸就翻脸。", scores: { hera: 3, ares: 1 } }
      ]
    },
    {
      id: 20,
      type: "scenario",
      question: "项目连轴转三个月终于收尾,团建当晚,大家劝你「今天彻底放开」,你面前是一整排烈酒和音乐,你会?",
      options: [
        { text: "一杯接一杯,带头跳上舞池,让所有人都跟着疯。", scores: { dionysus: 3, ares: 1 } },
        { text: "喝两杯暖场,保持分寸,主要照看喝多的同事。", scores: { hera: 3, demeter: 1 } },
        { text: "只碰一点,躲到角落和一两个人聊深度话题。", scores: { hades: 3, athena: 1 } },
        { text: "不喝酒,抱着吉他把现场变成自己的舞台。", scores: { apollo: 3, orpheus: 1 } }
      ]
    }
  );
})();

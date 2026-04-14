// data/questions/scenarios_olympians_21_22.js
(function () { "use strict";
  window.QUESTIONS = window.QUESTIONS || [];
  window.QUESTIONS.push(
    {
      id: 21,
      type: "scenario",
      mythTitle: "宙斯的分封",
      mythStory: "提坦之战的硝烟刚散，奥林波斯的新主们站在断裂的山巅，脚下是翻腾未定的世界。旧神被打入塔尔塔罗斯，秩序却尚未建立。\n\n宙斯、波塞冬、哈得斯三兄弟围成一圈，从一顶青铜头盔里各自抽签。天穹、大海、冥府——这三片疆域将归于抽到它的人，而大地与奥林波斯则共属众神。\n\n签一旦落定，再无更改。那一刻，谁也不知道自己将抽到什么，也不知道那将决定他未来的整副面孔。命运落入头盔之前，是他们先把自己放了进去。",
      question: "大战方歇，你与兄弟站在瓦砾之上，必须分掉这个世界…",
      options: [
        { text: "抽到什么就是什么——我接下这一签，天穹便由我执掌。", scores: { zeus: 8, hera: 1 } },
        { text: "我想要深海，那里安静，没有人看得见我做什么。", scores: { poseidon: 3, artemis: 1 } },
        { text: "让我去冥府吧，没人愿去的地方，总得有人统治。", scores: { hades: 3, hecate: 1, persephone: 1 } },
        { text: "签已落，我接下——但我会让我那一片比另两片更被敬畏。", scores: { ares: 3, zeus: 1 } }
      ]
    },
    {
      id: 22,
      type: "scenario",
      mythTitle: "赫拉的复仇",
      mythStory: "宙斯又一次动了情，这一回是河神之女伊娥。为躲避赫拉的眼睛，他将少女变作一头通体雪白的母牛，藏在云端之下。\n\n赫拉岂会看不穿，她微笑着向丈夫讨要这头牛作为礼物，随即派出百目巨人阿耳戈斯——他一半的眼睛永远睁着——日夜看守。宙斯不得已遣赫尔墨斯前去，用笛声哄睡巨人，取其首级。\n\n赫拉毫不罢休，又召来一只牛虻，驱使伊娥在变形的躯壳中奔逃天涯。她越过海峡，踏遍山川，以兽形丈量半个世界。\n\n最终宙斯在埃及向赫拉低头认错，赫拉才点头让伊娥恢复人身。赫拉的复仇从不喧哗，却比雷霆更长久。",
      question: "你发现丈夫又一次背叛了你，对方还被他藏成另一副模样。你会怎样处理这一桩？",
      options: [
        { text: "派一只百目巨人日夜盯住她——他要宠，就得让她连一刻安生都不得。", scores: { hera: 8, medea: 1 } },
        { text: "亲手收拾她，不假他人之手。我嫁妆里就有药。", scores: { medea: 3, circe: 1, hecate: 1 } },
        { text: "冲进去当面把他与她一起撕开，话当场讲清。", scores: { ares: 3, poseidon: 1 } },
        { text: "说出去给全城人听——让这段风流成为他的耻辱。", scores: { cassandra: 3, apollo: 1, pandora: 1 } }
      ]
    }
  );
})();

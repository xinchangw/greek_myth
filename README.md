# 你是希腊神话里的哪一位？ · Which Greek God Are You

一场关于灵魂原型的纯前端测试。回答 60 道题，从 25 位希腊神祇与英雄中找到与你共鸣最深的那位——同时看见你的「神格构成」与「阴影面」。

视觉风格：**古典黑金 · 现代极简**。
技术栈：**Vanilla HTML + CSS + JavaScript**，无构建、无后端、无依赖。
数据持久化：**localStorage**（仅保存在你自己的浏览器里）。

---

## 在线访问

部署到 GitHub Pages 后即可直接访问：
`https://<your-username>.github.io/<repo-name>/`

---

## 本地运行

由于浏览器对 `file://` 协议下的多脚本加载有限制，建议起一个本地静态服务：

```bash
# 任选其一
python3 -m http.server 8000
# 或
npx serve .
```

然后访问 `http://127.0.0.1:8000/`。

---

## 部署到 GitHub Pages

1. 把整个仓库推到 GitHub
2. 仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支选 `main`（或你喜欢的分支），目录选 `/ (root)`
3. 仓库根目录已包含 `.nojekyll`，GitHub Pages 会原样发布所有静态文件
4. 等待几分钟即可访问

---

## 项目结构

```
/
├── index.html                         # 主入口
├── styles.css                         # 古典黑金主题、响应式、动画
├── app.js                             # 状态机 / 计分 / 渲染 / 持久化 / 星空
├── README.md
├── .nojekyll
└── data/
    ├── icons.js                       # 25 个 SVG 占位图标
    ├── characters.js                  # 角色聚合器（初始化 window.CHARACTERS）
    ├── characters/                    # 一人一文件
    │   ├── zeus.js  hera.js  poseidon.js  athena.js  apollo.js
    │   ├── artemis.js  ares.js  aphrodite.js  hephaestus.js  hermes.js
    │   ├── dionysus.js  demeter.js  hades.js  prometheus.js  persephone.js
    │   ├── hecate.js  heracles.js  odysseus.js  achilles.js  orpheus.js
    │   └── sisyphus.js  cassandra.js  medea.js  icarus.js  antigone.js
    ├── questions.js                   # 题目排序钩子
    └── questions/                     # 题目分批
        ├── scenarios_01_10.js         # 10 道场景
        ├── scenarios_11_20.js         # 10 道场景
        ├── scenarios_21_30.js         # 10 道场景
        ├── preferences_31_40.js       # 10 道偏好
        ├── preferences_41_50.js       # 10 道偏好
        └── binary_51_60.js            # 10 道二元意象
```

---

## 25 位角色

**奥林匹斯主神（12）**：Zeus 宙斯 · Hera 赫拉 · Poseidon 波塞冬 · Athena 雅典娜 · Apollo 阿波罗 · Artemis 阿尔忒弥斯 · Ares 阿瑞斯 · Aphrodite 阿芙洛狄忒 · Hephaestus 赫菲斯托斯 · Hermes 赫尔墨斯 · Dionysus 狄俄尼索斯 · Demeter 德墨忒尔

**冥界与泰坦（3）**：Hades 哈迪斯 · Prometheus 普罗米修斯 · Hecate 赫卡忒

**英雄（7）**：Heracles 赫拉克勒斯 · Odysseus 奥德修斯 · Achilles 阿喀琉斯 · Orpheus 俄耳甫斯 · Persephone 珀尔塞福涅 · Cassandra 卡珊德拉 · Sisyphus 西西弗斯

**悲剧人物（3）**：Medea 美狄亚 · Icarus 伊卡洛斯 · Antigone 安提戈涅

每位角色档案含：原型标签、神话故事、性格画像、光与影、关系相性，以及一句**真实古希腊原典引文**（出处含荷马、赫西俄德、悲剧三大家、维吉尔、奥维德等）。

---

## 题目结构（共 60 道）

| 段落 | 数量 | 类型 | 风格 |
| --- | --- | --- | --- |
| 1–30 | 30 | scenario | 现代场景，每题暗合一个希腊神话母题 |
| 31–50 | 20 | preference | 季节、颜色、动物、爱情、生死偏好 |
| 51–60 | 10 | binary | 强对立的二元意象 |

每个选项给 1–3 个角色加 1–3 分；主选 3 分，次选 1 分。最终按总分排序，取首位为「主灵魂」，前三位合成「神格构成」，末位为「阴影自我」。

---

## 修改与扩展

- **替换图标**：编辑 `data/icons.js` 中对应角色的 SVG 字符串
- **新增角色**：在 `data/characters/` 添加 `<id>.js`，并在 `data/icons.js` 注册图标，再在 `index.html` 里加上一行 `<script>`
- **修改题目**：编辑 `data/questions/*.js`；id 不要重复
- **修改主题色**：`styles.css` 顶部的 CSS 变量

---

## 本仓库不含

- 后端、账号系统、社交分享 OAuth
- 多语言切换（仅中文）
- 构建管线（Vite/Webpack/esbuild 等）
- 真正的 SVG 插画（图标为占位，留待后续替换）

const categories = [
  {
    title: "我的遊戲",
    eyebrow: "MY GAMES",
    items: [
      {
        name: "吃什麼轉盤",
        description: "今天吃什麼？交給轉盤幫你做決定 🍜",
        icon: "🍱",
        url: "https://katherineyang193.github.io/Eat/",
        status: "READY",
        cardBg: "linear-gradient(145deg, #fff0d8, #ffe8ef)",
        external: false
      },
      {
        name: "CuteDart",
        description: "瞄準、出手，來挑戰今天的手感吧 🎯",
        icon: "🎯",
        url: "https://katherineyang193.github.io/CuteDart/",
        status: "READY",
        cardBg: "linear-gradient(145deg, #e6f4ff, #efe7ff)",
        external: false
      },
      {
        name: "NinjaRun",
        description: "動起來挑戰忍者任務，一起闖關！ 🥷",
        icon: "🥷",
        url: "https://katherineyang193.github.io/NinjaRun/",
        status: "READY",
        cardBg: "linear-gradient(145deg, #eaf7ee, #eef0ff)",
        external: false
      },
      {
        name: "Yoga Fitness",
        description: "跟著提示伸展活動，輕鬆動一動 🧘",
        icon: "🧘",
        url: "https://katherineyang193.github.io/Yoga-Fitness/",
        status: "READY",
        cardBg: "linear-gradient(145deg, #f4eaff, #e8fff5)",
        external: false
      }
    ]
  },
  {
    title: "推薦收藏",
    eyebrow: "FAVORITES",
    items: [
      {
        name: "臺北狂飆",
        description: "城市街景結合 3D 駕駛體驗 🚗",
        icon: "🏙️",
        url: "https://www.taipei-rush.app/",
        status: "收藏",
        cardBg: "linear-gradient(145deg, #e7f6ff, #fff4df)",
        external: true
      },
      {
        name: "fab24hr",
        description: "體驗半導體晶圓廠工程師的一天 🏭",
        icon: "🏭",
        url: "https://fab24hr.com/",
        status: "收藏",
        cardBg: "linear-gradient(145deg, #edf2ff, #f1f6f7)",
        external: true
      },
      {
        name: "AI 趣味遊戲",
        description: "鴻海教育基金會的 AI 互動遊戲集合 🤖",
        icon: "🤖",
        url: "https://tech.foxconnfoundation.org/comic-games/",
        status: "收藏",
        cardBg: "linear-gradient(145deg, #fff2dc, #e7f9ff)",
        external: true
      }
    ]
  }
];

const categoryContainer = document.getElementById("categoryContainer");
const categoryTemplate = document.getElementById("categoryTemplate");
const gameCardTemplate = document.getElementById("gameCardTemplate");

categories.forEach((category) => {
  const categoryFragment = categoryTemplate.content.cloneNode(true);
  const eyebrow = categoryFragment.querySelector(".eyebrow");
  const heading = categoryFragment.querySelector("h2");
  const count = categoryFragment.querySelector(".game-count");
  const grid = categoryFragment.querySelector(".game-grid");

  eyebrow.textContent = category.eyebrow;
  heading.textContent = category.title;
  count.textContent = `${category.items.length} 款`;

  category.items.forEach((game) => {
    const fragment = gameCardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".game-card");
    const art = fragment.querySelector(".card-art");
    const icon = fragment.querySelector(".card-icon");
    const status = fragment.querySelector(".status-pill");
    const title = fragment.querySelector("h3");
    const description = fragment.querySelector("p");
    const playLabel = fragment.querySelector(".play-label");

    card.href = game.url;
    card.setAttribute("aria-label", `${game.external ? "前往收藏" : "開始遊戲"}：${game.name}`);
    art.style.setProperty("--card-bg", game.cardBg);
    icon.textContent = game.icon;
    status.textContent = game.status;
    title.textContent = game.name;
    description.textContent = game.description;
    playLabel.textContent = game.external ? "前往遊戲" : "開始遊戲";

    if (game.external) {
      card.classList.add("external");
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    } else {
      card.target = "_self";
    }

    grid.appendChild(fragment);
  });

  categoryContainer.appendChild(categoryFragment);
});

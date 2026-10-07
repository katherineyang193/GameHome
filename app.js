const games = [
  {
    name: "吃什麼轉盤",
    description: "今天吃什麼？交給轉盤幫你做決定 🍜",
    icon: "🍱",
    url: "https://katherineyang193.github.io/Eat/",
    status: "READY",
    cardBg: "linear-gradient(145deg, #fff0d8, #ffe8ef)"
  },
  {
    name: "CuteDart",
    description: "瞄準、出手，來挑戰今天的手感吧 🎯",
    icon: "🎯",
    url: "https://katherineyang193.github.io/CuteDart/",
    status: "READY",
    cardBg: "linear-gradient(145deg, #e6f4ff, #efe7ff)"
  }
];

const gameGrid = document.getElementById("gameGrid");
const gameCount = document.getElementById("gameCount");
const template = document.getElementById("gameCardTemplate");

gameCount.textContent = `${games.length} 款遊戲`;

games.forEach((game) => {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".game-card");
  const art = fragment.querySelector(".card-art");
  const icon = fragment.querySelector(".card-icon");
  const status = fragment.querySelector(".status-pill");
  const title = fragment.querySelector("h3");
  const description = fragment.querySelector("p");

  card.href = game.url;
  card.setAttribute("aria-label", `開始遊戲：${game.name}`);
  art.style.setProperty("--card-bg", game.cardBg);
  icon.textContent = game.icon;
  status.textContent = game.status;
  title.textContent = game.name;
  description.textContent = game.description;

  gameGrid.appendChild(fragment);
});

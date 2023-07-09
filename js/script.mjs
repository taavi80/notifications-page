import { notifications } from "./data.mjs";

const main = document.querySelector("main");
const notificationCount = document.querySelector(".notification-count");
const cards = [];

const createCard = (notification) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = notification.image;
  image.alt = "";
  card.appendChild(image);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const text = document.createElement("p");
  text.innerHTML = `
    <span class="name">${notification.name}</span> ${notification.activity}
    ${
      notification.post
        ? `<span class="bolder-text">${notification.post}</span>`
        : ""
    }
    ${
      notification.group
        ? `<span class="bolder-text group">${notification.group}</span>`
        : ""
    }
    ${notification.haveRead ? "" : `<span class="dot"></span>`}
    <span class="added">${notification.added} ago</span>
  `;
  cardBody.appendChild(text);

  const picture = document.createElement("div");
  picture.className = "picture-container";
  if (notification.picture) {
    const image = document.createElement("img");
    image.src = notification.picture;
    image.alt = "";
    picture.appendChild(image);
  }
  cardBody.appendChild(picture);

  if (notification.message) {
    const message = document.createElement("div");
    message.className = "message";
    message.textContent = notification.message;
    cardBody.appendChild(message);
  }

  card.appendChild(cardBody);
  main.appendChild(card);
  cards.push(card);
};

const updateNotificationCount = () => {
  const unreadCount = cards.filter(
    (card) => !card.classList.contains("clicked")
  ).length;
  notificationCount.textContent = unreadCount;
};

notifications.forEach((notification) => {
  createCard(notification);
});

cards.forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.add("clicked");
    const dot = this.querySelector(".dot");

    if (dot) {
      dot.remove();
    }

    const message = this.querySelector(".message");
    if (message) {
      message.style.display = "block";
    }

    updateNotificationCount();
  });
});

const markAllButton = document.querySelector(".mark-all");
markAllButton.addEventListener("click", function () {
  cards.forEach((card) => {
    card.classList.add("clicked");
    const dot = card.querySelector(".dot");
    if (dot) {
      dot.remove();
    }
    const message = card.querySelector(".message");
    if (message) {
      message.style.display = "block";
    }
  });

  updateNotificationCount();
});

updateNotificationCount();

export const notifications = [
  {
    image: "images/avatar-mark-webber.webp",
    name: "Mark Webber",
    activity: "reacted to your recent post",
    post: "My first tournament today!",
    haveRead: false,
    added: "1m",
  },
  {
    image: "images/avatar-angela-gray.webp",
    name: "Angela Gray",
    activity: "followed you",
    haveRead: false,
    added: "5m",
  },
  {
    image: "images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    activity: "has joined your group",
    group: "Chess Club",
    haveRead: false,
    added: "1 day",
  },
  {
    image: "images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    activity: "sent you a private message",
    haveRead: false,
    added: "5 days",
    message: `Hello, thanks for setting up the Chess
    Club. I've been a member for a few weeks now and I'm already having lots
    of fun and improving my game.`,
  },
  {
    image: "images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    activity: "commented on your picture",
    haveRead: false,
    added: "1 week",
    picture: "images/image-chess.webp",
  },
  {
    image: "images/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    activity: "reacted to your recent post",
    post: "5 end-game strategies to increase you win rate",
    haveRead: false,
    added: "2 weeks",
  },
  {
    image: "images/avatar-anna-kim.webp",
    name: "Anna Kim",
    activity: "left the group",
    group: "Chess Club",
    haveRead: false,
    added: "2 weeks",
  },
];

// import { notifications } from "./data.mjs";

const main = document.querySelector("main");

notifications.forEach((notification) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = notification.image;
  card.appendChild(image);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const text = document.createElement("p");
  text.innerHTML = `
            <span class="name">${notification.name}</span> ${
    notification.activity
  }
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
            ${
              notification.haveRead
                ? ""
                : `
              <span class="dot"></span>
              `
            }
            <span class="added">${notification.added} ago</span>
     
        `;
  cardBody.appendChild(text);

  const picture = document.createElement("div");
  picture.className = "picture-container";
  picture.innerHTML = `
  ${notification.picture ? `<img src="${notification.picture}" />` : ""}
  `;
  cardBody.appendChild(picture);

  if (notification.message) {
    const message = document.createElement("div");
    message.className = "message";
    message.textContent = notification.message;
    cardBody.appendChild(message);
  }

  card.appendChild(cardBody);
  main.appendChild(card);
});

const updateNotificationCount = () => {
  const notificationCount = document.querySelector(".notification-count");
  const unreadCount = document.querySelectorAll(".card:not(.clicked)").length;
  notificationCount.textContent = unreadCount;
};

updateNotificationCount();

const cards = document.querySelectorAll(".card");
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

import { notifications } from "./data.mjs";

// Get the main container element
const main = document.querySelector("main");

// Loop through the notification data and generate card containers dynamically
notifications.forEach((notification) => {
  // Create the card container element
  const card = document.createElement("div");
  card.className = "card";

  // Create the image element
  const image = document.createElement("img");
  image.src = notification.image;
  card.appendChild(image);

  // Create the card-body container element
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Create the p element
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
  picture.innerHTML = `
            ${
              notification.picture
                ? `<img src="${notification.picture}" />`
                : ""
            }
        `;
  cardBody.appendChild(picture);

  // Append the cardBody container to the card container element
  card.appendChild(cardBody);
  // Append the card container to the main container element
  main.appendChild(card);
});

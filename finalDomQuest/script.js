import "./style.css";

const cards = document.querySelector(".cards");

const animalsToAdopt = [
  {
    name: "Lucky",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tiffanie_at_cat_show.jpg/199px-Tiffanie_at_cat_show.jpg"
  },
  {
    name: "Symba",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tiffany4_%282018%3B_cropped_2023%29.jpg/240px-Tiffany4_%282018%3B_cropped_2023%29.jpg"
  },
  {
    name: "Léo",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Norskskogkatt_Evita_3.JPG/245px-Norskskogkatt_Evita_3.JPG"
  },
  {
    name: "Milo",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/CyprusShorthair.jpg/320px-CyprusShorthair.jpg"
  },
  {
    name: "Charly",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Highlander-7.jpg/293px-Highlander-7.jpg"
  }
];

function createCard(animal) {
  const { picture, name } = animal;

  const card = document.createElement("figure");
  card.classList.add("card");
  cards.appendChild(card);

  const cardImg = document.createElement("img");
  cardImg.src = picture;
  cardImg.alt = name;
  cardImg.classList.add("card-img");
  card.appendChild(cardImg);

  // Step2:

  // Create the cardBody (figcaption), add the class card-body and add it to the card
  const cardBody = document.createElement ("figcaption");
  cardBody.classList.add ("card.body");
  card.appendChild(cardBody);


  // Create the cardTitle h2, add the class card-title,
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  // set the text inside the tag to the "title" parameter of this function
  cardTitle.textContent = `${animal.name}`
  // and add it to the cardBody
  cardBody.appendChild(cardTitle)

  // Create the cardButton button, add the class card-button,
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  // set the text inside the tag to be "Adopt Now"
  cardButton.textContent = "Adopt now";
  // and add it to the cardBody
  cardBody.appendChild(cardButton);
  // Step 3: Listen for click events on the cardButton button,
  // and run an alert when the button is clicked
  cardButton.addEventListener('click' , function(){
    alert(`${animal.name} adopted !`)
  })
}

/* Step 1: Use forEach instead of for-loop to iterate over animalsToAdopt and create cards */
animalsToAdopt.forEach ((animal) => createCard(animal));





























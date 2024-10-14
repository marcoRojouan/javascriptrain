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


  const cardBody = document.createElement ("figcaption");
  cardBody.classList.add ("card.body");
  card.appendChild(cardBody);


  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = `${animal.name}`
  cardBody.appendChild(cardTitle)

  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.textContent = "Adopt now";
  cardBody.appendChild(cardButton);
  cardButton.addEventListener('click' , function(){
    alert(`${animal.name} adopted !`)
  })
}

animalsToAdopt.forEach ((animal) => createCard(animal));






























function getUserInput(question) {
  return prompt(question);
}

let isConfirmed = false;

function getUserResult(response, a, b){
  return response !== a && response !== b ;
}

while (!isConfirmed) {
  const drink = getUserInput("Thé ou Café ?");

  if (!drink) {
    continue;
  }

  const formattedDrink = drink.trim().toLowerCase();

  if (getUserResult(formattedDrink, "café", "thé")) {
    continue;
  }

  const sugar = getUserInput("Sucre ? Oui/Non");

  if (!sugar) {
    continue;
  }

  const formattedSugar = sugar.trim().toLowerCase();

  if (getUserResult(formattedSugar, "oui", "non")) {
    continue;
  }

  const wantMilk = getUserInput("Voulez-vous du lait? Oui / Non");
  if (!wantMilk) {
    continue;
  }

  const formattedWantMilk = wantMilk.trim().toLowerCase();

  if (getUserResult(formattedWantMilk, "oui", "non")) {
    continue;
  }

  let formattedMilk = "";

  if (formattedWantMilk === "oui") {
    const milk = getUserInput("Lait ? Vache/Végétal");

    if (!milk) {
      continue;
    }

    formattedMilk = milk.trim().toLowerCase();

    if (getUserResult(formattedMilk, "vache", "végétal")) {
      continue;
    }
  }

  alert(
    `Vous avez commandé du ${
      formattedDrink === "café" ? "café ☕️" : "thé 🫖"
    } ${formattedSugar === "oui" ? "avec du" : "sans"} sucre ${
      formattedMilk ? `et du lait de ${formattedMilk}` : ""
    }`
  );

  isConfirmed = true;
}
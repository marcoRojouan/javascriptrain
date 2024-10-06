function getUserInput(question) {
  return prompt(question);
}
 function getUserResult(userResult) {
  
}


let isConfirmed = false;

while (!isConfirmed) {
  // DRINK
  const drink = getUserInput("Thé ou Café ?");

  if (!drink) {
    continue;
  }

  let formattedResult = drink.trim().toLowerCase();

  if (formattedResult !== "thé" && formattedResult !== "café") {
    continue;
  }

  const formattedDrink = formattedResult;

  //      SUGAR

  const sugar = getUserInput("Sucre ? Oui/Non");

  if (!sugar) {
    continue;
  }

  formattedResult = sugar.trim().toLowerCase();

  if (formattedResult !== "oui" && formattedResult !== "non") {
    continue;
  }
  const formattedSugar = formattedResult;

  //        MILK
  const wantMilk = getUserInput("Voulez-vous du lait? Oui / Non");

  if (!wantMilk) {
    continue;
  }

  formattedResult = wantMilk.trim().toLowerCase();

  if (formattedResult !== "oui" && formattedResult !== "non") {
    continue;
  }
  const formattedWantMilk = formattedResult;

  let formattedMilk = "";

  if (formattedWantMilk === "oui") {
    const milk = getUserInput("Lait ? Vache/Végétal");

    if (!milk) {
      continue;
    }

    formattedResult = milk.trim().toLowerCase();

    if (formattedResult !== "vache" && formattedResult !== "végétal") {
      continue;
    }
  }
  formattedMilk = formattedResult;

  alert(
    `Vous avez commandé du ${
      formattedDrink === "café" ? "café ☕️" : "thé 🫖"
    } ${formattedSugar === "oui" ? "avec du" : "sans"} sucre ${
      formattedMilk ? `et du lait de ${formattedMilk}` : ""
    }`
  );

  isConfirmed = true;
}

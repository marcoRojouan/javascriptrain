function getUserInput(question) {
  return prompt(question);
}
let formattedResult
let isConfirmed = false;


function getUserResult(a, b){
  if (formattedResult !== a && formattedResult !== b){
    isConfirmed = true
  }
}


while (!isConfirmed) {
  // DRINK
  const drink = getUserInput("Thé ou Café ?");

  if (!drink) {
    continue;
  }

  formattedResult = drink.trim().toLowerCase();

  getUserResult("thé", "café");

  const formattedDrink = formattedResult;

  //      SUGAR

  const sugar = getUserInput("Sucre ? Oui/Non");

  if (!sugar) {
    continue;
  }

  formattedResult = sugar.trim().toLowerCase();

  getUserResult("oui", "non");

  const formattedSugar = formattedResult;

  //        MILK
  const wantMilk = getUserInput("Voulez-vous du lait? Oui / Non");

  if (!wantMilk) {
    continue;
  }

  formattedResult = wantMilk.trim().toLowerCase();

  getUserResult("oui", "non");

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

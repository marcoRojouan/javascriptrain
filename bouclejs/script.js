const numberOne = 1;
const numberTwo = 3;
const numberThree = 2;

if (numberOne == numberTwo &&
    numberTwo == numberThree
) {
  console.log("Les trois variables sont identiques");
} else if (
  numberOne == numberTwo ||
  numberOne == numberThree ||
  numberTwo == numberThree
) {
  console.log("Deux variables sont identiques");
} else if (
  numberOne != numberTwo &&
  numberOne != numberThree &&
  numberTwo != numberThree
) {
  console.log("Toutes les variables sont differentes");
}

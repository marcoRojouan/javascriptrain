const billyThcecat = {
    catName: "Billy",
    color: "blue",
    favouriteFood: ["croquette", "paté", "thon"],
    isHungry: true,
    meow: function (){
        console.log(`Meowwww`)
    }
};

const selectedProperty = prompt(`Select a property`);
console.log(billyThecat[selectedProperty]);


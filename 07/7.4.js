const readlineSync = require("readline-sync");

let Manager = () =>
{
    let afficher = () => {
        pizzas.forEach(function (item, index) {
            console.log(index, item);
        });
    }
    let userChoice = 0;
    let pizzas = [];
    do {
        console.log("Hello! Welcome to the Pizza Flavors Manager.\n" +
            "\n" +
            "    Please choose your actions:\n" +
            "\n" +
            "    1 - List all the pizza flavors\n" +
            "    2 - Add a new pizza flavor\n" +
            "    3 - Remove a pizza flavor\n" +
            "    4 - Exit this program\n")
        userChoice = parseInt(readlineSync.question("Enter your action's number:"));
        let Flavor = ""
        switch (userChoice)
        {
            case 1:
                afficher()
                break
            case 2:
                Flavor = readlineSync.question("Quelle saveur voulez-vous ajouter?")
                pizzas.push(Flavor)
                break
            case 3:
                afficher()
                Flavor = readlineSync.question("Quelle saveur voulez-vous Enlever?")
                pizzas.splice(Flavor, 1)
                break
        }
    }while (userChoice !== 4)

}


Manager()

"use strict";
//Array för monster
const monsters = [
    {
        name: "Blarg",
        type: "Undead",
        color: "Blue",
    },
    {
        name: "Couscus",
        type: "Animal",
        color: "Brown",
    },
    {
        name: "Bulgur",
        type: "Homunculus",
        color: "Red",
    },
    {
        name: "Bulgur",
        type: "Homunculus",
        color: "Black",
    },
    {
        name: "Bulgur",
        type: "Undead",
        color: "Green",
    },
    {
        name: "Bulgur",
        type: "Homunculus",
        color: "Blue",
    },
];
//Array för
const selectableColors = ["Choose", "Black", "Brown", "Blue", "Red", "Green"];
const selectableMonsters = ["Undead", "Animal", "Homunculus"];

//Räknare för typ
function typeCounter(type) {
    //först loopa listan med typer
    let monstersWithMatchingType = 0;
    for (let i = 0; i < monsters.length; i++) {
        if (monsters[i].type === type) {
            monstersWithMatchingType++;
        }
    }
    return monstersWithMatchingType;
}
//Räknare för färg
function colorCounter(color) {
    //först loopa listan med färger
    let monstersWithMatchingColor = 0;
    for (let i = 0; i < monsters.length; i++) {
        if (monsters[i].color === color) {
            monstersWithMatchingColor++;
        }
    }
    return monstersWithMatchingColor;
}
//En funktion som skriver ut "statistik" för antalet monster med samma typ och färg
function printStatistics() {
    let numberContainer = document.getElementById("number-of-section");
    numberContainer.innerHTML = "";

    for (let i = 0; i < selectableColors.length; i++) {
        const numberOfColorsDiv = document.createElement("div");
        const numberOfTypesDiv = document.createElement("div");
        const numberOfColorsParagaf = document.createElement("p");
        const numberOfTypesParagraf = document.createElement("p");

        numberOfTypesDiv.setAttribute(
            "class",
            "number-of",
            "id",
            selectableMonsters[i],
            "value",
            selectableMonsters[i]
        );

        numberOfColorsDiv.setAttribute(
            "class",
            "number-of",
            "id",
            selectableColors[i],
            "value",
            selectableColors[i]
        );
        let monstersWithMatchingColor = colorCounter(selectableColors[i]);
        let monstersWithMatchingType = typeCounter(selectableMonsters[i]);
        numberOfColorsParagaf.innerHTML = `${selectableColors[i]}`;
        numberOfColorsParagaf.innerText = `Number of ${selectableColors[i]}`;
        numberOfTypesParagraf.innerHTML = `${selectableMonsters[i]}`;
        numberOfTypesParagraf.innerText = `Number of ${selectableMonsters[i]}`;

        numberOfColorsDiv.innerHTML = monstersWithMatchingColor;
        numberOfColorsDiv.setAttribute(
            "value",
            selectableColors[i],
            "class",
            selectableColors[i]
        );
        numberOfTypesDiv.innerHTML = monstersWithMatchingType;
        numberOfTypesDiv.setAttribute(
            "value",
            selectableMonsters[i],
            "class",
            selectableMonsters[i]
        );
        numberContainer.appendChild(numberOfColorsDiv);
        numberContainer.appendChild(numberOfTypesDiv);
        numberOfTypesDiv.appendChild(numberOfTypesParagraf);
        numberOfColorsDiv.appendChild(numberOfColorsParagaf);
    }
}
//Filter för colors
function printColorsForFilter() {
    let colorContainerFilter = document.getElementById("color-selector");
    colorContainerFilter.innerHTML = "";
    for (let i = 0; i < selectableColors.length; i++) {
        const color = document.createElement("option");
        //hämtar antalet monster med matchande färg
        //Skriv ut färgen med antal monster med färgen
        color.innerHTML = `${selectableColors[i]}`;
        color.setAttribute("value", selectableColors[i]);
        colorContainerFilter.appendChild(color);
    }
}
//
function printColorsForForm() {
    let colorContainerForm = document.getElementById("form-color");
    colorContainerForm.innerHTML = "";
    for (let i = 0; i < selectableColors.length; i++) {
        const colorForm = document.createElement("option");
        colorForm.setAttribute("id", selectableColors[i]);
        colorForm.innerHTML = selectableColors[i];
        colorContainerForm.appendChild(colorForm);
    }
}

function printMonsters(monstersToPrint) {
    let container = document.getElementById("monster-cards");
    //Här tömmer vi div på monster items
    container.innerHTML = "";
    for (let i = 0; i < monstersToPrint.length; i++) {
        // const editBtn = document.createElement("button");
        // editBtn.setAttribute("class", "edit");
        const newCard = document.createElement("div");
        newCard.classList =
            "card " + monstersToPrint[i].color + " " + monstersToPrint[i].type;
        const cardlist = document.createElement("ul");

        const nameli = document.createElement("li");
        // editBtn.innerHTML = "Edit";
        nameli.innerHTML = monstersToPrint[i].name;

        const typeli = document.createElement("li");
        typeli.innerHTML = monstersToPrint[i].type;

        const colorli = document.createElement("li");
        colorli.innerHTML = monstersToPrint[i].color;

        container.appendChild(newCard);
        // newCard.appendChild(editBtn);
        newCard.appendChild(cardlist);
        cardlist.appendChild(nameli);
        cardlist.appendChild(typeli);
        cardlist.appendChild(colorli);
    }
}

const modalWindow = document.getElementById("modal");
const monsterForm = document.getElementById("monster-form");

//flytta detta till css filen?
monsterForm.style.display = "none";
modalWindow.style.display = "none";

const closeMonsterForm = document.getElementById("close-button");
const submitNewMonster = document.getElementById("submit-new-monster");
const submitEditedMonster = document.getElementById("submit-edited-monster");
const addMonsterButton = document.getElementById("add-monster-button");

function hideAddMonsterButton() {
    document.getElementById("add-monster-button").style.visibility = "hidden";
}

addMonsterButton.addEventListener("click", () => {
    //göm lägg till monster knappen när man klickar på den
    if (
        modalWindow.style.display === "none" &&
        monsterForm.style.display === "none"
    ) {
        modalWindow.style.display = "block";
        monsterForm.style.display = "block";
    } else {
        modalWindow.style.display = "none";
        monsterForm.style.display = "none";
    }
});
closeMonsterForm.addEventListener("click", () => {
    //visa monsterknappen
    if (
        modalWindow.style.display === "block" &&
        monsterForm.style.display === "block"
    ) {
        modalWindow.style.display = "none";
        monsterForm.style.display = "none";
    } else {
        modalWindow.style.display = "block";
        monsterForm.style.display = "block";
    }
    //göm formuläret
    document.getElementById("add-monster-button").style.visibility = "visible";
});

submitNewMonster.addEventListener("click", (event) => {
    event.preventDefault();
    let newMonsterName = document.getElementById("monster-name").value;
    let newMonsterType = document.getElementById("type-picker").value;
    let newMonsterColor = document.getElementById("form-color").value;
    if (newMonsterName == "" || newMonsterColor == "Choose") {
        alert("Var god och fyll i all information");
    } else {
        let newMonster = {
            name:
                newMonsterName.charAt(0).toUpperCase() +
                newMonsterName.slice(1),
            type: newMonsterType,
            color: newMonsterColor,
        };
        alert(newMonsterName + " was added to the list!");
        monsters.push(newMonster);
        printMonsters(newMonster);
        filterMonsters();
        colorCounter();
        typeCounter();
    }
    document.getElementById("monster-form").reset();
});

//----------------filtrera korten--------------------

//vad vi filtrerat på
let filters = { type: "", color: "" };
const undeadBtn = document.getElementById("undead");
const animalBtn = document.getElementById("animal");
const homBtn = document.getElementById("homunculus");
// const resetBtn = document.getElementById("reset");
const colorSelect = document.getElementById("color-selector");

//om man trycker på en typ
undeadBtn.addEventListener("click", (event) => {
    event.preventDefault();
    //byt ut typen i filter objektet
    filters.type = event.target.value;
    //kallar på funktion som filtrerar monsters
    filterMonsters();
});
animalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    //byt ut typen i filter objektet
    filters.type = event.target.value;
    //kallar på funktion som filtrerar monsters
    filterMonsters();
});
homBtn.addEventListener("click", (event) => {
    event.preventDefault();
    //byt ut typen i filter objektet
    filters.type = event.target.value;
    //kallar på funktion som filtrerar monsters
    filterMonsters();
});
// resetBtn.addEventListener("click");

//om man trycker på color
colorSelect.addEventListener("click", (event) => {
    event.preventDefault();

    //om man valt choose sätter vi filtrets color till tom
    if (colorSelect.value == "Choose") {
        filters.color = "";
    } else {
        //byt ut color i filter objektet
        filters.color = colorSelect.value;
    }

    //kallar på funktion som filtrerar monsters
    filterMonsters();
});

//en funktion som filtrerar alla monster med våra nya värden
function filterMonsters() {
    let filteredMonsters = monsters;

    //om filter.color inte är tom eller är choose
    //filtrera på färg
    if (filters.color !== "") {
        filteredMonsters = filteredMonsters.filter(
            (monster) => monster.color === filters.color
        );
    }

    //om filter.type inte är tom
    //filtrera på typ
    if (filters.type !== "") {
        filteredMonsters = filteredMonsters.filter(
            (monster) => monster.type === filters.type
        );
    }

    //kör printMonsters skicka med vår nya filtrerade lista med monsters
    printMonsters(filteredMonsters);
}

//Skriv ut färgnamn för filter och formulär, sedan skriv ut alla monster
printColorsForFilter();
printColorsForForm();
printMonsters(monsters);
//Skriv ut antalet per monster
printStatistics();


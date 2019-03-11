"use strict";
//1.zadatak
function reverseSentence(sentenceToReverse) {
    return sentenceToReverse.split("").reverse().join("");
};
function reverseWords(wordsToReverse) {
    return reverseSentence(wordsToReverse).split(" ").reverse().join(" ");
}
function mostRepeatedLetter(sentenceToCheck) {

    var lettersWithCount = {};

    for (let i in sentenceToCheck) {
        if (lettersWithCount[sentenceToCheck[i]] == null)
            lettersWithCount[sentenceToCheck[i]] = 0;
        lettersWithCount[sentenceToCheck[i]]++;
    }
    var largestCount = 0;
    var mostRepeatedLetter1 = "";
    for (let i in lettersWithCount) {
        if (largestCount < lettersWithCount[i]) {
            largestCount = lettersWithCount[i];
            mostRepeatedLetter1 = i;
        }

    }
    return mostRepeatedLetter1;
}
function capitalizeFirstLetter(sentenceToCapitalize) {

    sentenceToCapitalize = sentenceToCapitalize.replace(/\s+/g, " ").toLowerCase().split(" ");

    for (let i in sentenceToCapitalize) {
        sentenceToCapitalize[i] = sentenceToCapitalize[i].charAt(0).toUpperCase() + sentenceToCapitalize[i].substring(1);
    }
    return sentenceToCapitalize.join(" ");

}

let menuAnswer;
do {
    menuAnswer = prompt("Choose ordinal number for wanted algorithm\n1.« Reverse sentence.\n"
        + "2.« Most repeated letter.\n3.« Capitalize(Jaden Smith).\n4.« Reverse letters.\nKRAJ « Close this annoying window");
    if (menuAnswer === null) break;
    menuAnswer = menuAnswer.replace(/\s+/g, "");
    if (menuAnswer === "1") {
        let sentenceToReverse = prompt("Type sentence to reverse:");
        if (sentenceToReverse === null) break;
        alert(reverseSentence(sentenceToReverse));
    }
    else if (menuAnswer === "2") {
        let sentenceToCheckRepeatedLetters = prompt("Type sentence to check most repeated letter:");
        if (sentenceToCheckRepeatedLetters === null) break;
        alert(mostRepeatedLetter(sentenceToCheckRepeatedLetters));
    }
    else if (menuAnswer === "3") {
        let sentenceToCapitalize = prompt("Type sentence to capitalize:");
        if (sentenceToCapitalize === null) break;
        alert(capitalizeFirstLetter(sentenceToCapitalize));
    }
    else if (menuAnswer === "4") {
        let wordsToReverse = prompt("Type sentence to reverse its words:");
        if (wordsToReverse === null) break;
        alert(reverseWords(wordsToReverse));
    }
    else if (menuAnswer.toUpperCase() == "KRAJ")
        var confirmEnd = confirm("Press ok to confirm, cancel to return!");

    else
        alert("Invalid key, try again");

}
while (menuAnswer.toUpperCase() !== "KRAJ" || !confirmEnd);

//2.zadatak.
let array = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male"
    },
    {
        name: "C-3PO",
        height: 167,
        mass: 75,
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a"
    },
    {
        name: "R2-D2",
        height: 96,
        mass: 32,
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a"
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male"
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female"
    }];

function sortByHeight(array) {
    array.sort((function compareHeights(a, b) {
        return a.height - b.height;
    }))
};

function totalWeight(array) {
    var totalMass = 0;
    array.forEach(function (starWarsCharacter) {
        totalMass += starWarsCharacter.mass;
    })
    let averageMass = totalMass / (array.length);
    return averageMass;
}
sortByHeight(array);
console.log("Star wars characters ordered by body height,lowest first:");
console.log(array);
console.log("Total body mass of given Star Wars characters:" + totalWeight(array));


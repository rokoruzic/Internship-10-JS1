"use strict";
function ReverseSentence(sentenceToReverse) {
    return sentenceToReverse.split("").reverse().join("");
};
function ReverseWords(wordsToReverse) {
    return ReverseSentence(wordsToReverse).split(" ").reverse().join(" ");
}
function MostRepeatedLetter(sentenceToCheck) {

    var lettersWithCount = {};

    for (let i in sentenceToCheck) {
        if (lettersWithCount[sentenceToCheck[i]] == null)
            lettersWithCount[sentenceToCheck[i]] = 0;
        lettersWithCount[sentenceToCheck[i]]++;
    }
    var largestCount = 0;
    var mostRepeatedLetter = "";
    for (let i in lettersWithCount) {
        if (largestCount < lettersWithCount[i]) {
            largestCount = lettersWithCount[i];
            mostRepeatedLetter = i;
        }

    }
    return mostRepeatedLetter;
}
function CapitalizeFirstLetter(sentenceToCapitalize)
{
    
    
}


let menuAnswer;
do {
    menuAnswer = prompt("Choose ordinal number for wanted algorithm\n1.« Reverse sentence.\n"
        + "2.« Most repeated letter.\n3.« Capitalize(Jaden Smith).\n4.« Reverse letters.\nKRAJ « Close this annoying window");
        if(menuAnswer===null)break;
menuAnswer = menuAnswer.replace(/\s+/g, ""); 
if(menuAnswer==="1")
{
    let sentenceToReverse = prompt("Type sentence to reverse:");
    if(sentenceToReverse===null)break;
             alert(ReverseSentence(sentenceToReverse));
}
else if(menuAnswer==="2")
{
    let sentenceToCheckRepeatedLetters = prompt("Type sentence to check most repeated letter:");
    if(sentenceToCheckRepeatedLetters===null)break;
    alert(MostRepeatedLetter(sentenceToCheckRepeatedLetters));
}
else if(menuAnswer==="3")
{
    let sentenceToCapitalize = prompt("Type sentence to capitalize:");
    if(sentenceToCapitalize===null)break;
    alert(CapitalizeFirstLetter(sentenceToCapitalize));
}
else if(menuAnswer==="4")
{
    let wordsToReverse = prompt("Type sentence to reverse its words:");
            alert(ReverseWords(wordsToReverse));
}
else if(menuAnswer.toUpperCase()=="KRAJ")
   var confirmEnd= confirm("Press ok to confirm, cancel to return!");

else
    alert("Invalid key, try again");

   
}
while (menuAnswer.toUpperCase() !== "KRAJ" || !confirmEnd );


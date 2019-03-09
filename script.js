"use strict";
function ReverseSentence(sentenceToReverse){
return sentenceToReverse.split("").reverse().join("");
};
function ReverseWords(wordsToReverse){
return ReverseSentence(wordsToReverse).split(" ").reverse().join(" ");
}
let menuAnswer = prompt("Choose ordinal number for wanted algorithm\n1.« Reverse sentence.\n"
    + "2.« Most repeated letter.\n3.« Capitalize(Jaden Smith).\n4.« Reverse letters.\nEND « End program");

console.log(menuAnswer);
switch (menuAnswer) {
    case "1":
    let sentenceToReverse=prompt("Type sentence to reverse:");
    alert(ReverseSentence(sentenceToReverse));
        break;
    case "2":
        break;
    case "3":
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    case "4":
    let wordsToReverse = prompt("Type sentence to reverse its words:")
    alert(ReverseWords(wordsToReverse));

        break;
    case "END":
    console.log("idiot");
        break;
    default:
        console.log("Invalid key");
}

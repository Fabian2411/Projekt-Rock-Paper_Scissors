// console.log("test");

// // Wenn ein button Stein, Schere Papier geklickt wird dann ändere das erste fieldset
// function roundsPlayed() {
//     console.log("test1");
//     document.getElementById("howManyRounds").style.display = "none";
// }

// math random von 1-3 (33%) für Stein schere papier
// comp vs. input nutzer
// => Punkte
// => Loops für Anzahl der Runden
// if und else wer gewinnt?

// 1. variable runden
// 2. variable rock paper scissor
//3. variable computer eingabe
// 4. variable nutzer eingabe
// 5. variable vergelich comp & nutzer
// 6. variable Ergebnis


// function
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

// ************************************************


// Anass
// 1.
let rounds5 = document.getElementById("fiveRounds");
let rounds10 = document.getElementById("tenRounds");
let rounds15 = document.getElementById("fiveteenRounds");
let rounds20 = document.getElementById("twentyRounds");

let howManyRounds = () => {
    if (rounds5.checked == true){
        console.log(Number(rounds5.value));
    } else if (rounds10.checked == true){
        console.log(Number(rounds10.value));
    } else if (rounds15.checked == true){
        console.log(Number(rounds15.value));
    } else if(rounds20.checked == true){
        console.log(Number(rounds20.value));
    }
}


// 2
// let rock = document.getElementById("rock");
// let clickRock = () => {
//     console.log(rock.value)
//     return (rock.value);
// }

// let paper = document.getElementById("paper");
// let clickPaper = () => {
//     console.log(paper.value);
//     return (paper.value);
// }

// let scissors = document.getElementById("scissors");
// let clickScissors = () => {
//     console.log(scissors.value);
//     return (scissors.value);
// }
let computerChoice = () => {
    return Math.floor(Math.random() * 3);
}
console.log(computerChoice());


const clickGame = (userChoice) => {
    console.log(userChoice);
    let x = computerChoice()
    console.log(x);
    if (userChoice == x){
        console.log("draw");
    }   else{
        console.log("different");
    }
}


// 3

// (computerChoice());


// 4
// let compare = () => {
//     if (rock.value == 0 && computerChoice() == 0){
//         console.log("draw");
//     }
// }
// compare();

// function play()
// -> display none
// 
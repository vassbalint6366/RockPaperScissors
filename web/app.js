var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result>p");
const ko_div = document.getElementById("k");
const papir_div = document.getElementById("p");
const ollo_div = document.getElementById("o");

function getComputerChoice() {
    const choices = ['k', 'p', 'o'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "k") return "Kő";
    if (letter === "p") return "Papír";
    return "Olló";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = "A(z) " + convertToWord(userChoice) + " legyőzte a(z) " + convertToWord(computerChoice) + "t. Nyertél!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "A(z) " + convertToWord(computerChoice) + " legyőzte a(z) " + convertToWord(userChoice) + "t. Vesztettél!";
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = "A(z) " + convertToWord(computerChoice) + "(te) nem tudja legyőzni a " + convertToWord(userChoice) + "t(gép). Döntetlen!";
}







function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    switch (userChoice + computerChoice) {
        case "ko":
        case "pk":
        case "op":
            win(userChoice, computerChoice);
            break;
        case "ok":
        case "kp":
        case "po":
            lose(userChoice, computerChoice);
            break;
        case "kk":
        case "pp":
        case "oo":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    ko_div.addEventListener('click', function() {
        game("k");
    })
    
    papir_div.addEventListener('click', function() {
        game("p");
    })
    
    ollo_div.addEventListener('click', function() {
        game("o");
    })
}


main();






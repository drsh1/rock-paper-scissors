// (1) starting variables
let playerScore = 0;
let computerScore = 0;
let totalTurnsPlayed = 0;
let playerSelection = "Unknown";
let computerSelection = "Unknown";


// (2) function to generate randomly computer's choice
let possibleOutcomes = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    return possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
}



// (3) function to play the round of the game and print results
function playRound(playerSelection, computerSelection) {
    
    totalTurnsPlayed ++;  // total turns played +1
    
    switch (true) {
        case playerSelection === computerSelection:
            playerScore ++;
            computerScore ++;
            document.getElementById("turnResult").textContent = "Nobody expected that, but it is a TIE!";
            break;
        
        case playerSelection === "Rock" && computerSelection === "Paper":
            computerScore ++;
            document.getElementById("turnResult").textContent = "Your ROCK is easily surrounded by computer's PAPER, you LOSE :(";
            break;

        case playerSelection === "Rock" && computerSelection === "Scissors":
            playerScore ++;
            document.getElementById("turnResult").textContent = "Your ROCK shatters the computer's SCISSORS, you WIN :)";
            break;

        case playerSelection === "Paper" && computerSelection === "Rock":
            playerScore ++;
            document.getElementById("turnResult").textContent = "Your PAPER wraps around the computer's ROCK with ease, you WIN :)";
            break;

        case playerSelection === "Paper" && computerSelection === "Scissors":
            computerScore ++;
            document.getElementById("turnResult").textContent = "Your PAPER stands no chance to computer's SCISSORS sharpness, you LOSE :(";
            break;

        case playerSelection === "Scissors" && computerSelection === "Rock":
            computerScore ++;
            document.getElementById("turnResult").textContent = "Your SCISSORS were blunted by computer's ROCK in no time, you LOSE :(";
            break;

        case playerSelection === "Scissors" && computerSelection === "Paper":
            playerScore ++;
            document.getElementById("turnResult").textContent = "Your SCISSORS cut through computer's PAPER like a knife through butter, you WIN :)";
            break;
        
        default:
            document.getElementById("turnResult").textContent = "This set of choices is unknown, is that even possible?";
            break;
    }
}

// (4) play the round of the game!
// find out and print player's selection and computer selection
let buttons = document.querySelectorAll("button")


// on button click, play one round of the game and print everything
buttons.forEach(button => {
  button.addEventListener('click', () => { 
    
    playerSelection = button.textContent;
    document.getElementById("playerSelection").textContent = playerSelection + " was selected!" // print

    computerSelection = computerPlay();
    document.getElementById("computerSelection").textContent = computerSelection + " was selected!" // print

    playRound(playerSelection, computerSelection);
    // textOutput3 prints inside the function
   
    document.getElementById("totalTurnsPlayed").textContent = totalTurnsPlayed
    document.getElementById("playerScore").textContent = playerScore
    document.getElementById("computerScore").textContent = computerScore
  })
})
const choises = ['Rock', 'Paper', 'Scissors'];

function game() {
    let score = { computer: 0, player: 0 };
    for (let i = 0; i < 5; i++) {
        let computerSelection = choises[Math.floor(Math.random() * choises.length)];
        let playerSelection = prompt("Rock, paper, scissors ?");
        
        while (!choises.map(v => v.toLowerCase()).includes(playerSelection.toLowerCase())) {
            alert("Invalid input. Try again!");
            playerSelection = prompt("Rock, paper, scissors ?"); 
        }
        let winner = playRound(playerSelection, computerSelection);
        if (winner === 0){ 
            score.computer++;
            console.log("Computer won!"); 
        } else if (winner === 1) { 
            score.player++;
            console.log("Player won!");
        } else {
            console.log("Draw!");
            i--;
        }
    }
    score.computer > score.player ? console.log("Computer won the game!") : console.log("Player won the game!");
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'draw';
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return 1;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return 0;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return 1;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Scissors") {
        return 0;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return 0;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return 1;
    } else {
        return -1;
    }
}
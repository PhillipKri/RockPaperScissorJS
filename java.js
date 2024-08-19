
function rand(){
    return Math.floor(Math.random()*3);
}

function getComputerChoice(){
    let num = rand();
    
    return num == 0 ? "rock"
        :  num == 1 ? "paper"
        :  "scissor";
}
function getHumanChoice(){
    let sign = prompt('What do you choose?');

    return sign.toLowerCase() === 'rock' ? "rock"
        :  sign.toLowerCase() === 'paper' ? "paper"
        :  sign.toLowerCase() === 'scissor' ? "scissor"
        : getHumanChoice();
}
let computerScore = 0;
let humanScore = 0;
function update(){
    return humanResult.textContent = 'Players score: ' + String(humanScore), computerResult.textContent = 'Computers score: ' + String(computerScore);
}
function check(){
    if(computerScore == 5 && humanScore <5){
        final.style.color = 'red'
        final.textContent = "You lost!!";
        // console.log('You lost!!')
        humanScore = 0;
        computerScore = 0;
        // final.textContent = '';update();
        return;
    }
    if(humanScore == 5 && computerScore <5){
        final.style.color = 'green';
        final.textContent = 'You won!!';
        // console.log('You won!!')
        humanScore = 0;
        computerScore = 0;
        // final.textContent = '';
        return;
    } 
    return; 
}

function playRound(humanChoice, computerChoice){
            if(humanChoice == computerChoice) {
                tempVal.textContent = 'It is a draw!';
                update();
                // console.log('It is a draw!');
                return;
            } else if(humanChoice == 'rock' && computerChoice == 'paper'){
                computerScore++;
                update();
                check();
                tempVal.textContent = 'You lose! Paper beats Rock';
                return;
            } else if(humanChoice == 'rock' && computerChoice == 'scissor'){
                humanScore++;
                update();
                check();
                tempVal.textContent = 'You win! Rock beats Scissor';
                return;
            } else if(humanChoice == 'paper' && computerChoice == 'scissor'){
                computerScore++;
                update();
                check();
                tempVal.textContent = 'You lose! Scissor beats Paper';
                return;
            } else if(humanChoice == 'paper' && computerChoice == 'rock'){
                humanScore++;
                update();
                check();
                tempVal.textContent = 'You win! Paper beats Rock';
                return;
            } else if(humanChoice == 'scissor' && computerChoice == 'rock'){
                computerScore++;
                update();
                check();
                tempVal.textContent = 'You lose! Rock beats Scissor';
                return;
            } else if(humanChoice == 'scissor' && computerChoice == 'paper'){
                humanScore++;
                update();
                check();
                tempVal.textContent = 'You win! Scissor beats Paper';
                return;
            }
        }

const buttonList = document.querySelector(".container");
const humanResult = document.querySelector("#humanResult");
const computerResult = document.querySelector("#computerResult");
const final = document.querySelector("#final");
const tempVal = document.querySelector("#temp");




buttonList.addEventListener('click', (e) => {
    let target = e.target;
    // humanResult.textContent = 'Players score: ' + String(humanScore);
    // computerResult.textContent = 'Computers score: ' + String(computerScore);
    // if(computerScore == 5 || humanScore == 5){
    //     final.textContent = '';
    // } 
    // console.log(target.id);
    check();
    switch(target.id) {
        case "rock":
            const robot = getComputerChoice();
            playRound(target.id,robot);
            break;
        case 'paper':
            const robot2 = getComputerChoice();
            playRound(target.id,robot2);
            break;
        case 'scissor':
            const robot3 = getComputerChoice();
            playRound(target.id,robot3);
            break;
        case 'reset':
            final.textContent = '';
            humanScore = 0;
            computerScore = 0;
            humanResult.textContent = '';
            computerResult.textContent = '';
            tempVal.textContent = '';
    }
});

// const ref = document.createElement('div.')


//  function playGame(){
//     let humanScore = 0;
    
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice){

//         if(humanChoice == computerChoice) {
//             console.log('It is a draw!');
//             return;
//         } else if(humanChoice == 'rock' && computerChoice == 'paper'){
//             computerScore++;
//             return console.log('You lose! Paper beats Rock');
//         } else if(humanChoice == 'rock' && computerChoice == 'scissor'){
//             humanScore++;
//             return console.log('You win! Rock beats Scissor');
//         } else if(humanChoice == 'paper' && computerChoice == 'scissor'){
//             computerScore++;
//             return console.log('You lose! Scissor beats Paper');
//         } else if(humanChoice == 'paper' && computerChoice == 'rock'){
//             humanScore++;
//             return console.log('You win! Paper beats Rock');
//         } else if(humanChoice == 'scissor' && computerChoice == 'rock'){
//             computerScore++;
//             return console.log('You lose! Rock beats Scissor');
//         } else if(humanChoice == 'scissor' && computerChoice == 'paper'){
//             humanScore++;
//             return console.log('You win! Scissor beats Paper');
//         }
//     }

//     for (let i = 0; i < 5 ; ++i){
//         const human = getHumanChoice();
//         const robot = getComputerChoice();

//         console.log("Player chose: ", human);
//         console.log("Robot chose: ", robot);
        
//         playRound(human,robot);


        
//         console.log('Human: ', humanScore);
//         console.log('Robot: ', computerScore);
//     }

//     console.log('The game is finished:');
//     return humanScore > computerScore ? 'You won!'
//         : humanScore < computerScore ? 'You lost!'
//         : 'It is a draw'
    
    
// }

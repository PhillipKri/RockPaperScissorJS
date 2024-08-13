

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    
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



function playGame(){
    let humanScore = 0;
    
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

        if(humanChoice == computerChoice) {
            console.log('It is a draw!');
            return;
        } else if(humanChoice == 'rock' && computerChoice == 'paper'){
            computerScore++;
            return console.log('You lose! Paper beats Rock');
        } else if(humanChoice == 'rock' && computerChoice == 'scissor'){
            humanScore++;
            return console.log('You win! Rock beats Scissor');
        } else if(humanChoice == 'paper' && computerChoice == 'scissor'){
            computerScore++;
            return console.log('You lose! Scissor beats Paper');
        } else if(humanChoice == 'paper' && computerChoice == 'rock'){
            humanScore++;
            return console.log('You win! Paper beats Rock');
        } else if(humanChoice == 'scissor' && computerChoice == 'rock'){
            computerScore++;
            return console.log('You lose! Rock beats Scissor');
        } else if(humanChoice == 'scissor' && computerChoice == 'paper'){
            humanScore++;
            return console.log('You win! Scissor beats Paper');
        }
    }

    for (let i = 0; i < 5 ; ++i){
        const human = getHumanChoice();
        const robot = getComputerChoice();

        console.log("Player chose: ", human);
        console.log("Robot chose: ", robot);
        
        playRound(human,robot);


        
        console.log('Human: ', humanScore);
        console.log('Robot: ', computerScore);
    }

    console.log('The game is finished:');
    return humanScore > computerScore ? 'You won!'
        : humanScore < computerScore ? 'You lost!'
        : 'It is a draw'
    
    
}

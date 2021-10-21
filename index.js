
     
      // create gameRound and initilize it with zero
      let gameRound = 1;
     // create userScore variable and assign it zero
      let userScore =0;
      // create computerScore variable and assign  it zero;
      let computerScore = 0;
      // create function game
     function randomGenerator(arrayLen) {
        let theRandomNumber = Math.floor(Math.random() * arrayLen) ;
        
        return theRandomNumber;
      }

      function computerPlay() {
        // create choices varible with assigt it a list with the
        //following values [Rock,Papper, Scisors]
        let choices = ["rock", "paper", "scissors"];
        // create a randomNumber var and assign it the ruturn value of randomGenerator(choices.leng -1)
        let randomNumber = randomGenerator(choices.length)
        // return the choice with random index
        return choices[randomNumber];
      }

      
      function playRound(userSelection, ComputerSelection) {
        // create message variable
        let message =''
        
        // compares both selections if the are the same
        if(userSelection === ComputerSelection)
        {
           
        // assign message variable 'oops it is a draw'
        message = 'oops! it is a draw'
        
        }
        //rock, paper or scissors
        // rock agains scissors - rock wins (user wins)
        else if(userSelection === 'rock' && ComputerSelection==='scissors')
        {
        // assign message variable 'Oh!!! you beat the computer. rock beats scissors'
        message = `Oh!!! you beat the computer ${userSelection} beats ${ComputerSelection}}`
        // increment userWins variable
        userScore++;
     
        }
        // paper agains rock  - paper wins
       else if(userSelection === 'paper' && ComputerSelection === 'rock')
        {
        
        // assign message variable 'Oh!!! you beat the computer. paper beats rock'
        message = `Oh!!! you beat the computer ${userSelection} beats ${ComputerSelection}}`
        // increment userWins variable
        userScore++;
        }
        // scissors agains paper - scissors wins
        else if(userSelection ==='scissors' && ComputerSelection === 'paper')
        {
       
        // assign message variable 'Oh!!! you beat the computer.scisors beats papper'
        message = `Oh!!! you beat the computer ${userSelection} beats ${ComputerSelection}}`
        userScore++;
        }
        // else computer wins
        else {
        // assign message  hey computer was smart computer selection beats user
        
        message = message = `Oh!!! computer was smarter ${ComputerSelection} beats ${userSelection}}`
        // increment computerWinds counter;
        computerScore++;
        }
        // console the message
        console.log(message)
      }

      
     
      

      function game() {
        // create userSelection variable to hold value entered by the user
        let userSelection = prompt('enter your choice');
        userSelection = userScore.toLowerCase();
        
        // call computerPlayFunction and store the result in computer selection variable
        let computerSelection = computerPlay();
        // call playRound and pass userSelection and ComputerSelection as arguments and
        // and store the returned string into result variable
        playRound(userSelection, computerSelection)
       
       
        
        // if gameRound==5
        if(gameRound === 5)
        {
            // if userScore is greater than computerWins
            if(userScore > computerScore)
            {
        // console hurrah, you are genius to beat the computer userScore // computerScore
        console.log(`hurrah! you are genius. you beat the computer ${userScore} / ${computerScore}`)
            }
        // if computerWins > userWins
        else if(computerScore > userScore)
        {
        // console computer really won the game computerScore/userScore
        console.log(`computer really won the game ${computerScore} / ${userScore}`)
        }
        // else it is draw
        else
        {
        // exit game() Function
        console.log('finally its a draw')
        }
        }
      
        // increment gameRound;
        gameRound++;
        
      }
for(let i=0; i<5; i++)
{
    game()
}


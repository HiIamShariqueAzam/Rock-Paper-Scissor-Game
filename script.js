let userScore = 0;
let computerScore = 0;

const msg = document.querySelector("#msg");
const UserScore = document.querySelector("#user-score");
const CompScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
      msg.innerText = "Game Was Draw!" ;
      msg.style.backgroundColor = "black"; 
}
const showWinner = (userWin, userChoice, compChoice) => {
      if(userWin)
      { 
        userScore++;
        UserScore.innerText = userScore;
        msg.innerText = `Congrats, You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
      }
      else
      {
        computerScore++;
        CompScore.innerText = computerScore;
        msg.innerText = `Opps, You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; 
      }
}
const playGame = (userChoice) =>{

       console.log("User Choice =", userChoice);
       const compChoice = genCompChoice();
       console.log("Cpomputer Choice =", compChoice);

       if(userChoice === compChoice)
       {
         drawGame();
       }
       else 
       {
        let userWin = true;
        if(userChoice === "Rock")
        {
            userWin = compChoice==="Paper"?false:true;
        }
        else if(userChoice === "Paper")
        {
            userWin = compChoice === "Rock"?true:false;
        }
        else
        {
            userWin = compChoice === "Rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);   
       }
}

const choices = document.querySelectorAll(".choice")
choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
          playGame(userChoice); 
    })
})
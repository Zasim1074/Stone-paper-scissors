let result = document.querySelector(".result");
let newgame = document.querySelector("#newgame");
let reset = document.querySelector("#reset");
const choices = document.querySelectorAll(".choice");
let yscore = document.querySelector("#scores1");
let cscore = document.querySelector("#scores2");

let p1score = 0;
let p2score = 0;
let userChoice;
let computerChoice;

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
//Generate computer's choice
    computerChoice  = genChoice();
    console.log("Computer choice = ", computerChoice);

    // results 
    if(userChoice === computerChoice){ 
        //Draw Game 
        drawGame();
    }
    else{
        //winner
        checkWinner(userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//Computer's chiice
const genChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
};

const drawGame = () => {
    msg.innerText = `Match draw, try agian.`;
    result.classList.remove("hide");
};

const checkWinner = () => {
    let userwin = true;
    if(userChoice === "rock"){
        //scissors, paper//
        userwin = computerChoice === "paper" ? false : true;
        showWinner(userwin);
    }
    else if(userChoice === "paper"){
        //rock, scissors
        userwin = computerChoice === "scissors" ? false : true;
        showWinner(userwin);
    }
    else{// userchoice = paper
        
        //rock, scissors
        userwin = computerChoice === "rock" ? false : true;
        showWinner(userwin);
    }
};

const showWinner = (userwin) => {
    let msg = document.querySelector("#msg");
    if(userwin){
        msg.innerText = `Congratulations! you won.
                        Computer Chose = ${computerChoice}`;
        result.classList.remove("hide");
        p1score++;
        yscore.innerText = `${p1score}`;
    }
    else{
        msg.innerText = `Oops! you lose.
        Computer Chose = ${computerChoice}`;
        result.classList.remove("hide");
        p2score++;
        cscore.innerText = `${p2score}`;
    }
};

const counting = () => {
    p1score = p2score = 0;
    yscore.innerText = `${p1score}`;
    cscore.innerText = `${p2score}`;
    result.classList.add("hide");
};

newgame.addEventListener("click", counting);
reset.addEventListener("click", counting);

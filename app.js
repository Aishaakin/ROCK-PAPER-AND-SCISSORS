// for div it's document.getElementId while to get a tag 
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// To make the div to say some text when clicked on. Make sure cursor elements it's in the CSS too

// rock_div.addEventListener('click', function() {
//     console.log("Hey you clicked on rock!");
// }
// )

// paper_div.addEventListener('click', function() {
//     console.log("Hey you clicked on paper!");
// }
// )

// scissors_div.addEventListener('click', function() {
//     console.log("Hey you clicked on scissors!");
// }
// )

function getComputerChoice() {
const choices = ['r', 'p', 's'];
// console.log(Math.random() * 3);  to make the computer chooses numbers between 0 and 1
// console.log(Math.floor(Math.random() * 3)); the math floor make the number in whole number not from 0. something
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

// A function that turn r,p,s to rock , paper, scissors

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}


function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win ! 🔥`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

// setTimeout(function() {console.log("Hello")}, 3000);    a function that makes Hello appear in 3 seconds

function lose(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord} . You lost... 💩`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}
function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals  ${convertToWord(computerChoice)} ${smallCompWord} . It's a draw 🥶`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    // console.log("USER WINS!");
    win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
      // console.log("COMPUTER WINS!"); 
      lose(userChoice, computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":     
    // console.log("IT IS A TIE!");
    draw(userChoice, computerChoice);
    break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}
main();
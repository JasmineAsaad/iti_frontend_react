var PlayerOneChoice = "Rock";
var PlayerTwoChoice = "scissors";

if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper") {
  console.log(`Player Two wins! ${PlayerTwoChoice} beats ${PlayerOneChoice}.`);
} else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") {
  console.log(`Player One wins! ${PlayerOneChoice} beats ${PlayerTwoChoice}.`);
} else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "scissors") {
  console.log(`Player One wins! ${PlayerOneChoice} beats ${PlayerTwoChoice}.`);
} else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Rock") {
  console.log(`Player Two wins! ${PlayerTwoChoice} beats ${PlayerOneChoice}.`);
} else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "scissors") {
  console.log(`Player Two wins! ${PlayerTwoChoice} beats ${PlayerOneChoice}.`);
} else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Paper") {
  console.log(`Player One wins! ${PlayerOneChoice} beats ${PlayerTwoChoice}.`);
} else if (PlayerOneChoice === PlayerTwoChoice) {
  console.log(`It's a tie! Both players chose ${PlayerOneChoice}.`);
}
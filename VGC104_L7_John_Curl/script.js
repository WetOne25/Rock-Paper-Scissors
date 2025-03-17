let playerWins = 0;
let cpuWins = 0;
let gameOver = false;
const options = ['rock', 'paper', 'scissors'];

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function playerChoice(choice) {
  if (gameOver) return;

  document.getElementById("player-choice").src = "file:///E:/CLASSES/VGC104/VGC104_L7_John_Curl/" + capitalize(choice) + ".png";

  const cpuChoice = options[Math.floor(Math.random() * options.length)];
  document.getElementById("cpu-choice").src = "file:///E:/CLASSES/VGC104/VGC104_L7_John_Curl/" + capitalize(cpuChoice) + ".png";

  let roundResult = "";
  if (choice === cpuChoice) {
    roundResult = "It's a draw!";
  } else if (
    (choice === "rock" && cpuChoice === "scissors") ||
    (choice === "paper" && cpuChoice === "rock") ||
    (choice === "scissors" && cpuChoice === "paper")
  ) {
    roundResult = "You win this round!";
    playerWins++;
  } else {
    roundResult = "You lose this round!";
    cpuWins++;
  }

  document.getElementById("score").innerText = "Player: " + playerWins + " | CPU: " + cpuWins;

  if (playerWins === 3 || cpuWins === 3) {
    gameOver = true;
    roundResult += (playerWins === 3) ? " Congratulations, you won the game!" : " Sorry, the CPU won the game!";
  }

  document.getElementById("result").innerText = roundResult;
}

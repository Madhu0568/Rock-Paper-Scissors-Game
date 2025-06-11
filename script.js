function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You Win!";
  } else {
    result = "You Lose!";
  }

  document.getElementById('playerChoice').textContent = `You chose: ${playerChoice}`;
  document.getElementById('computerChoice').textContent = `Computer chose: ${computerChoice}`;
  document.getElementById('gameResult').textContent = result;
}
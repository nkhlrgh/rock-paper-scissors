const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result-choice');
const possibleChoices = document.querySelectorAll('button');
let userChoice;

possibleChoices.forEach(possibleChoice => addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
}))
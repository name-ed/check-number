'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

/* -----------------------------my code ----------------------------------- */

function $(element) {
  return document.querySelector(element);
}

const checkNumber = function () {
  let userInputNumber = $('.number-input').value;

  //No input
  if (!userInputNumber || userInputNumber > 20 || userInputNumber < 0) {
    $('.guess-message').textContent = 'Нужно ввести число от 1 до 20';

    //Win
  } else if (userInputNumber == secretNumber) {
    $('.question').textContent = secretNumber;
    $('.guess-message').textContent = 'Правильно';
    $('body').style.backgroundColor = 'green';
    $('.question').style.width = '50rem';
    if (score > highscore) {
      highscore = score;
      $('.highscore').textContent = highscore;
    }

    //Too high
  } else if (userInputNumber !== secretNumber) {
    if (score > 1) {
      $('.guess-message').textContent = userInputNumber > secretNumber? "Меньше": "Больше";
      score--;
      $('.score').textContent = score;
    } else {
      $('.guess-message').textContent = 'Вы проиграли!';
      score--;
      $('.score').textContent = 0;
    }
  }
}


const gameAgain = function () {
  $('.question').style.width = '25rem';
  $('body').style.backgroundColor = 'black';
  $('.guess-message').textContent = 'Начни угадывать';
  $('.question').textContent = '???';
  $('.number-input').value = '';
  $('.score').textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
};
/* -----------------------------my code ----------------------------------- */

$('.check').addEventListener('click', checkNumber);

$('.again').addEventListener('click', gameAgain);

'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore=0

/* -----------------------------my code ----------------------------------- */

function $(element) {
  return document.querySelector(element);
}

const checkNumber = function () {
  let userInputNumber = $('.number-input').value;

  //No input
  if (!userInputNumber) {
    $('.guess-message').textContent = 'Сначала нужно ввести число';

    //Win
  } else if (userInputNumber == secretNumber) {
    $('.question').textContent = secretNumber;
    $('.guess-message').textContent = 'Правильно';
    $("body").style.backgroundColor = "green";
    $(".question").style.width = "50rem";
        if (score > highscore) {
          highscore = score;
          $(".highscore").textContent = highscore
        }

    //Too high
  } else if (userInputNumber > secretNumber) {
    if (score > 1) {
      $('.guess-message').textContent = 'Меньше';
      score--;
      $('.score').textContent = score;
    } else {
        $('.guess-message').textContent = 'Вы проиграли!';
        score--;
        $('.score').textContent = score;
    }

    //To low
  } else {
    if (score > 1) {
    $('.guess-message').textContent = 'Больше';
    score--;
    $('.score').textContent = score;
    }else {
        $('.guess-message').textContent = 'Вы проиграли!';
        score--;
        $('.score').textContent = score;

    }
  }
};

const gameAgain = function () {
  $(".question").style.width = "25rem";
  $("body").style.backgroundColor = "black";
  $('.guess-message').textContent = 'Начни угадывать';
  $('.question').textContent = "???";
  $('.number-input').value= "";
  $('.score').textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
}
/* -----------------------------my code ----------------------------------- */

$('.check').addEventListener('click', checkNumber);

$('.again').addEventListener('click', gameAgain);

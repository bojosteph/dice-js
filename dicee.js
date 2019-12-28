var dice1 = 'images/dice1.png';
var dice2 = 'images/dice2.png';
var dice3 = 'images/dice3.png';
var dice4 = 'images/dice4.png';
var dice5 = 'images/dice5.png';
var dice6 = 'images/dice6.png';

function randomDice() {
  roll = Math.ceil(Math.random() * 6);
  var image = '';
  if (roll === 1) {
    image = dice1;
  } else if (roll === 2) {
    image = dice2;
  } else if (roll === 3) {
    image = dice3;
  } else if (roll === 4) {
    image = dice4;
  } else if (roll === 5) {
    image = dice5;
  } else image = dice6;
  console.log(roll, image);
  return roll, image;
}

var image1 = randomDice();
var image2 = randomDice();

if (image1 === image2) {
  document.querySelector('h2').innerHTML = '<strong>Tie</strong>';
}
if (image1 > image2) {
  document.querySelector('h2').innerHTML = '<strong>Player 1 Wins</strong>';
}
if (image1 < image2) {
  document.querySelector('h2').innerHTML = '<strong>Player 2 Wins</strong>';
}

document.querySelector('.img1').setAttribute('src', image1);
document.querySelector('.img2').setAttribute('src', image2);

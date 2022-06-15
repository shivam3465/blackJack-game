let cards=[];
let sum;
let hasBlackjacked = false, isAlive = true, gameStarted=false;

//here using querySelector instead of getElementById.
let messageEl = document.querySelector("#message-el").textContent;
let sumEl = document.querySelector("#sum-el").textContent;
let cardEl = document.querySelector("#card-el").textContent;
document.getElementById("restart-btn").style.display="none";
let rules=document.querySelector("#rules");
rules.style.display='none';

let user={
   name:"shivam singh",
   chips: 246
}

document.querySelector("#user").textContent="  Player's Name: "+user.name+" || "+"Player's Chips: $"+user.chips+" ";

function getRandomCard() {
  let num = Math.random() * 13 + 1;
  num = Math.floor(num);
  if (num === 1) return 11;
  else if (num >= 11) return 10;
  return num;
}

function startgame() {
  gameStarted=true;
  document.querySelector("#start-button").textContent="START GAME";
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  let tem = cardEl;
  for (let i = 0; i < cards.length; i++) {
    cardEl += cards[i] + " ";
  }
  document.querySelector("#card-el").textContent = cardEl;
  cardEl = tem;
  document.querySelector("#sum-el").textContent = sumEl + sum;
  if (sum <= 20) {
    message = "Do you want to draw a card? ";
    document.getElementById("restart-btn").style.display="initial";
    document.getElementById("start-button").style.display="none";
  }
  else if (sum === 21) {
    message = "Wohoo! You've got a Blackjack! ";
    hasBlackjacked = true;
    newcard();
  }
  else {
    message = "You're out of game! ";
    isAlive = false;
    newcard();
  }
  document.querySelector("#message-el").textContent = message;
}

function newcard() {
  if(gameStarted){
  if(isAlive && hasBlackjacked!=true){
  let newCard = getRandomCard();
  cards.push(newCard);
  sum += newCard;
  renderGame();
  document.querySelector("#sum-el").textContent = sumEl + sum;
}
else{    
    gameStarted=false;
    document.querySelector("#message-el").textContent="You can restart the game now!";
    cards=[];
    // document.getElementById("restart-btn").style.display="initial";
    // document.getElementById("start-button").style.display="none";
  }
 }
}

function restartgame(){
    document.querySelector("#message-el").textContent=messageEl;
    document.querySelector("#sum-el").textContent=sumEl;
    document.querySelector("#card-el").textContent=cardEl;
    document.getElementById("restart-btn").style.display="none";
    document.getElementById("start-button").style.display="initial";
    isAlive=true;
    hasBlackjacked=false;
    sum=0;
}

function hide(){  
  // let rules=document.querySelector("#rules");

  if(rules.style.display === 'none'){
  rules.style.display='inline';
  document.querySelector("#hide-btn").textContent="Hide Rules";
  }
  else{
    rules.style.display='none';
    document.querySelector("#hide-btn").textContent="See Rules";
  }
}
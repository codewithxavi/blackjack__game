let player = {
  name: "xavicoder",
  chips: 100
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips + "€"

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) return 10
  else if (randomNumber === 1) return 11
  else return randomNumber
}

function startGame() {
  // document.querySelector("#blackjack").classList.remove("blackjack")
  // document.querySelector("#blackjack").classList.add("blackjack__invisible")
  // document.querySelector(".blackjack").style.opacity = 0
  // document.querySelector("#start-button").style.display = "none"
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
}

function renderGame() {

  cardsEl.textContent = "Cards: "

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true

    // document.querySelector("#blackjack").classList.add("blackjack")
    // document.querySelector("#blackjack").classList.remove("blackjack__invisible")


    // document.querySelector(".blackjack").style.opacity = 1
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message



}

function newCard() {

  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}

const cardArray = [
    {
        name: 'cheesburger',
        img:   'images/cheesburger.jpg',
    },
    {
        name: 'fries',
        img:   'images/fries.jpg',
    },
    {
        name: 'pizza',
        img:   'images/pizza.jpg',
    },
    {
        name: 'hotdog',
        img:   'images/hotdog.jpg',
    },
    {
        name: 'milkshake',
        img:   'images/milkshake.jpg',
    },
    {
        name: 'ice-cream',
        img:   'images/ice-cream.jpg',
    },
    {
        name: 'cheesburger',
        img:   'images/cheesburger.jpg',
    },
    {
        name: 'fries',
        img:   'images/fries.jpg',
    },
    {
        name: 'pizza',
        img:   'images/pizza.jpg',
    },
    {
        name: 'hotdog',
        img:   'images/hotdog.jpg',
    },
    {
        name: 'milkshake',
        img:   'images/milkshake.jpg',
    },
    {
        name: 'ice-cream',
        img:   'images/ice-cream.jpg',
    },
]
//short way to shuffle sort your array randomly
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard(){
for (let i = 0; i < cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/empty.jpg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
    }
}


createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/empty.jpg')
        cards[optionTwoId].setAttribute('src', 'images/empty.jpg')
        alert('You have click the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/empty.jpg')
        cards[optionTwoId].setAttribute('src', 'images/empty.jpg')
        alert('Sorry, try jeszcze raz')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenId = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congrat, you win'
    }
   
}

function flipCard(){
    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenId.push(cardID)
    console.log(cardsChosen)
    console.log(cardsChosenId)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}






























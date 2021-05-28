
let cardsModule = (function(){
    function generateCards() {
        let parentContainer = document.getElementById('cards-container')
        for(let i =1; i< 10; i++){
            let rowElement = document.createElement('div'),
                cardElement = document.createElement('div'),
                numberElement = document.createElement('span'),
                color = 'color-' + i

            rowElement.className = 'cards';
            rowElement.className += ' ' + color;
            cardElement.className = 'card';
            numberElement.className = 'number';

            numberElement.innerHTML = i;

            cardElement.appendChild (numberElement)
            rowElement.appendChild(cardElement)

            parentContainer.appendChild(rowElement);
        }
    }

    function shuffle() {
        let cardsContainer = document.getElementById('cards-container'),
            cards = Array.from(cardsContainer.children);
    
            cards.forEach((element, index) => {
                cardsContainer.appendChild(cards[Math.random() * index | 0]);
            });
    }
    
    function sort(){
        let cardsContainer = document.getElementById('cards-container'),
        cards = Array.from(cardsContainer.children);
    
        cards.sort((a, b) => {
            return a.innerText - b.innerText
        });
    
        cardsContainer.innerHTML = '';
        cards.forEach((card) => {
           cardsContainer.appendChild(card);
        })
    }

    return {
        generateCards: generateCards,
        shuffleCards: shuffle,
        sortCards: sort
    }
})();

cardsModule.generateCards();
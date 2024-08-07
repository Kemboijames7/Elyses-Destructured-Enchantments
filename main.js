// Provided functions
function getSecondCard(deck) {
    let [firstCard, secondCard, ...rest] = deck;
    return secondCard;
}

function swapTopTwoCards(deck) {
    [deck[0], deck[1]] = [deck[1], deck[0]];
    return deck;
}

 function discardTopCard(deck) {
    let [firstCard, ...rest] = deck;
    return [firstCard, rest];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

function insertFaceCards(deck) {
    let [firstCard, ...rest] = deck;
    return [firstCard, ...FACE_CARDS, ...rest];
}

// Demo functions to connect to the UI
function getSecondCardDemo() {
    const deck = [5, 10, 7, 3];
    const secondCard = getSecondCard(deck);
    document.getElementById('output').innerText = `Second card: ${secondCard}`;
}

function swapTopTwoCardsDemo() {
    let deck = [5, 10, 7, 3];
    deck = swapTopTwoCards(deck);
    document.getElementById('output').innerText = `Deck after swapping top two cards: ${deck}`;
}

function discardTopCardDemo() {
    const deck = [5, 10, 7, 3];
    const [discardedCard, newDeck] = discardTopCard(deck);
    document.getElementById('output').innerText = `Discarded card: ${discardedCard}, New deck: ${newDeck}`;
}

function insertFaceCardsDemo() {
    let deck = [5, 10, 7, 3];
    deck = insertFaceCards(deck);
    document.getElementById('output').innerText = `Deck after inserting face cards: ${deck}`;
}

/* 
	♦ ♥ ♠ ♣
*/
window.onload = addEvents;

function addEvents() {
    let button = document.getElementById("generate");
    button.addEventListener("click", generateCard);
}

function generateCard() {
    let container = document.getElementById("cards-box");
	let numberOfCards = parseInt(document.getElementById("numberOfCards").value)
	container.querySelectorAll('*').forEach(n => n.remove());

    for (let i = 0; i < numberOfCards; i++) {
        let cardValue = generateCardValue();
        let cardSuit = generateCardSuit(); //Generate card's value and suit

        let valueToCard = document.createElement("P");
        let suitToCard = document.createElement("P");
        let suitToCard2 = document.createElement("P");

        if (cardSuit == "♥" || cardSuit == "♦") {
            suitToCard.style.color = "red";
            suitToCard2.style.color = "red";
        } else {
            suitToCard.style.color = "black";
            suitToCard2.style.color = "black";
        }

		valueToCard.innerHTML = `${cardValue}`;
		suitToCard.innerHTML = `${cardSuit}`;
		suitToCard2.innerHTML = `${cardSuit}`;

        let cardHead = document.createElement("div");
        let cardBody = document.createElement("div");
        let cardFoot = document.createElement("div");

		cardHead.classList.add("head");
		cardBody.classList.add("body");
		cardFoot.classList.add("foot");

		cardHead.appendChild(suitToCard);
		cardBody.appendChild(valueToCard);
		cardFoot.appendChild(suitToCard2);

        let card = document.createElement("div");
		card.classList.add("card");
		card.appendChild(cardHead);
        card.appendChild(cardBody);
        card.appendChild(cardFoot);

        container.appendChild(card);
    }
}

function generateCardValue() {
    let value = Math.floor(Math.random() * 13 + 1);

    if (value == 11) value = "J";
    if (value == 12) value = "Q";
    if (value == 13) value = "K";
    if (value == 1) value = "A";
    return value;
}

function generateCardSuit() {
    let value = Math.floor(Math.random() * 4 + 1);

    if (value == 1) value = "♥";
    if (value == 2) value = "♦";
    if (value == 3) value = "♣";
    if (value == 4) value = "♠";
    return value;
}

import { getLocalStorage } from '../utils/localStorage-utils.js';
import { CARDS } from '../utils/constants.js';
import { renderRecentCard } from '../utils/renderRecentCard.js';
import { renderHeader } from '../utils/header.js';

// Initialize global header
renderHeader();

const paragraph = document.getElementById('message');
const noCardsMessage = document.querySelector('.no-cards-message');
const cardBack = document.querySelectorAll('.card-img')[1];

//create variable to hold card array from local storage
const recentCards = getLocalStorage(CARDS);

// Check if there are no recent cards (null, undefined, or empty array)
if (!recentCards || recentCards.length === 0) {
    // Show the no-cards message
    paragraph.textContent =
        'You have no recent readings. Please navigate back to home.';
    noCardsMessage.style.display = 'flex';
} else {
    // Hide the no-cards message when cards are being displayed
    paragraph.style.display = 'none';
    noCardsMessage.style.display = 'none';

    //loop to cut array down to 9 cards
    while (recentCards.length > 9) {
        recentCards.shift();
    }
    //loop to render cards in recentCards array
    for (let i = 0; i < recentCards.length; i++) {
        const oneRecentCard = recentCards[i];
        renderRecentCard(oneRecentCard, cardBack);
    }
}

import { cardStack } from '../utils/card-stack.js';
import { clickHandler } from '../utils/clickHandler.js';
import { getLocalStorage } from '../utils/localStorage-utils.js';
import { ONE_OR_THREE } from '../utils/constants.js';
import { renderHeader } from '../utils/header.js';

// Initialize global header
renderHeader();

const cardDesc = document.getElementById('card-desc');
const refreshButton = document.querySelector('#refreshButton');
const clickText = document.getElementById('click-text');

// Set the click instruction text based on reading type
const readingType = getLocalStorage(ONE_OR_THREE);
if (readingType === '1') {
    clickText.textContent = 'click the deck below to draw a card';
} else if (readingType === '3') {
    clickText.textContent = 'click the deck below to draw your cards';
}

// Trigger fade-in animation
setTimeout(() => {
    clickText.classList.add('fade-in');
}, 100);

cardStack();

const onClick = (e) => {
    clickHandler();
    // removeEventListener only works if the function is _not_ anonymous
    deck.removeEventListener('click', onClick);
    e.target.classList.remove('top');

    // Set card description text based on reading type
    const readingType = getLocalStorage(ONE_OR_THREE);
    if (readingType === '1') {
        cardDesc.textContent = 'click card below to reveal interpretation';
    } else if (readingType === '3') {
        cardDesc.textContent =
            'click each card below to reveal your past, present, and future interpretation';
    }

    refreshButton.style.visibility = 'visible';
    refreshButton.scrollIntoView({ behavior: 'smooth' });

    const audio = document.querySelector('#audio-one');
    audio.volume = 0.1;
    audio.play();
};

const deck = document.querySelector('.card-img.top');

deck.addEventListener('click', onClick);

refreshButton.addEventListener('click', () => {
    // Scroll to top of page before reloading
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Small delay to allow smooth scroll to complete before reload
    setTimeout(() => {
        window.location.reload();
    }, 300);
});

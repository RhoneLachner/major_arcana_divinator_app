// Global header utility
export function renderHeader() {
    const currentPath = window.location.pathname;
    const currentPage = getCurrentPage(currentPath);

    const header = document.querySelector('header');
    if (!header) return;

    // Set the header title based on current page
    const pageTitle = getPageTitle(currentPage);

    // Generate the buttons HTML based on current page
    const buttonsHTML = generateButtonsHTML(currentPage);

    header.innerHTML = `
        <div class="header-title">${pageTitle}</div>
        <div class="buttonDiv">
            <span class="buttonSpan">
                ${buttonsHTML}
            </span>
        </div>
    `;

    // Add event listeners for dynamic buttons
    addButtonEventListeners(currentPage);
}

function getCurrentPage(path) {
    if (path.includes('about-us')) return 'about-us';
    if (path.includes('about-tarot')) return 'about-tarot';
    if (path.includes('recent-cards')) return 'recent-cards';
    if (path.includes('reading-room')) return 'reading-room';
    return 'home';
}

function getPageTitle(page) {
    const titles = {
        home: 'WELCOME',
        'about-us': 'Meet the Team',
        'about-tarot': 'About Tarot',
        'recent-cards': 'Recent Cards',
        'reading-room': 'Reading Room',
    };
    return titles[page] || 'WELCOME';
}

function generateButtonsHTML(page) {
    const basePath = page === 'home' ? '' : '../';

    switch (page) {
        case 'home':
            return `
                <a href="${basePath}about-tarot/index.html">
                    <button class="header-button">About Tarot</button>
                </a>
                <a href="${basePath}recent-cards/index.html">
                    <button class="header-button">Recent Cards</button>
                </a>
            `;

        case 'about-us':
            return `
                <a href="${basePath}index.html">
                    <button class="header-button">Home</button>
                </a>
                <a href="${basePath}recent-cards/index.html">
                    <button class="header-button">Recent Cards</button>
                </a>
            `;

        case 'about-tarot':
            return `
                <a href="${basePath}index.html">
                    <button class="header-button">Home</buttonc>
                </a>
            `;

        case 'recent-cards':
            return `
                <a href="${basePath}index.html">
                    <button class="header-button">Home</button>
                </a>
                <a>
                    <button class="header-button" class="clear-button">Clear Saved Cards</button>
                </a>
            `;

        case 'reading-room':
            return `
                <a href="${basePath}index.html">
                    <button>Home</button>
                </a>
                <a href="${basePath}recent-cards/index.html">
                    <button class="header-button">Recent Cards</button>
                </a>
            `;

        default:
            return `
                <a href="${basePath}index.html">
                    <button class="header-button">Home</button>
                </a>
            `;
    }
}

function addButtonEventListeners(page) {
    // Add event listener for clear button on recent cards page
    if (page === 'recent-cards') {
        const clearButton = document.querySelector('.clear-button');
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                localStorage.clear();
                window.location.reload();
            });
        }
    }
}

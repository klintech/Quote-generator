let currentQuoteIndex = -1;
let quoteHistory = [];

function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);

    currentQuoteIndex = newIndex;
    quoteHistory.push(currentQuoteIndex);
    return quotes[currentQuoteIndex];
}

function updateQuote(direction = 'next') {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    // Fade out
    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        let quote;
        if (direction === 'next') {
            quote = getRandomQuote();
        } else if (direction === 'prev' && quoteHistory.length > 1) {
            quoteHistory.pop(); // Remove current quote
            currentQuoteIndex = quoteHistory[quoteHistory.length - 1];
            quote = quotes[currentQuoteIndex];
        } else {
            quote = getRandomQuote();
        }

        quoteElement.textContent = `"${quote.text}"`;
        authorElement.textContent = `- ${quote.author}`;

        // Fade in
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;

        // Change background color
        document.body.style.backgroundColor = getRandomColor();

        // Update button states
        updateButtonStates();
    }, 300);
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 90%)`;
}

function updateButtonStates() {
    const prevButton = document.getElementById('prevButton');
    prevButton.disabled = quoteHistory.length <= 1;
    prevButton.style.opacity = prevButton.disabled ? 0.5 : 1;
}

// Initial quote
updateQuote();

// Navigation button functionality
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', () => updateQuote('prev'));
nextButton.addEventListener('click', () => updateQuote('next'));

// Copy functionality
const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', () => {
    const quoteText = document.getElementById('quote').textContent;
    const authorText = document.getElementById('author').textContent;
    const fullQuote = `${quoteText} ${authorText}`;

    navigator.clipboard.writeText(fullQuote).then(() => {
        // Change button text temporarily to indicate successful copy
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
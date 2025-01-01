let currentQuoteIndex = -1;

function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);

    currentQuoteIndex = newIndex;
    return quotes[currentQuoteIndex];
}

function updateQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    // Fade out
    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        const { text, author } = getRandomQuote();
        quoteElement.textContent = `"${text}"`;
        authorElement.textContent = `- ${author}`;

        // Fade in
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;

        // Change background color
        document.body.style.backgroundColor = getRandomColor();
    }, 300);
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 90%)`;
}

// Initial quote
updateQuote();

// Update quote every 30 seconds
setInterval(updateQuote, 30000);

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
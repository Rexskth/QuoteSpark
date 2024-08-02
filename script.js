// Example quote data
// Example quote data
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { text: "Do not go gentle into that good night. Rage, rage against the dying of the light.", author: "Dylan Thomas" },
    { text: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "To be great is to be misunderstood.", author: "Ralph Waldo Emerson" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "We do not remember days; we remember moments.", author: "Cesare Pavese" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "You do not find the happy life. You make it.", author: "Camilla E. Kimball" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius" },
    { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
    { text: "Everything has beauty, but not everyone can see.", author: "Confucius" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." }
];


// Function to get a random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to update the displayed quote and author
function updateQuote() {
    const quote = getRandomQuote();
    document.querySelector('.text').textContent = quote.text;
    document.querySelector('.author').textContent = `— ${quote.author}`;
}

// Function to share the quote to Twitter
function shareToTwitter() {
    const quoteText = document.querySelector('.text').textContent;
    const quoteAuthor = document.querySelector('.author').textContent;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + ' ' + quoteAuthor)}`;
    window.open(url, '_blank');
}

// Function to copy the quote to the clipboard
function copyToClipboard() {
    const quoteText = document.querySelector('.text').textContent;
    const quoteAuthor = document.querySelector('.author').textContent;
    const textToCopy = quoteText + ' ' + quoteAuthor;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Function to read the quote aloud
function listenQuote() {
    const quoteText = document.querySelector('.text').textContent;
    const quoteAuthor = document.querySelector('.author').textContent;
    const textToRead = quoteText + ' ' + quoteAuthor;
    
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

// Function to handle the "New Quote" button click
function newQuote() {
    updateQuote();
}

// Initial quote display
updateQuote();

// Event listeners for the buttons
document.querySelector('.new-quote').addEventListener('click', newQuote);

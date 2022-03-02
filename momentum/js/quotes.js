const quotes = [
    {
        quote:"the way to get started is to quit talking and begin",
        author:"walt disney",
    },
    {
        quote:"Life is waht happens when you're busy making ohter",
        author:"John Lennon",
    },
    {
        quote:"the way to get started is to quit talking and begin",
        author:"walt disney",
    },
    {
        quote:"Life is waht happens when you're busy making ohter",
        author:"John Lennon",
    },
    {
        quote:"the way to get started is to quit talking and begin",
        author:"walt disney",
    },
    {
        quote:"Life is waht happens when you're busy making ohter",
        author:"John Lennon",
    },
    {
        quote:"the way to get started is to quit talking and begin",
        author:"walt disney",
    },
    {
        quote:"Life is waht happens when you're busy making ohter",
        author:"John Lennon",
    },
    {
        quote:"the way to get started is to quit talking and begin",
        author:"walt disney",
    },
    {
        quote:"Life is waht happens when you're busy making ohter",
        author:"John Lennon",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todatsQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todatsQuote.quote;
author.innerText = todatsQuote.author;
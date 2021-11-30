const loadQuotes = () => {
    fetch ('https://api.kanye.rest/')
    .then (res => res.json())
    .then (data => displayQuotes(data));
}

const displayQuotes = quote => {
    const quoteElements = document.getElementById('quote');
    quoteElements.innerText = quote.quote;
}
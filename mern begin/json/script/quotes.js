function loadQuotes() {
   fetch('https://api.kanye.rest/')
   .then(response => response.json())
   .then(quotes => displayQuotes(quotes))
    }
loadQuotes();
function displayQuotes(quotes){
    console.log(quotes);
    const quoteContainer = document.getElementById('quote-container');
    const div = document.createElement('div');
        div.innerHTML = `
            <blockquote>${quotes.quote}</blockquote>
            
        `;
        div.classList.add('quote');
        quoteContainer.appendChild(div);
}
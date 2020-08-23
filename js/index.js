let author;
// Fetch a random qoute
function getRandomQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
    .then((res) => res.json())
    .then((res) => {
      document.getElementById('quoteText').innerHTML = res.quote.quoteText;
      document.getElementById('author').innerHTML = res.quote.quoteAuthor;
      document.getElementById('genre').innerHTML = res.quote.quoteGenre;

      author = res.quote.quoteAuthor;
    });
}

function getAuthorQuotes() {
  // add display:none to singleQuote
  let singleQuote = document.getElementById('singleQuote');
  toggleDisplay(singleQuote);

  // unhide authorQuotes
  let allQuotes = document.getElementById('authorQuotes');
  toggleDisplay(allQuotes);

  // console.log(author);

  fetch(`https://quote-garden.herokuapp.com/api/v2/authors/${author}?page=1&limit=3`)
    .then((res) => res.json())
    .then((res) => {
      let qoutes = res.quotes;
      document.getElementById('theAuthor').innerHTML = author;

      qoutes.forEach(element => {
        document.getElementById('theQuote').innerHTML += `<p class="quote">${element.quoteText}</p>`;
      });
    })
}

function toggleDisplay(el) {
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

getRandomQuote();

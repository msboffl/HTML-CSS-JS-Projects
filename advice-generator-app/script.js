const quoteNumber = document.getElementById("quote-number");
const quoteText = document.getElementById("quote");
const dice = document.getElementById("dice");

async function generateQuote() {
  const API_URL = "https://api.adviceslip.com/advice";
  let response = await fetch(API_URL);
  let data = await response.json();
  
  console.log(data);

  quoteNumber.innerText = data.slip.id;
  quoteText.innerText = data.slip.advice;
}

dice.addEventListener("click", generateQuote);

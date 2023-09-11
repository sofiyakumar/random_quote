const quotes=["The more you be yourself,the more magical life gets.",
 "Always find time for the things that make you happy to be alive",
 "Don't be afraid to fail. Be afraid not to try.",
 "Self love is a greatest medicine",
 "All you need is to believe in yourself.",
 "Perfection is found in accepting your imperfections.",
 "Radiate joy from the inside out.",
 "One day at a time.",
 "Everyday is a new beginning.",
 "Dream big,work hard.",
 "The only limit is your mind.",
 "In the middle of every difficulty lies oppurtunity.",
 "The future depends on what you do today.",
 "The only limit to ur realization of tomorrow will be our doubts of today.",
 "The only way to do great work is to love what you do.",
 "The biggest risk is not taking any risk."
];
function getRandomQuote(){
  const randomIndex= Math.floor(Math.random()*quotes.length);
  const quoteElement=document.getElementById("quote");
  quoteElement.textContent=quotes[randomIndex];
}
document.getElementById("button").addEventListener("click",getRandomQuote);

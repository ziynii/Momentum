const quotes = [
	{
		quote: "It is kind of fun to do the impossible.",
		author: "- Walt Disney",
	},
	{
		quote: "There are better starters than me but I'm a strong finisher.",
		author: "- Usain Bolt",
	},
	{
		quote: "Tough times never last, but tough people do.",
		author: "- Robert H",
	},
	{
		quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
		author: "- Michael Jordan",
	},
	{
		quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
		author: "- Martin Luther King",
	},
	{
		quote: "Grind Hard, Shine Hard.",
		author: "- Dwayne Johnson",
	},
	{
		quote: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
		author: "- Estée Lauder"
	},
	{
		quote: "I never dreamed about success, I worked for it.",
		author: "- Estee Lauder",
	},
	{
		quote: "Do not try to be original, just try to be good.",
		author: "- Paul Rand"
	},
	{
		quote: "Do not be afraid to give up the good to go for the great.",
		author: "- John D"
	},
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
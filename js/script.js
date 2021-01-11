/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * ********************************************************************
 * `quotes` array
 * quotesArray variable that contains multiple objects
 * ********************************************************************
 ***/

const quotesArray = [
	{
		text: 'You miss 100 percent of the shots you never take.',
		source: 'Wayne Gretzy',
		citation: 'ForbesQuotes',
	},
	{
		text: 'Hard work beats talent when talent fails to work hard.',
		source: 'Kevin Durant',
	},
	{
		text: 'Carpe Diem',
		source: 'Marvin Williams',
		citation: 'Dead Poets Society',
		year: 1989,
	},
	{
		text:
			'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.',
		source: 'Johann Wolfgang Von Goethe',
		citation: 'Book',
	},
	{
		text: 'Creativity Is Intelligence Having Fun',
		source: 'Don Zimmer',
	},
	{
		text: 'Reading Is To The Mind, As Exercise Is To The Body.',
		source: 'Brian Tracy',
	},
	{
		text:
			"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
		source: 'Michael Jordan',
		citation: 'ForbesQuotes',
		year: 1995,
	},
	{
		text: 'Eighty percent of success is showing up.',
		source: 'Woody Allen',
		citation: 'ForbesQuotes',
	},
	{
		text:
			'Your time is limited, so don’t waste it living someone else’s life. ',
		source: 'Steve Jobs',
		citation: 'Apple',
	},
];

/***
 * ********************************************************************
 * `getRandomQuote` function
 * Accepts the quotesArray variable as a parameter
 * Creates a random number that's max value is equal to the length of the quotesArray
 * returns the random quote that is generated and saved as a variable named randomQuote
 * ********************************************************************
 ***/

const getRandomQuote = (arr) => {
	const r = Math.floor(Math.random() * quotesArray.length);
	const randomQuote = arr[r];
	return randomQuote;
};

/***
 * ********************************************************************
 *
 * `printQuote` function
 * quote variable created by invoking the getRandomQuote() function and accepts the quotesArray as a parameter
 * if statements to check if quote variable has a citation property, year property, or both properties.
 * After the conditional tests, the quote is printed from the DOM to the HTML file
 * * ********************************************************************
 ***/

const printQuote = () => {
	const quote = getRandomQuote(quotesArray);
	//PRINTS IF - Quote has a citation AND year property
	if (quote.hasOwnProperty('citation') && quote.hasOwnProperty('year')) {
		document.querySelector('.quote-box').innerHTML = `
      <p class="quote">${quote.text}</p>
      <p class="source">${quote.source}
      <span class="citation">${quote.citation}</span>
      <span class="year">${quote.year}</span>
      </p>
    `;
		//PRINTS IF - Quote has a citation property
	} else if (quote.hasOwnProperty('citation')) {
		document.querySelector('.quote-box').innerHTML = `
      <p class="quote">${quote.text}</p>
      <p class="source">${quote.source}
      <span class="year">${quote.citation}</span>
      </p>
    `;
		//PRINTS IF - Quote has a year property
	} else if (quote.hasOwnProperty('year')) {
		document.querySelector('.quote-box').innerHTML = `
      <p class="quote">${quote.text}</p>
      <p class="source">${quote.source}
      <span class="year">${quote.year}</span>
      </p>
    `;
		//PRINTS IF - Quote does NOT have a citation or year property
	} else {
		document.querySelector('.quote-box').innerHTML = `
      <p class="quote">${quote.text}</p>
      <p class="source">${quote.source}</p>
    `;
	}
};

const changeBgColor = () => {
	const rColor = () => Math.floor(Math.random() * 256);
	let color = `rgb( ${rColor()}, ${rColor()}, ${rColor()} )`;
	document.body.style.backgroundColor = `${color}`;
};
document.querySelector('.load-quote').addEventListener('click', changeBgColor);

//Invokes the printQuote() function
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);

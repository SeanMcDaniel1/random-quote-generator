/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

const quotesArray = [
	{
		text: 'You miss 100 percent of the shots you never take.',
		source: 'Wayne Gretzy',
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
];

/***
 * `getRandomQuote` function
 ***/
const getRandomQuote = (arr) => {
	const r = Math.floor(Math.random() * quotesArray.length);
	const randomQuote = arr[r];
	return randomQuote;
};

/***
 * `printQuote` function
 ***/
const printQuote = () => {
	const quote = getRandomQuote(quotesArray);
	//print the quote and source
	if (quote.hasOwnProperty('citation') && quote.hasOwnProperty('year')) {
		document.querySelector('.quote-box').innerHTML = `
      <p class="quote">${quote.text}</p>
      <p class="source">${quote.source}
      <span class="citation">${quote.citation}</span>
      <span class="year">${quote.year}</span>
      </p>
    `;
	} else if (quote.hasOwnProperty('citation')) {
		document.querySelector('.quote-box').innerHTML = `
      <p class="quote">${quote.text}</p>
      <p class="source">${quote.source}
      <span class="year">${quote.citation}</span>
      </p>
    `;
	} else if (quote.hasOwnProperty('year')) {
		document.querySelector('.quote-box').innerHTML = `
      <p class="quote">${quote.text}</p>
      <p class="source">${quote.source}
      <span class="year">${quote.year}</span>
      </p>
    `;
	} else {
		document.querySelector('.quote-box').innerHTML = `
      <p class="quote">${quote.text}</p>
      <p class="source">${quote.source}</p>
    `;
	}
	//write conditional statement if the obj contains a citation OR year USE .inclueds() arr method
};

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);

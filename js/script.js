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

const quotes = [
	{
		quote: 'You miss 100 percent of the shots you never take.',
		source: ' - Wayne Gretzy',
	},
	{
		quote: 'Hard work beats talent when talent fails to work hard.',
		source: ' - Kevin Durant',
	},
	{
		quote: 'Carpe Diem',
		source: '- Marvin Williams',
		citation: 'Dead Poets Society',
		year: 1989,
	},
	{
		quote:
			'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.',
		source: ' - Johann Wolfgang Von Goethe',
		citation: 'Book',
	},
	{
		quote: 'Creativity Is Intelligence Having Fun',
		source: ' – Don Zimmer',
	},
	{
		quote: 'Reading Is To The Mind, As Exercise Is To The Body.',
		source: ' - Brian Tracy',
	},
];

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);

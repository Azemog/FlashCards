const engVerbs = ['cat', 'dog', 'test1', 'test2', 'intern'];
const plVerbs = ['kot', 'pies', 'test1', 'test2', 'stażysta'];
let flashCards = [];
let used = [];
let reverseBtn;
let reverseBool = true;
let btnOne;
let btnTwo;
let random = 1

const main = () => {
	prepareDomElements();
	prepareDomEvents();
};

const prepareDomElements = () => {
	reverseBtn = document.querySelector('.reverse');
	btnOne = document.querySelector('.first');
	btnTwo = document.querySelector('.second');
	for (let i = 0; i < engVerbs.length; i++) {
		flashCards.push([engVerbs[i], plVerbs[i]]);
		
	}
	used.push(random);
	btnOne.textContent = flashCards[random][0];
	btnTwo.textContent = flashCards[random][1];
};

const prepareDomEvents = () => {
	reverseBtn.addEventListener('click', reverse);
	btnOne.addEventListener('click', () => btnTwo.classList.toggle('hide'));
	btnTwo.addEventListener('click', () => changeVerb());
};

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

const changeVerb = () => {
	if (used.length !== flashCards.length) {
		while (used.includes(random)) {
			random = getRandomInt(0, flashCards.length);
		}
		btnOne.textContent = flashCards[random][0];
		btnTwo.textContent = flashCards[random][1];
		used.push(random);
		btnTwo.classList.toggle('hide');
	} else {
		console.log('juz nie ma kartek');
	}
	console.log(used);
};

const reverse = () => {
	if (reverseBool) {
		for (let i = 0; i < engVerbs.length; i++) {
			flashCards.splice(i, 1, [plVerbs[i], engVerbs[i]]);
			reverseBool = false;
		}
	} else {
		for (let i = 0; i < engVerbs.length; i++) {
			flashCards.splice(i, 1, [engVerbs[i], plVerbs[i]]);
			reverseBool = true;
		}
	}
	btnOne.textContent = flashCards[random][0];
	btnTwo.textContent = flashCards[random][1];
	used = [];
};

document.addEventListener('DOMContentLoaded', main);

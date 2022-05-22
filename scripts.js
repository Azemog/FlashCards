const engVerbs = [
	'intern',
	'humidity',
	'initially',
	'demand',
	'rectified',
	'mislead',
	'recall',
	'i stick with you',
	'folks',
	'sophisticated',
	'audiences',
	'delight',
	'pier',
	'stained',
	'rehab',
	'relief',
	'shout',
	'murmurs',
	'couch',
	'mall',
	'gored',
	'burden',
	'basket case',
	'fragile',
	'prescrible',
	'treat',
	'uptight',
	'reclaim',
	'engage',
	'incapable',
	'neglect',
	'nap',
	'environment',
	'and i quote',
	'spellbinding',
	'funeral',
	'relief',
	'pendent',
	'dependent',
	'i am engaged',
];
const plVerbs = [
	'stażysta',
	'wilgotność',
	'początkowo',
	'żądanie',
	'sprostowane',
	'wprowadzić w błąd',
	'pamiętać',
	'ja trzymam z tobą',
	'ludzie',
	'wyrafinowaną',
	'publiczność',
	'rozkosz',
	'molo',
	'poplamione',
	'odwyk',
	'ulga',
	'krzyczeć',
	'pomrukiwanie',
	'kanapa',
	'super market',
	'zraniona',
	'ciężar',
	'kłębek nerwów',
	'kruche',
	'przepisać',
	'bal,uczta',
	'spięty',
	'odzyskać',
	'angażować się',
	'niezdolny',
	'zaniedbanie',
	'drzemka',
	'środowisko',
	'cytuje',
	'urzekający',
	'pogrzeb',
	'ulga',
	'wisorek',
	'zależny',
	'jestem zaręczony',
];
let flashCards = [];
let used = [];
let reverseBtn;
let reverseBool = true;
let resetBtn;
let btnOne;
let btnTwo;
let random;

const main = () => {
	prepareDomElements();
	prepareDomEvents();
};

const prepareDomElements = () => {
	reverseBtn = document.querySelector('.reverse');
	resetBtn = document.querySelector('.reset');
	btnOne = document.querySelector('.first');
	btnTwo = document.querySelector('.second');
	random = getRandomInt(0, flashCards.length);
	getTXT();
	fillingTables();
};

const prepareDomEvents = () => {
	reverseBtn.addEventListener('click', reverse);
	resetBtn.addEventListener('click', reset);
	btnOne.addEventListener('click', () => btnTwo.classList.toggle('hide'));
	btnTwo.addEventListener('click', () => changeVerb());
};

const getTXT = () => {
	fetch('file.txt')
		.then((response) => {
			return response.text();
		})
		.then((text) => {
			console.log(text);
		});
};

const fillingTables = () => {
	for (let i = 0; i < engVerbs.length; i++) {
		flashCards.push([engVerbs[i], plVerbs[i]]);
	}
	btnOne.textContent = flashCards[random][0];
	btnTwo.textContent = flashCards[random][1];
};

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

const changeVerb = () => {
	if (used.length === 0) {
		used.push(random);
	}
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
	btnTwo.classList.add('hide');
	used = [];
};

const reset = () => {
	btnTwo.classList.add('hide');
	used = [];
};

document.addEventListener('DOMContentLoaded', main);

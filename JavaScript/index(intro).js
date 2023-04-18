/*---------------------Początki JavaScript---------------------------*/

var tweet = "Compose your tweet:";
var tweetUnder140 = tweet.slice(0, 140); //slice jak uzywać (odcina znaki powyżej 140)
alert(tweetUnder140);

alert(prompt("Compose your tweet:").slice(0, 140)); /*Krótsza wersja zapisania*/

/*----------------------------------------------*/

//Jak używać zmiany na duże lub małe litery

var name = "Jakub";
name = name.toUpperCase();
name = name.toLowerCase();

//Przykład użycia
var name = prompt("What is your name?");
alert("Hello " + name);

/*----------------------------------------------*/

/*CASE: Jak zrobić żeby pierwsza litera w Imieniu zawsze była duża?
1. Create a var that stores the name that user enters via prompt. */

var name = prompt("What is your name?");
// 2. Capitalise the first letter of their name:
// a. Isolate the first Char
var firstChar = name.slice(0, 1);

// b. Turn the first Char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

// c. Isolate to rest of the Name
var restOfname = name.slice(1, name.lenght);

// d. Change the rest of the name to lower case:
var restOfname = restOfname.toLowerCase();

// e. concactenate the first char with the rest of the char.
var capitalisedName = upperCaseFirstChar + restOfname;

// 3. We use the capitalised version of their name to greet them using an alert.
alert("Hello " + capitalisedName);
//Every name that shows have first letter Capitalised :)

// Dog Age to Human Age Formula.
var dogAge = prompt("How old is your dog?");

var humanAge = (dogAge - 2) * 4 + 21;

alert("Your dog is " + humanAge + " years old in human years");

/*--------------------------------------------------------------*/

// Life in weeks

function lifeInWeeks(age) {
	var yearsRemaning = 90 - age;
	var days = yearsRemaning * 365;
	var weeks = yearsRemaning * 52;
	var months = yearsRemaning * 12;
	console.log(
		"You have " +
			days +
			" days, " +
			weeks +
			" weeks, and " +
			months +
			" months left."
	);
}

/*----------------------------------------------*/

// How function looks like?

function getMilk(money, costPerBottle) {
	console.log("leaveHouse");
	console.log("moveRight");
	console.log("moveRight");
	console.log("moveUp");
	console.log("moveUp");
	console.log("moveUp");
	console.log("moveUp");
	console.log("moveRight");
	console.log("moveRight");

	/*var numberOfbottles = Math.floor (money / 1.5);
	console.log("buy " + numberOfbottles + "bottles of Milk");
	*/
	console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");

	console.log("moveLeft");
	console.log("moveLeft");
	console.log("moveDown");
	console.log("moveDown");
	console.log("moveDown");
	console.log("moveDown");
	console.log("moveLeft");
	console.log("moveLeft");
	console.log("enterHouse");

	return calcChange(money, costPerBottle); //Reminder of this devision
}

function calcBottles(startingMoney, costPerBottle) {
	var numberOfbottles = Math.floor(startingMoney / costPerBottle);
	return numberOfbottles;
}
function calcChange(startingMoney, costPerBottle) {
	var Change = startingMoney % costPerBottle;
	return Change;
}

console.log("Hello Master, here is your " + getMilk(5, 1.5) + " change.");

/*--------------------------------------------------------------------------*/

// BMI Calculator :)

function bmiCalculator(weight, height) {
	var currentBMI = weight / Math.pow(height, 2); // Math.pow - jest wykorzystywane do mnożenia (height * height).
	return Math.round(currentBMI); // Math.round - jest wykorzystywane do zaokrąglenia.
}

console.log("Your current BMI = " + bmiCalculator(65, 1.8) + " kg/m2");

// BMI calculator with If, Else

function bmiCalculator(weight, height) {
	var bmi = weight / Math.pow(height, 2);

	if (bmi > 24.9) {
		return "Your BMI is " + bmi + ", so you are overweight.";
	}
	if (bmi >= 18.5 && bmi <= 24.9) {
		return "Your BMI is " + bmi + ", so you have a normal weight.";
	}
	if (bmi < 18.5) {
		return "Your BMI is " + bmi + ", so you are underweight.";
	}
}

/*----------------------------------------------------------------------------*/

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

//Love random calculator

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // Mamy liczbę pomiędzy 1 - 100

if (loveScore > 70) {
	alert(
		"Your love score is " +
			loveScore +
			"%. You love each other like Kanye loves Kanye ❤️"
	);
}
if (loveScore > 30 && loveScore <= 70) {
	alert("Your love score is " + loveScore + "%");
}

if (loveScore <= 30) {
	alert(
		"Your love score is " +
			loveScore +
			"%" +
			" You go together like oil and water."
	);
}

/* alert("Your love score is " + loveScore + "%"); */

/*-----------------------LEAP YEAR----------------------------------*/

//Task Leap Year

function isLeap(year) {
	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				return "Leap Year";
			} else {
				return "Not Leap Year";
			}
		} else {
			return "Leap Year";
		}
	} else {
		return "Not Leap Year";
	}
}

isLeap(2100);

// Easier way to write leap year code

function isLeap(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		/*   && - AND,	  || - OR,	  ! - NOT   */
		return "Leap year.";
	} else {
		return "Not leap year.";
	}
}

isLeap(2100);

/*--------------------GUEST LIST-------------------------------*/

// Guest list
// Mając guestList możemy sprawdzić czy jakieś imię zawiera się w tym zbiorzę, oraz dostać alert.

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("What is your Name?");
if (guestList.includes(guestName)) {
	alert("Welcome ;)");
} else {
	alert("Sorry, maybe next time.");
}

console.log(guestList.includes("Jack")); // .includes sprawdza czy to co napiszemy w () znajduje się w guestList

/*---------------------PUSH,POP----------------------------*/

eggs.push(); // Push dodaje kolejną rzecz do zbioru zawsze na końcu !!!
eggs.pop; // pop usuwa ostatnia rzecz z rzędu !!!

var output = [];
var count = 1;
function fizzBuzz() {
	while (count <= 100) {
		// while - jest pętlą która przejdzie 100 razy dodajac 1, zaczynajac od 1
		if (count % 3 === 0 && count % 5 === 0) {
			output.push("FizzBuzz");
		} else if (count % 3 === 0) {
			output.push("Fizz");
		} else if (count % 5 === 0) {
			output.push("Buzz");
		} else {
			output.push(count);
		}
		count++;
	}
	console.log(output);
}

/*-----------------WHOS PAYING------------------------*/
//mamy tu funkcje która wyswietla randomowa osobę z listy

function whosPaying(names) {
	var numberOfpeople = names.lenght;
	var randomPersonPosition = math.floor(Math.random() * numberOfpeople);
	var randomPerson = names[randomPersonPosition];

	return randomPerson + " is going to buy lunch today!";

	/*  var randomPerson = names[Math.floor(Math.random()*names.length)]  
    return randomPerson + " is going to buy lunch today!"
*/
}

/*----------------------------------------------------*/

var numberOfBottles = 99;
while (numberOfBottles >= 0) {
	var bottleWord = "bottle";
	if (numberOfBottles === 1) {
		bottleWord = "bottles";
	}
	console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
	console.log(numberOfBottles + " " + bottleWord + " of beer,");
	console.log("Take one down, pass it around,");
	numberOfBottles--;
	console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

/*---------------------FOR LOOP------------------------*/

for (var i = 1; i < 2; i++) {
	console.log(i);
}

// PRZYKŁAD: na programie FizzBuzz zamiast while używamy for

var output = [];
function fizzBuzz() {
	for (var count = 1; count <= 100; count++) {
		// while - jest pętlą która przejdzie 100 razy dodajac 1, zaczynajac od 1
		if (count % 3 === 0 && count % 5 === 0) {
			output.push("FizzBuzz");
		} else if (count % 3 === 0) {
			output.push("Fizz");
		} else if (count % 5 === 0) {
			output.push("Buzz");
		} else {
			output.push(count);
		}
	}
	console.log(output);
}

/*--------------FIBONACCI GENERATOR-------------*/

function fibonacciGenerator(n) {
	var output = [];
	if (n === 1) {
		output = [0];
	} else if (n === 2) {
		output = [0, 1];
	} else {
		output = [0, 1];
		for (var i = 2; i < n; i++) {
			//pętla zaczyna się od 2, jest mniejsza od n i zwiększa się o 1
			output.push(output[output.length - 2] + output[output.length - 1]);
		}
	}

	// var output = [];
	// if (n === 1) {
	// 	output = [0];
	// } else if (n === 2) {
	// 	output = [0, 1];
	// } else {
	// 	output = [0, 1];
	// 	for (var i = 2; i<n; i++){
	// 		output [i] = output[i-1]+ output[i-2];
	// 	}
	// }

	return output;
}
fibonacciGenerator(20);

/*--------------------CALCULATOR-----------------------*/

function add(num1,num2){
	return num1+num2;
}
function subtract(num1,num2){
	return num1-num2;
}
function multiply (num1,num2){
	return num1*num2;
}
function devide (num1,num2){
	return num1/num2;
}
function calculator (num1,num2, operator){
	return operator (num1,num2);
}



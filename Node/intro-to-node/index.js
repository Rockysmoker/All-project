const superheroes = require('superheroes');
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
var mySuperheroes = superheroes.random();

const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

var mySupervillains = supervillains.random();
//=> 'Mud Pack'

console.log(mySupervillains)

//-----------------------------------------------------------------------------

// var generateName = require("sillyname");
import generateName from "sillyName";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");
import superheroes from "superheroes";

const name = superheroes.random();
console.log(`I am ${name}!`);
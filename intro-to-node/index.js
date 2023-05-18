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
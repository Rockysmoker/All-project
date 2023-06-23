const hobbys = ["Sport", "Reading", "Cooking"];

hobbys.push("Walking");

const index = hobbys.findIndex((item) => {
	return item === "Cooking";
});
console.log(index);

let editedHobbys = hobbys.map((item) => item + "!");

console.log(editedHobbys);


function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map(Number => { return{val: Number}});
}

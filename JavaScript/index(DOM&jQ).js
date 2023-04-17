/*---------------INNER HTML & TEXT CONTENT & EVENT LISTENER----------------------*/

//   .document.querySelector("h1").textContent; //textContent zmienia tylko text który jest zawarty w h1
//   .document.querySelector("h1").innerHTML ="<em>Good Bye</em>"   // innerHTML zmienia nie tylko tekst ale możemy też zmienić wygląd bo dodaje wszystko do h1

//document.querySelector ("button").addEventListener("click",handleClick);  //dodaje działanie do button

/*   
function handleClick () {
    alert ("I got clicked!");
}  
 */

var houseKeeper1 = {
	yearsOfExpirience: 12,
	name: "Jane",
	cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
	moveSuitcase: function () {     //możemy dodać funkcję 
		alert("May I take your suitcase?");
		pickUpSuitcase();
		move();
	},
};

/*---------------CONSTRUCTOR FACTORY---------------*/
// najpierw tworzymy fabrykę w której tworzymy nowy var
// dla każdego nowego pracownika tworzymy var który jest oparty na fabryce
// ważne jest new i pożniej specyfikacja

function HouseKeeper(yearsOfExpirience, name, cleaningRepertoire) {
	this.yearsOfExpirience = yearsOfExpirience;
	this.name = name;
	this.cleaningRepertoire = cleaningRepertoire;
	this.clean = function () {
		alert("Cleaning in progress...");
	};
}

var houseKeeper1 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);

/*-----------------Higher order function---------------------*/


document.addEventListener("keypress", respondToKey(event));
function respondToKey(event){
	console.log("Key pressed!");
}


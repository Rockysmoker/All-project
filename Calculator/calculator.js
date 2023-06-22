const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1 + num2;
	res.send("The result of calculation is " + result);
});

app.get("/bmicalculator", function (req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
	var weight = parseFloat(req.body.weight);
	var height = parseFloat(req.body.height);
	var bmi = weight / (height * height);

	res.send("Your BMI is: " + bmi);
});

app.listen(3000, function () {
	console.log("Server started at port 3000");
});


//https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=172b0f4726adc501c48d1237bd59c3b5&units=metric
const { log } = require("console");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

	const query = req.body.cityName
	const apiKey = "172b0f4726adc501c48d1237bd59c3b5";
	const unit = "metric";
	const url =
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		query +
		"&appid=" +
		apiKey +
		"&units=" +
		unit;

	https.get(url, function (response) {
		console.log(response.statusCode);
		response.on("data", function (data) {
			const WeatherData = JSON.parse(data);
			const temp = WeatherData.main.temp;
			const description = WeatherData.weather[0].description;
			const icon = WeatherData.weather[0].icon;
			const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
			res.write("<h1>The temperature in" + query + "is " + temp + ".</h1>");
			res.write("<p>The weather is currently " + description + ".<p>");
			res.write("<img src =" + imageURL + ">");
			res.send();
		});
	});
});

app.listen(3000, function () {
	console.log("Server is running on port 3000");
});

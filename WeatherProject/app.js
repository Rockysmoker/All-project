const { log } = require("console");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
	const url =
		"https://api.openweathermap.org/data/2.5/weather?q=London&appid=172b0f4726adc501c48d1237bd59c3b5&units=metric";

	https.get(url, function (response) {
		console.log(response.statusCode);
		response.on("data", function (data) {
			const WeatherData = JSON.parse(data);
			const temp = WeatherData.main.temp;
			const description = WeatherData.weather[0].description;
			const icon = WeatherData.weather[0].icon;
			
			res.write("<h1>The temperature in Krakow is " + temp + ".</h1>");
			res.write("<p>The weather is currently " + description + ".<p>");
			res.send();
		});
	});
});

app.listen(3000, function () {
	console.log("Server is running on port 3000");
});

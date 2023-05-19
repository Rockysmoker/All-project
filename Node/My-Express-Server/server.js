const express = require("express");

const app = express();

app.get("/", function (req, res) {
	res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
	res.send("Contact me :)");
});

app.get("/about", function (req, res) {
	res.send("Why you look like that?");
});

app.listen(3000, function () {
	console.log("Server started at port 3000");
});

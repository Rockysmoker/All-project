const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.send("<h1>Hello, Pipki</h1>");
});

app.listen(3000, function () {
	console.log("Server started at port 3000");
});

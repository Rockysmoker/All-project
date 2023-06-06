const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
	var firstName = req.body.fName;
	var lastName = req.body.lName;
	var email = req.body.email;

	console.log(firstName, lastName, email);
});


app.listen(3000, function () {
	console.log("Server is running on port 3000.");
});

// Api key
// 3ba245716b8c8d125fcf971e4465828d-us13

// List Id
// 5759c03f7f
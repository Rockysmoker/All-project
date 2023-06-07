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
	const firstName = req.body.fName;
	const lastName = req.body.lName;
	const email = req.body.email;

	const data = {
		members: [
			{
				email_address: email,
				status: "subscribed",
				marge_fields: {
					FNAME: firstName,
					LNAME: lastName,
				},
			},
		],
	};
	const jsonData = JSON.stringify(data);

	https.get(url, function (res) {
		
	});
});

app.listen(3000, function () {
	console.log("Server is running on port 3000.");
});

// Api key
// 3ba245716b8c8d125fcf971e4465828d-us13

// List Id
// 5759c03f7f

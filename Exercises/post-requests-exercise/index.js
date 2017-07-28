'use strict'
// npm install body-parser

var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var friends = ['Michelle', 'Jackie', 'Amanda'];

app.get("/", function(req, res) {
	res.render("home");
});

/* friends list, through a form, you can add a new friend */
app.get("/friends", function(req, res){
	res.render("friends", {friends:friends});
});

app.post("/add", function(req, res){ // coming from form submission; form submission is a POST request
	var newFriend = req.body.friendName; 
	friends.push(newFriend);
	// res.send("you have reached the post route!");
	res.redirect("/friends");
});

app.listen(3000, function(){
	console.log("Server started!");
});

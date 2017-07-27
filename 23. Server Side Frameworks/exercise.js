'use strict';
var express = require('express');
var app = express();

app.get("/", function(req, res){ // call back function
	res.send("Hi there!");
})

app.get("/bye", function(req, res){ // requesting to bye route
	res.send("Goodbye!");			// app responds with this 
})

app.get("/dog", function(req, res){
	res.send("MEOW!");
})

// reddit - to demonstrate route params
app.get("/r/:subredditName", function(req, res){ // ":something", something is like a variable of whatever you type
	res.send("Welcome to a subreddit!");
});

app.get("*", function(req, res) { // * is any URL that is not specified above. 
	res.send("You are a star!! :D");	// use case: error messages
})

app.listen(3000, function(){ // this specifies where to listen to requests
	console.log("server has started!");
}); 

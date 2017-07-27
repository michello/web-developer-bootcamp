'use strict'h

// initializing & setting up express
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get('/speak/:animal', function(req, res){
	var typeOfAnimal = req.params.animal;

	switch(typeOfAnimal) {
		case "pig":
			res.send("The pig says 'Oink'");
		case "cow":
			res.send("The cow says, 'Moo'");
		case "dog":
			res.send("The dog says, 'Woof Woof!'");
	}
});

app.get('/repeat/:word/:number', function(req, res){ // fix this route/page
	//set the appropriate HTTP header
  	res.setHeader('Content-Type', 'text/html');

	var number = Number(req.params.number);
	for (var i = 0; i < number; i++) {
		res.write(req.params.word);
	}
});

app.get('*', function(req, res){
	res.send("Sorry, page not found... what are you doing with your life? 8P");
});

app.listen(3000, function(){
	console.log('Starting!');
});
'use strict'
var express = require('express');
var app = express();

app.use(express.static("public")); // tells express to serve the content of our directory
app.set("view engine", "ejs"); // sets the extension of the render file automatically to be 'ejs'

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "Post 2", author: "Joanne"},
		{title: "Post 3", author: "Mary"}
	];

	res.render("posts", {posts: posts});
})

app.listen(3000, function(){
	console.log("App is running now!");
});
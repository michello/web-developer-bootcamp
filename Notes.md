# Notes

## 20. Backend Basics

* Generic stack consists of backend language/app, server & database
* This stack sends http request to the browser (html/js/css)
* http request is sent to IP service, which figures out what to send back & then sends back an HTTP response
	- ask for webpage (request), get one back (response)
* http requests are independent of browsers
* HTTP - protocol; expect something to happen depending on what the protocol is, doesn't mean it'll actually happen 
* headers - metadata about stuff; 
	- contains content-type, date, time, status
	- status code: a number, part of protocol, standardized way to describe your request (ie. 200 - OK)
* requests: has a verb or type (ie. get/post)
	- get request: asking to recieve info, retrieving info but can send info about what info we're looking for
	- post: pushing data into database
* query string:
	- ex. when you search stuff in reddit: www.reddit.com/search?q=corgis
	- server is expecting q
	- always start with '?' & seperarated by '&'

## 23. Server Side Frameworks

* Frameworks vs Library
	- inversion of control
		- you call a library (you control a library)
			- library is collection of functionality you call
		- the above is inverted for frameworks: framework calls you
			- control flow is already in the framework; there are predefined white spots you fill in w/ your code
* Express - framework
	- popular node framework
	- heighweight/lightweight: how much framework does for you and how much you have to do yourself
		- heavy: not too much blanks for you to fill
	- very light weight: you know what exactly you do
	- unopinionated: lets you do things the way you want; more freedom with you you wanna structure crap
* http response/request lifestyle
	- go to url
	- hit enter
	- you ask for webpage (http response, which contains verb/type) and could send data
	- the url/page decides what to send back
	- the url/page then sends a response

* routes are responsible for listening & receiving requests & deciding what to send back

* package.json - contains the dependencies & metadata about the application

* '*' splat or route matcher - is any URL/route you haven't specified in your app

* order of routes are sequential
	- aka, first route that matches/triggers, request has been handle and won't move on
* dry - don't repeat yourself
* route params - to help you listen for custom url paths

## Intermediate Express
* EJS -- templating langauge for javascript
	- EJS stands for embedded javascript
	- format: <%= SHIT HERE IS TREATED LIKE JS %>
	- EJS brackets: <%= %>
* pass variable as object you may want to use in your EJS like:
	- res.render("fileName.ejs", { ejsVarName:jsVarName })
* EJS tags (wrapped around stuff in every line that is javascript):
	- <%= > : this is evaluated; like <%= 5 + 5 >; and will be added to the HTML
	- <% %> : will run the code; for logic crap
* EJS tags (love.ejs):
	<% if (thingVar.toLowerCase() === "rusty") { %>
* partials: templates of stuff we repeat that we can just import and use

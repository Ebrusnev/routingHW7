var express = require('express');
var parser = require('body-parser')
var _ = require('underscore');
var ejs = require('ejs');
var fs = require('fs');

var app = express();
app.use(parser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get("/", function(req, res){
	res.render('form.ejs');
});

app.post('/', function(req, res){
	var userName = req.body.name;
	var comment = req.body.comment;
	if(userName.length < 6 || comment.length < 2){
		res.send('Require more simbols');
	}
	if(!req.xhr){
		res.json(req.body);
		fs.writeFile('./data.txt', userName + " " + comment, function(){
			console.log('The file is written!');
			res.end('gg');
		});
	}
});
app.listen(3030, function() {
	console.log('Server is listening on port 3030');
});
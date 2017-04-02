var express = require('express');
var parser = require('body-parser')
var _ = require('underscore');
var ejs = require('ejs');

var app = express();
app.use(parser.urlencoded({extended: false}))
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get("/", function(req, res){
	res.send('Hello There!')
});

app.get('/articles', function(req, res){
});

app.get('/articles/:id', function(req, res){
	var artcls = _.find(posted, function(elm) {
		return req.params.id == elm.id;
		res.send(artcls);
	})
});
app.post('/articles', function(req, res){
	var userName = req.body.name;
	var comment = req.body.comment;

});
app.listen(3030, function() {
	console.log('Server is listening on port 3030');
});
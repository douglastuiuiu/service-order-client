var express = require('express'),
	bodyParser = require('body-parser'),
	config = require('./config/config'),
	SortingServiceException = require('./exception/sortingServiceException');

var	app = express();
app.use(bodyParser.json()); 

var port = process.env.PORT || config.port; 
var basePath = '/books';

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key].toLowerCase();
        var y = b[key].toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

app.post(basePath, function(req, res) {
	if(req.body.sort == null){
		throw new SortingServiceException('sort cannot be null!');
	}if(req.body.sort.length==0){
		res.status(200).send([]);
	}

	var books = req.body.books;
	for(var i = 0; i < req.body.sort.length;i++){
	    books = sortByKey(books, req.body.sort[i].rule);
	    if(req.body.sort[i].direction=='DESC'){
	    	books.reverse();
	    }
	}

	res.status(200).send(books);
});

app.listen(port);
console.log('[sort-service-client] Server started on port ' + port);
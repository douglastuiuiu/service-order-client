var express = require('express'),
	bodyParser = require('body-parser'),
	config = require('./config/config'),
	SortingServiceException = require('./exception/sortingServiceException');

var	app = express();
app.use(bodyParser.json()); 

var port = process.env.PORT || config.port; 
var basePath = '/books';

function compare(a, b, sortList) {
	for(var i = 0; i < sortList.length;i++){
		var sort = sortList[i];
		
		if(sort.direction == 'ASC') {
			if(a[sort.rule] < b[sort.rule]) {
				return -1;
			} else if (a[sort.rule] > b[sort.rule]) {
				return 1;
			}
		} else if(sortList[i].direction == 'DESC') {
			if(a[sort.rule] > b[sort.rule]) {
				return -1;
			} else if (a[sort.rule] < b[sort.rule]) {
				return 1;
			}
		}	

		return 0;
	}
}

app.post(basePath, function(req, res) {
	if(req.body.sort == null){
		throw new SortingServiceException('sort cannot be null!');
	}if(req.body.sort.length==0){
		res.status(200).send([]);
	}

	var books = req.body.books.sort(function(a, b) {
		return compare(a,b, req.body.sort);
	});

	res.status(200).send(books);
});

app.listen(port);
console.log('[sort-service-client] Server started on port ' + port);
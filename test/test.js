var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8888");

// UNIT test begin

describe("SORT SERVICE TEST",function(){

	it("should SortingServiceException",function(done){
		var json = { 
			"books":[
				{
					"id": 1,
					"title": "Java How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				},
				{
					"id": 2,
					"title": "Patterns of Enterprise Application Archtecture",
					"author": "Martin Fowler",
					"year": "2002"
				},
				{
					"id": 3,
					"title": "Head First Deseign Patterns",
					"author": "Elisabeth Freeman",
					"year": "2004"
				},
				{
					"id": 4,
					"title": "Internet & World Wide Web: How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				}
			]
		}

		server.post("/books")
		.send(json)
		.expect("Content-type",/text/)
		.expect(500)
		.end(function(err,res){
			(res.text.indexOf('SortingServiceException')>-1).should.equal(true);
			done();
		});
	});

	it("service is ON",function(done){
		var json = { 
			"books":[
				{
					"id": 1,
					"title": "Java How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				},
				{
					"id": 2,
					"title": "Patterns of Enterprise Application Archtecture",
					"author": "Martin Fowler",
					"year": "2002"
				},
				{
					"id": 3,
					"title": "Head First Deseign Patterns",
					"author": "Elisabeth Freeman",
					"year": "2004"
				},
				{
					"id": 4,
					"title": "Internet & World Wide Web: How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				}
			]
		}		
		json.sort = [];

		server.post("/books")
		.send(json)
		.expect("Content-type",/json/)
		.expect(200)
		.end(function(err,res){
			res.status.should.equal(200);
			done();
		});
	});

	it("return 404",function(done){
		server.get("/random")
		.expect(404)
		.end(function(err,res){
			res.status.should.equal(404);
			done();
		});
	});

	it("title ASC",function(done){
		var json = { 
			"books":[
				{
					"id": 1,
					"title": "Java How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				},
				{
					"id": 2,
					"title": "Patterns of Enterprise Application Archtecture",
					"author": "Martin Fowler",
					"year": "2002"
				},
				{
					"id": 3,
					"title": "Head First Deseign Patterns",
					"author": "Elisabeth Freeman",
					"year": "2004"
				},
				{
					"id": 4,
					"title": "Internet & World Wide Web: How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				}
			]
		}		
		json.sort = [{"rule": "title", "direction": "ASC"}];

		server.post("/books")
		.send(json)
		.expect("Content-type",/json/)
		.expect(200)
		.end(function(err,res){
			var order = '', orderOK = '3-4-1-2-';

			for (var i = 0; i < res.body.length; i++){
			  order += res.body[i].id+'-';
			};

			order.should.equal(orderOK);
			done();
		});
	});

	it("title DESC",function(done){
		var json = { 
			"books":[
				{
					"id": 1,
					"title": "Java How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				},
				{
					"id": 2,
					"title": "Patterns of Enterprise Application Archtecture",
					"author": "Martin Fowler",
					"year": "2002"
				},
				{
					"id": 3,
					"title": "Head First Deseign Patterns",
					"author": "Elisabeth Freeman",
					"year": "2004"
				},
				{
					"id": 4,
					"title": "Internet & World Wide Web: How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				}
			]
		}		
		json.sort = [{"rule": "title", "direction": "DESC"}];

		server.post("/books")
		.send(json)
		.expect("Content-type",/json/)
		.expect(200)
		.end(function(err,res){
			var order = '', orderOK = '2-1-4-3-';

			for (var i = 0; i < res.body.length; i++){
			  order += res.body[i].id+'-';
			};

			order.should.equal(orderOK);
			done();
		});
	});

	it("year ASC",function(done){
		var json = { 
			"books":[
				{
					"id": 1,
					"title": "Java How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				},
				{
					"id": 2,
					"title": "Patterns of Enterprise Application Archtecture",
					"author": "Martin Fowler",
					"year": "2002"
				},
				{
					"id": 3,
					"title": "Head First Deseign Patterns",
					"author": "Elisabeth Freeman",
					"year": "2004"
				},
				{
					"id": 4,
					"title": "Internet & World Wide Web: How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				}
			]
		}		
		json.sort = [{"rule": "year", "direction": "ASC"}];

		server.post("/books")
		.send(json)
		.expect("Content-type",/json/)
		.expect(200)
		.end(function(err,res){
			var order = '', orderOK = '2-3-1-4-';

			for (var i = 0; i < res.body.length; i++){
			  order += res.body[i].id+'-';
			};

			order.should.equal(orderOK);
			done();
		});
	});

	it("year DESC",function(done){
		var json = { 
			"books":[
				{
					"id": 1,
					"title": "Java How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				},
				{
					"id": 2,
					"title": "Patterns of Enterprise Application Archtecture",
					"author": "Martin Fowler",
					"year": "2002"
				},
				{
					"id": 3,
					"title": "Head First Deseign Patterns",
					"author": "Elisabeth Freeman",
					"year": "2004"
				},
				{
					"id": 4,
					"title": "Internet & World Wide Web: How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				}
			]
		}		
		json.sort = [{"rule": "year", "direction": "DESC"}];

		server.post("/books")
		.send(json)
		.expect("Content-type",/json/)
		.expect(200)
		.end(function(err,res){
			var order = '', orderOK = '1-4-3-2-';

			for (var i = 0; i < res.body.length; i++){
			  order += res.body[i].id+'-';
			};

			order.should.equal(orderOK);
			done();
		});
	});

	it("author ASC, title DESC",function(done){
		var json = { 
			"books":[
				{
					"id": 1,
					"title": "Java How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				},
				{
					"id": 2,
					"title": "Patterns of Enterprise Application Archtecture",
					"author": "Martin Fowler",
					"year": "2002"
				},
				{
					"id": 3,
					"title": "Head First Deseign Patterns",
					"author": "Elisabeth Freeman",
					"year": "2004"
				},
				{
					"id": 4,
					"title": "Internet & World Wide Web: How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				}
			]
		}		
		json.sort = [
			{
				"rule": "author",
				"direction": "ASC"
			},
			{
				"rule": "title",
				"direction": "DESC"
			}
		];

		server.post("/books")
		.send(json)
		.expect("Content-type",/json/)
		.expect(200)
		.end(function(err,res){
			var order = '', orderOK = '1-4-3-2-';

			for (var i = 0; i < res.body.length; i++){
			  order += res.body[i].id+'-';
			};

			order.should.equal(orderOK);
			done();
		});
	});

	it("author DESC",function(done){
		var json = { 
			"books": [
				{
					"id": 1,
					"title": "Java How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				},
				{
					"id": 2,
					"title": "Patterns of Enterprise Application Archtecture",
					"author": "Martin Fowler",
					"year": "2002"
				},
				{
					"id": 3,
					"title": "Head First Deseign Patterns",
					"author": "Elisabeth Freeman",
					"year": "2004"
				},
				{
					"id": 4,
					"title": "Internet & World Wide Web: How to Program",
					"author": "Deitel & Deitel",
					"year": "2007"
				}
			]
		}		
		json.sort = [{"rule": "author", "direction": "DESC"}];

		server.post("/books")
		.send(json)
		.expect("Content-type",/json/)
		.expect(200)
		.end(function(err,res){
			var order = '', orderOK = '2-3-1-4-';

			for (var i = 0; i < res.body.length; i++){
			  order += res.body[i].id+'-';
			};

			order.should.equal(orderOK);
			done();
		});
	});


});
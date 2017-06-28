## Sort Service Client.


Requires [NodeJs, Npm, Mocha]
	
	sudo apt-get install nodejs
	sudo apt-get install mocha


To install project dependencies, run

    npm install


Run the service

	npm start


Run the unit-tests (service needs to be running)

    npm test


##Definitions

	Default endpoint: http://localhost:8888/books
	HTTP Method: POST
	Content-Type: JSON


#Testing (service needs to be running)

	For testing use the Postman collection in folder application or send request with other http client.
	The request must be similar to model below:

	title ASC
		{ 
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
			],
			"sort": [
				{
					"rule": "title",
					"direction": "ASC"
				}
			]
		}

	author ASC, title DESC
		{ 
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
			],
			"sort": [
				{
					"rule": "author",
					"direction": "ASC"
				},
				{
					"rule": "title",
					"direction": "DESC"
				}
			]
		}

	year DESC, author DESC, title ASC
		{ 
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
			],
			"sort": [
				{
					"rule": "year",
					"direction": "DESC"
				},
				{
					"rule": "author",
					"direction": "DESC"
				},
				{
					"rule": "title",
					"direction": "ASC"
				}
			]
		}

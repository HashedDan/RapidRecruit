var express = require('express');
	// organizations = require('./routes/organizations'),
	// members = require('./routes/members'),
	// events = require('./routes/events'),
	// lists = require('./routes/lists'),
	// recruits = require('./routes/recruits'),
	// signin = require('./routes/signin'),
	// votes = require('./routes/votes')

var app = express();

app.set("port", process.env.PORT || 8084);

var db = require('./connectDB');
db.connect();

// app.use('/api', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   console.log("---------");
//   next();
// });

// app.use('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   console.log("---------");
//   next();
// });

/*
	ROUTE HANDLERS
*/
// app.get('/test', function(req, res) {
// 	db.query('SELECT * FROM organizations', function(err, result) {
// 	  // console.log('name: %s and school: %s', result.rows[0].org_name, result.rows[0].org_school);
// 	  // var responseString = "Database successfully queried --> name: " + result.rows[0].org_name + "school: " + result.rows[0].org_school;
// 	  // //since the row object is just a hash, it can be accessed also as follows
// 	  // // console.log('name: %s and age: %d', result.rows[0]['id'], result.rows[0]['name']);
// 	  res.send(JSON.stringify(result.rows));
// 	});
// });
// app.get('/organizations', organizations);
// app.get('/members', members);
// app.get('/events', events);
// app.get('/lists', lists);
// app.get('/recruits', recruits);
// app.get('/signin', signin);
// app.get('/votes', votes);

app.get('//organizations', function(req,res) {
	db.query('SELECT * FROM organizations', function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//members', function(req,res) {
	db.query('SELECT * FROM members', function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//events', function(req,res) {
	db.query('SELECT * FROM events', function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//lists', function(req,res) {
	db.query('SELECT * FROM lists', function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//recruits', function(req,res) {
	res.send("NOT COMPLETE");
});
app.get('//signin', function(req,res) {
	res.send("NOT COMPLETE");
});
app.get('//votes', function(req,res) {
	res.send("NOT COMPLETE");
});


// db.query("INSERT INTO basic_names(id, name) values(4, $1)", ['Test']);

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }

app.listen(app.get("port"), function () {
  console.log('Server running on http://localhost:' + app.get("port"))
})
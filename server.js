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

app.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
	if (req.query.org != undefined) {
		db.query('SELECT * FROM members WHERE member_org =' +req.query.org, function(err, result) {
		  res.send(JSON.stringify(result.rows));
		});
	}
	else {
		db.query('SELECT * FROM members', function(err, result) {
		  res.send(JSON.stringify(result.rows));
		});
	}
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
app.get('//votes', function(req,res) {
	db.query('SELECT * FROM votes', function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//organizations/:id', function(req,res) {
	db.query('SELECT * FROM organizations WHERE org_id = '+ req.params.id, function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//members/:id', function(req,res) {
	console.log(req.params.id);
	db.query('SELECT * FROM members WHERE member_id = '+ req.params.id, function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//events/:id', function(req,res) {
	db.query('SELECT * FROM events WHERE event_id = '+ req.params.id, function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//lists/:id', function(req,res) {
	db.query('SELECT * FROM lists WHERE list_id = '+ req.params.id, function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//votes/:id', function(req,res) {
	db.query('SELECT * FROM votes WHERE vote_id = '+ req.params.id, function(err, result) {
	  res.send(JSON.stringify(result.rows));
	});
});
app.get('//recruits', function(req,res) {
	if (req.query.list != undefined) {
		db.query('SELECT * FROM recruits WHERE list_id =' +req.query.list, function(err, result) {
		  res.send(JSON.stringify(result.rows));
		});
	}
	else {
		db.query('SELECT * FROM recruits', function(err, result) {
		  res.send(JSON.stringify(result.rows));
		});
	}
});
app.get('//signin', function(req,res) {
	res.send("NOT COMPLETE");
});



// db.query("INSERT INTO basic_names(id, name) values(4, $1)", ['Test']);

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }

app.listen(app.get("port"), function () {
  console.log('Server running on http://localhost:' + app.get("port"))
})
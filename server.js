var express = require('express'),
	organizations = require('./routes/organizations'),
	members = require('./routes/members'),
	events = require('./routes/events'),
	lists = require('./routes/lists'),
	recruits = require('./routes/recruits'),
	signin = require('./routes/signin'),
	votes = require('./routes/votes')

var app = express()

app.set("port", process.env.PORT || 3001);

app.use('/api', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/*
	ROUTE HANDLERS
*/
app.get('/organizations', organizations);
app.get('/members', members);
app.get('/events', events);
app.get('/lists', lists);
app.get('/recruits', recruits);
app.get('/signin', signin);
app.get('/votes', votes);


// db.query("INSERT INTO basic_names(id, name) values(4, $1)", ['Test']);

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }

app.listen(app.get("port"), function () {
  console.log('Server running on http://localhost:' + app.get("port"))
})
var express = require('express');
var db = require('../connectDB');

var router = express.Router();

router.get('/', function(req, res) {
    db.query('SELECT * FROM members', function(err, result) {
	  // console.log('name: %s and school: %s', result.rows[0].org_name, result.rows[0].org_school);
	  // var responseString = "Database successfully queried --> name: " + result.rows[0].org_name + "school: " + result.rows[0].org_school;
	  // //since the row object is just a hash, it can be accessed also as follows
	  // // console.log('name: %s and age: %d', result.rows[0]['id'], result.rows[0]['name']);
	  res.send(JSON.stringify(result.rows));
	});
});

module.exports = router;
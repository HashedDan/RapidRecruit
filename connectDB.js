var pg = require('pg');
var conString = "postgres://g4:guqdTp5A2VSUjedF@localhost:5432/g4";
module.exports = new pg.Client(conString);
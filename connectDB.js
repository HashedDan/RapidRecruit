var pg = require('pg');
var conString = "postgres://nylvbgixchinga:56ad58ff2c4552bba4c1938d65d71056298463ce29c1a0b60725c1748235601c@ec2-174-129-224-33.compute-1.amazonaws.com:5432/d47re80ao05f5k?ssl=true";
module.exports = new pg.Client(conString);
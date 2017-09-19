const express = require('express')
const app = express()

var router = express.Router();

app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}


router.get('/test', function(req, res) {
	res.send("api test");
});


router.get('/', function(req, res) {
	res.send("base url route");
});



app.listen(app.get("port"), function () {
  console.log('Server running on http://localhost:' + app.get("port"))
})

app.use('/api', router);
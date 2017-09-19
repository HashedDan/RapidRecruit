const express = require('express')
const app = express()

app.set("port", process.env.PORT || 3001);

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.get('/api', function(req, res) {
	res.json({message: "base api url"});
})

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.listen(app.get("port"), function () {
  console.log('Server running on http://localhost:' + app.get("port"))
})
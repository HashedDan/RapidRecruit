const express = require('express')
const app = express()

var guy = "hey"

if (process.env.NODE_ENV === 'production') {
	guy = "bye"
	app.use(express.static('client/build'));
}

app.set("port", process.env.PORT || 3001);

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.get('/api', function(req, res) {
	res.send('Base url for API' + guy)
})

app.get('/testStatic', function(req, res) {
	res.send()
})

app.listen(app.get("port"), function () {
  console.log('Server running on http://localhost:' + app.get("port"))
})
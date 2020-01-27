const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(__dirname));

app.get('home/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Magic port ${port}!`))
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

let message = "Hello World"

app.get('/', (req, res) => {
    res.send('{' + message + '}');
});

app.get('/message', (req, res) => { 
    message = req.query.message;
	res.send('message');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 8080;

const app = express();

app.use(morgan('tiny'));

app.use(express.static('public'));

app.get("^/api/users$", (req, res) => {
    res.contentType = 'application/json';
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/public/users.json');
});

app.listen(port, () => console.log(`Node server is running on http://localhost:${port}`));

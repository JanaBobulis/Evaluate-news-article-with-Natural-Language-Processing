const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { read } = require('fs');
const { response } = require('express');
const { ValidationError } = require('webpack');
const route = require('./route');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', route);

// designates what port the app will listen to for incoming requests
module.exports = app.listen(process.env.PORT || 8083, () => {
    console.log('Example app listening on port 8083!')
})


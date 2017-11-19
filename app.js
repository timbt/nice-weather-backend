const express = require('express');
const url = require('url');
const cors = require('cors');


// Initialize an express app
const app = express();

app.use(cors());
app.get('/', (req, res) => {
    const query = url.parse(req.url, true).query;
    if (query.location) {
        let location = query.location;
        console.log(query.location);
        res.json({
            type: 'weather-data',
            location: location
        });
    }
});

module.exports = app;
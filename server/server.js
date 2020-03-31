const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/app-pages', (req, res) => {
  fs.readFile('./json-data/app-pages.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
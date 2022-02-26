// server/index.js

const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');

const knexConfig = require('../db/knexfile');
//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV])

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/getorders', (req, res) => {
  const {email} = req.query
  knex.raw(`SELECT tr.tracking_number, orderNo, articleNo, status_text, status_details, street, city, zip_code, destination_country_iso3, quantity, product_name, articleImageUrl, email FROM checkpoints ch
  JOIN tracking tr
  ON tr.tracking_number = ch.tracking_number
  WHERE timestamp  IN (SELECT MAX(timestamp)  FROM checkpoints GROUP BY tracking_number)
  AND email='${email}'`)
  .then((orders) => {
    return res.json(orders);
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


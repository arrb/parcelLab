// server/index.js

const path = require('path');
const express = require("express");


const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/getorder", (req, res) => {
  // var email = req.query

  res.json([
    { 
      orderNumber: "ORD-123-2018",
      currentStatus: "Order processed",
      address: "some address st.",
  
    },
    { 
      orderNumber: "780XX004",
      currentStatus: "Pick-up planned",
      address: "some address st. 2",
  
    },
    { 
      orderNumber: "ORD-123-2018",
      currentStatus: "Order processed",
      address: "some address st.",
  
    },
  ])
});


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


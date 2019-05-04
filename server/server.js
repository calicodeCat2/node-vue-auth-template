const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const app = express();
const morgan = require('morgan');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({});
  }
  next()
})

var routes_setter = require("./config/routes.js");
routes_setter(app);

app.listen(port, function() {
  console.log("Listening on port", port);
});


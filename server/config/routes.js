const express = require("express");
const auth = require("../controllers/auth");
const enableCors = require("../controllers/enableCors");


module.exports = app => {
 
  app.all("/*", enableCors.corsEnable);
  app.get("/hello", auth.hello);
  app.post("/register", auth.register);
  app.post("/login", auth.login);
};
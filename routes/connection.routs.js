module.exports = app => {
    const connection = require("../controller/connection.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/mysql", connection.mysql);
  
    // Retrieve all Tutorials
    router.get("/mongodb", connection.mongodb);
  
    app.use('/api/connect', router);
  };
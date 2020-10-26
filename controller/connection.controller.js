const Sequelize = require('sequelize');

exports.mysql = (req, res) => {
    const sequelize = new Sequelize('mysql://root:@localhost/easyfizzy');

    sequelize
        .authenticate()
        .then(() => {
            res.status(200).send({
                message:
                    "Connection has been established successfully for Mysql DB."
                });
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Errorn connecting MySql DB."
            });
        });
  };

// Retrieve all Tutorials from the database.
exports.mongodb = (req, res) => {
    
};
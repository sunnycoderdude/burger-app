// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(userInput, cb) {
    orm.insertOne("burgers", "burger_name", userInput, function(res) {
      cb(res);
    });
  },
  update: function(toThis, fromThis, cb) {
    orm.updateOne("burgers", toThis, fromThis, function(res) {
      cb(res);
    });
  },
  delete: function(toDelete, cb) {
    orm.deleteOne("burgers", toDelete, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

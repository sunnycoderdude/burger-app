var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableInput, column, value, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, column, value], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, toThis, fromThis, cb) {
    var queryString = `UPDATE ${tableInput} SET ${toThis} WHERE ${fromThis}`;
    connection.query(queryString, [tableInput, toThis, fromThis], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function(tableInput, toDelete, cb) {
    var queryString = `DELETE FROM ?? WHERE ${toDelete}`;
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, tableCol, value, cb) {
    connection.query("INSERT INTO ?? (??) VALUES(?)", [table, tableCol, value], function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
  },
  updateOne: function(tableInput, toThis, fromThis, cb) {
    var queryString = `UPDATE ${tableInput} SET devoured = TRUE WHERE ${fromThis}`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function(tableInput, toDelete, cb) {
    var queryString = `DELETE FROM ?? WHERE ${toDelete}`;
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
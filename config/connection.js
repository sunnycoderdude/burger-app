var mysql = require("mysql");

if(process.env.JAWSDB_url) {
  connection = mysql.createConnection(process.env.JAWSDB_URL) 
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sunny123",
  database: "burgers_db"
  }); 
}


module.exports = connection;
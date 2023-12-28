const mysql = require('mysql2/promise');

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" }); 

const dbConnection = mysql.createConnection({
    host: process.env.MYSQL_URL,
    user: process.env.MYSQL_USER,
    password: "",
    database: process.env.MYSQL_DATABASE_NAME,
    multipleStatements: true
}
);


module.exports = dbConnection;
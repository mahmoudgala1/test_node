const mysql = require('mysql2/promise');

const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    multipleStatements: true
}
);


module.exports = dbConnection;
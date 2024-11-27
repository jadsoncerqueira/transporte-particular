import mysql from 'mysql2/promise';
import 'dotenv/config';

const connection = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: 3306
})

export default connection;
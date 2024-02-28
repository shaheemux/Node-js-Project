import mysql from 'mysql2';
import { config } from 'dotenv';
config();

let pool = mysql.createPool({
    host: process.env.Host,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database
}).promise()


export {pool}

//config files connects to the database

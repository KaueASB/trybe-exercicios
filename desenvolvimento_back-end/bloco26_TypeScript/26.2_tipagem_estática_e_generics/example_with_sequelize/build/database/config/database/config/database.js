"use strict";
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'SUASENHA',
    database: process.env.DB_NAME || 'books_api_sequelize',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
};
module.exports = config;

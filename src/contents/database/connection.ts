export const connection = (database: String) => `
${database === "MySql" ?
                `
const mysql = require("mysql2/promise");

const host = process.env.MYSQL_HOST || "localhost";
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const port = process.env.MYSQL_PORT || "3306";
const database = process.env.MYSQL_DB;

const connection = mysql.createPool({
  host: host,
  user: user,
  password: password,
  port: port,
  database: database,
});

module.exports = connection;`
                : database === "PostgreSQL"
                        ?
                        `
const Pool = require("pg-pool");

const port = process.env.POSTGRES_PORT || 5432;
const database = process.env.POSTGRES_DB;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;

const pool = new Pool({
  database: database,
  user: user,
  port: port,
  password: password,
  host: "localhost",
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000,
});

module.exports.dbQuery = (text, values) => {
  return pool.query(text, values);
};

module.exports.connect = () => {
  return pool.connect();
};
        `
                        :
                        `
                import mongoose from "mongoose";

                        const connectToDatabase = async () => {
                          try {
                            await mongoose.connect(process.env.MONGODB_URI);
                        
                            console.log("Connected to database!");
                          } catch (err) {
                            console.error("Error connecting to database:", err.message);
                            process.exit(1);
                          }
                        };
                        
                        export default connectToDatabase;`
        }
`;
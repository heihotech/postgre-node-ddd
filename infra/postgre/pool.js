const { Pool } = require("pg");

const { DBUser, DBPass, DBName, DBHost, DBPort, DBLog } = require("../../internal/config").Var;

const dbPort = DBPort !== "" ? Number(DBPort) : 5432;
const postgreCon = `postgres://${DBUser}:${DBPass}@${DBHost}:${dbPort}/${DBName}`;
const databaseConfig = { connectionString: postgreCon };
const pool = new Pool(databaseConfig);

try {
  pool.on("connect", () => {
    console.log("Connection has been established successfully.");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = pool;

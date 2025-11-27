import { config } from "dotenv";
import { Pool } from "pg";
config();

// Create connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: true,
});

// Get promise-based connection
// const promisePool = pool.promise();

// Test connection
pool.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
    return;
  }
  console.log("✓ Database connected successfully");
});

// function query() {
//   async (text, params) => {
//     const start = Date.now();
//     try {
//       const res = await pool.query(text, params);
//       const duration = Date.now() - start;
//       console.log("Executed query", { text, duration, rows: res.rowCount });
//       return res;
//     } catch (error) {
//       console.error("Database query error:", error);
//       throw error;
//     }
//   };
// }

export default pool;

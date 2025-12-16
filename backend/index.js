const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
app.use(express.json());

// KHÔNG kết nối ngay, chỉ tạo pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get("/api/test", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT 'Hello Docker' AS message"
    );
    res.json(rows);
  } catch (err) {
    console.error("MySQL error:", err.message);
    res.status(500).json({ error: "Database not ready" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

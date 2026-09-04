// ============================================
// MySQL Database Connection Pool
// Uses mysql2/promise for async/await support
// ============================================
// NOTE: dotenv is loaded by server.js before this module is imported.
// Do NOT call require('dotenv').config() here — it would use a
// path-relative lookup that can break when this file is required
// from a different working directory (e.g. during tests).

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,       // No fallback — must be set in .env
  database: process.env.DB_NAME || 'sajilohub',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection on startup
pool.getConnection()
  .then((conn) => {
    console.log(`✅ MySQL connected successfully (${process.env.DB_USER}@${process.env.DB_HOST}:${process.env.DB_PORT || 3306}/${process.env.DB_NAME})`);
    conn.release();
  })
  .catch((err) => {
    console.error('❌ MySQL connection failed:', err.message);

    if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('   → Check that DB_PASSWORD in backend/.env matches your MySQL password.');
    } else if (err.code === 'ECONNREFUSED') {
      console.error('   → Is MySQL running? Check DB_HOST and DB_PORT in backend/.env.');
    } else if (err.code === 'ER_BAD_DB_ERROR') {
      console.error('   → Database not found. Run the schema: mysql -u root -p < database/schema.sql');
    }
  });

module.exports = pool;

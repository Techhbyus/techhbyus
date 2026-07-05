import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
  // Without this, cloud MySQL providers (Aiven included) silently drop idle
  // pooled connections. The next query goes out on that half-dead socket,
  // MySQL commits it, but the response never arrives — mysql2 throws even
  // though the row is already written. Keep-alive pings stop the connection
  // going stale in the first place.
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
});

export default pool;

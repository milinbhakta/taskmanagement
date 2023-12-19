import { Pool } from "pg";

// PostgreSQL configuration
const pool = new Pool({
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "",
  database: process.env.DB_DATABASE || "",
  port: parseInt(process.env.DB_PORT || "") || 5432,
});

export default pool;

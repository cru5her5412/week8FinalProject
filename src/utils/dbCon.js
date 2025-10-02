import pg from "pg";
const connStr = process.env.DB_CONNECTION_STR;
export const db = new pg.Pool({ connectionString: connStr });

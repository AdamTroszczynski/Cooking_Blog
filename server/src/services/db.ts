import { Pool, type QueryResult } from 'pg';
import { loadEnv } from '@/utils/envLoader/envLoader';

loadEnv();

/** Create pool connection */
export const client = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

/**
 * Execute sql query to database
 * @param {string} sql SQL query to execute
 * @param {Array<string | number>} params SQL parameters
*/
export const query = async (sql: string, params?: Array<string | number>): Promise<QueryResult> => {
  const start = Date.now();
  const res = await client.query(sql, params);
  const duration = Date.now() - start;
  console.log('Executed sql query: ', { sql, duration, rows: res.rowCount });
  return res;
};

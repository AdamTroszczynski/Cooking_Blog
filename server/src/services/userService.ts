import { query } from '@/services/db';
import type { QueryResult } from 'pg';

/**
 * Get user by username from database
 * @param {string} username Username to search
 * @returns {Promise<QueryResult>} Query result
 */
export const getUserByUsername = async (username: string): Promise<QueryResult> => {
  const sql = `
    SELECT userid, username, email, registered
    FROM users
    WHERE username = ${username}
  `;

  return await query(sql, [username]);
}

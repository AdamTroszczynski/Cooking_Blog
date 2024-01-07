import { query } from '@/services/db';
import type { QueryResult } from 'pg';

/**
 * Get user by username from database
 * @param {string} username Username to search
 * @returns {Promise<QueryResult>} Query result
 */
export const getUserByUsername = async (username: string): Promise<QueryResult> => {
  const sql = 'SELECT userid, username, email, passwordhash, registered FROM users WHERE username = $1';
  return await query(sql, [username]);
}

/**
 *  Get user by id from database
 * @param {number} id User id to find
 * @returns {Promise<QueryResult>} Query result
 */
export const getUserById = async (id: number): Promise<QueryResult> => {
  const sql = 'SELECT userid, username, email, registered FROM users WHERE userid = $1';
  return await query(sql, [id]);
};

/**
 * Read last user id from database
 * @returns {Promise<QueryResult>} Query result
 */
export const getLastUserId = async (): Promise<QueryResult> => {
  const sql = 'SELECT MAX(userid) FROM users';
  return await query(sql);
};

/**
 * Add new user to database
 * @param {number} userid User id
 * @param {string} username Username
 * @param {string} email Email
 * @param {string} passwordHash Password hash
 * @returns {Promise<QueryResult>} Query result
 */
export const createUser = async (userid: number, username: string, email: string, passwordHash: string): Promise<QueryResult> => {
  const sql = 'INSERT INTO users (userid, username, email, passwordhash, registered) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)';
  return await query(sql, [userid, username, email, passwordHash]);
};

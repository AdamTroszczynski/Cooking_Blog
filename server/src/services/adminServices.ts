import { query } from '@/services/db';
import type { QueryResult } from 'pg';

/**
 * Clear all tables from the database
 * @returns {Promise<QueryResult>} Query result
 */
export const clearTables = async (): Promise<QueryResult> => {
  const sql = 'TRUNCATE users, difficultLevels, dishTypes, recipes, tags, likes, favorite, comments';
  return await query(sql);
};

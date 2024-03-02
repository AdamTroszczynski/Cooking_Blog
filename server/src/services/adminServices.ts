import { query } from '@/services/db';
import type { QueryResult } from 'pg';

/**
 * Clear all tables from the database
 * @returns {Promise<QueryResult>} Query result
 */
export const clearTables = async (): Promise<QueryResult> => {
  console.log('===> ADMIN_SERVICE: Clear all tables');
  const sql = 'TRUNCATE users, difficultLevels, dishTypes, recipes, tags, likes, favorite, comments';
  const result = await query(sql);
  console.log('===> ADMIN_SERVICE: Finished clearing tables');
  return result;
};

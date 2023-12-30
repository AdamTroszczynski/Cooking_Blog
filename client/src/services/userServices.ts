import axios from 'axios';
import type { UserToken } from '@/types/commonTypes';
import UserMapper from '@/mappers/UserMapper';
import { AUTH_API_URL } from '@/const/commonConst';
import User from '@/models/User';

/**
 * Login user service
 * @param {string} username Username
 * @param {string} password Password
 * @returns {Promise<UserToken>} Object with user data and token
 */
export const login = async (username: string, password: string): Promise<UserToken> => {
  const response = await axios.post(`${AUTH_API_URL}/login`, { username, password });
  const data = response.data;
  return { user: UserMapper.mapToUser(data.user), token: data.token };
};

/**
 * Get user data based on valid token
 * @param {string} token Token
 * @returns {Promise<User>} User data
 */
export const getUserFromToken = async (token: string): Promise<User> => {
  const response = await axios.post(`${AUTH_API_URL}/userFromToken`, null, {
    headers: { 'x-access-token': token },
  });

  const data = response.data;
  return UserMapper.mapToUser(data);
};

import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '@/models/User';
import RequestError from '@/models/errors/RequestError';
import UserMapper from '@/mappers/UserMapper';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import { getUserByUsername, getUserById, getLastUserId, createUser } from '@/services/userService';
import type { UserToken } from '@/types/commonTypes';
import type { TokenRequest } from '@/interfaces/customRequests';

/**
 * Helper function to prepare/create new token
 * @param {User} user User object
 * @returns {string} string token
 */
const createToken = (user: User): string => {
  const token = jwt.sign(
    { userid: user.userId, email: user.email },
    process.env.TOKEN_KEY || 'abcd1234',
    { expiresIn: '1h' },
  );

  return token;
};

/**
 * Login user action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const loginAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(StatusCodesEnum.BadRequest).json(
        new RequestError(ErrorMessagesEnum.ValidationError, 'All inputs are required !')
      );

      return;
    }

    const result = await getUserByUsername(username);
    const user: User = UserMapper.mapToUser(result.rows[0]);
    const hash: string = result.rows[0].passwordhash;

    if (user.userId && (await bcrypt.compare(password, hash))) {
      const token = createToken(user);
      const resResult: UserToken = { user, token };
      res.status(StatusCodesEnum.OK).json(resResult);
      return;
    }

    res.status(StatusCodesEnum.BadRequest).json(
      new RequestError(ErrorMessagesEnum.ValidationError, 'Wrong username or password !')
    );
  } catch (err) {
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};

/**
 * Create new user action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const registerAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password, passwordRepeat } = req.body;

    if (!(username && email && password && passwordRepeat)) {
      res.status(StatusCodesEnum.BadRequest).json(
        new RequestError(ErrorMessagesEnum.ValidationError, 'All inputs are required !')
      );

      return;
    }

    const oldUser = (await getUserByUsername(username)).rows[0];

    if (oldUser) {
      res.status(StatusCodesEnum.ResourceConflict).json(
        new RequestError(ErrorMessagesEnum.ResourceError, 'User already exist. Please Login')
      );

      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUserId = (await getLastUserId()).rows[0].max + 1;
    await createUser(newUserId, username, email, hashPassword);
    const result = await getUserByUsername(username);
    const user: User = UserMapper.mapToUser(result.rows[0]);
    const token = createToken(user);
    const resResult: UserToken = { user, token };
    res.status(StatusCodesEnum.NewResources).json(resResult);
  } catch (err) {
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};

/**
 * Get user from token action
 * @param {TokenRequest} req Request
 * @param {Response} res Response
 */
export const getUserFromTokenAction = async (req: TokenRequest, res: Response): Promise<void> => {
  const id = req.user!.userId;
  const result = await getUserById(id);
  const user: User = UserMapper.mapToUser(result.rows[0]);
  res.status(StatusCodesEnum.OK).json(user);
};

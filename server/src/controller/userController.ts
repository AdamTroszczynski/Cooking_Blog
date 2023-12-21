import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '@/models/User';
import UserMapper from '@/mappers/UserMapper';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import { getUserByUsername } from '@/services/userService';

/**
 * Login user action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const loginAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(StatusCodesEnum.BadRequest).json({ name: ErrorMessagesEnum.ValidationError, errorMsg: 'All inputs are required !' });
    }

    const user: User = UserMapper.mapToUser(await getUserByUsername(username));
    console.log(user);

  } catch (err) {
    res.status(StatusCodesEnum.ServerError).json({ name: ErrorMessagesEnum.ServerError, errorMsg: err });
  }
};

/**
 * Create new user action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const registerAction = async (req: Request, res: Response): Promise<void> => {

};

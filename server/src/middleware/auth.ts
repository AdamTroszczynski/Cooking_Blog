import type { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import RequestError from '@/models/errors/RequestError';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import UserMapper from '@/mappers/UserMapper';
import User from '@/models/User';
import type { TokenRequest } from '@/interfaces/customRequests';

/**
 * Middleware to verify jwt token from user
 * @param {TokenRequest} req Request
 * @param {Response} res Response
 * @param {NextFunction} next Next function
 */
export const verifyToken = (req: TokenRequest, res: Response, next: NextFunction) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    return res.status(StatusCodesEnum.ResourceForbidden).json(
      new RequestError(ErrorMessagesEnum.ResourceError, 'Token is required for authentication !')
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY || 'abcd1234');
    req.user = UserMapper.mapToUser(decoded) as User;
  } catch (err) {
    return res.status(StatusCodesEnum.Unauthorized).json(
      new RequestError(ErrorMessagesEnum.ResourceError, 'Invalid Token')
    );
  }

  return next();
};

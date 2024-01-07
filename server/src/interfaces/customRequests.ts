import { Request } from 'express';
import User from '@/models/User';

/** Request that contains token and basic user info */
export interface TokenRequest extends Request {
  user?: User;
};

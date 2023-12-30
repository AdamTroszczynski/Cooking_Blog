import User from '@/models/User';

export type UserToken = {
  user: User;
  token: string;
};

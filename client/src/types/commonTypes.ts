import User from '@/models/User';

export type UserToken = {
  user: User;
  token: string;
};

export type LoginForm = {
  username: string;
  password: string;
};

export type RegisterForm = {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export type DishCategory = {
  name: string;
  fullName: string;
};

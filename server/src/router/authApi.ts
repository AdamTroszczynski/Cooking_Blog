import express from 'express';
import { loginAction, registerAction } from '@/controller/userController';

const authApi = express.Router();

authApi.get('/login', loginAction);

authApi.get('/register', registerAction);

export default authApi;

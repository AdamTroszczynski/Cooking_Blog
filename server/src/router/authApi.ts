import express from 'express';
import { loginAction, registerAction, getUserFromTokenAction } from '@/controller/userController';
import { verifyToken } from '@/middleware/auth';

const authApi = express.Router();

authApi.post('/login', loginAction);

authApi.post('/register', registerAction);

authApi.post('/userFromToken', verifyToken, getUserFromTokenAction);

export default authApi;

import express from 'express';
import { getMessage } from '@/controller/exampleController';

const api = express.Router();

api.get('/hello', getMessage);

export default api;

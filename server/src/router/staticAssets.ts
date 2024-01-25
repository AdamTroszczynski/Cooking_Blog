import express from 'express';
import { loadImage } from '@/controller/assetsController';

const staticAssets = express.Router();

staticAssets.get('/recipeImages/:userFolder?/:imageName', loadImage);

export default staticAssets;

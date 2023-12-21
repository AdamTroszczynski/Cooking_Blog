import express from 'express';
import { loadImage } from '@/controller/assetsController';

const staticAssets = express.Router();

staticAssets.get('/recipeImages/:imageName', loadImage);

export default staticAssets;

import type { Request, Response } from 'express';
import path from 'path';
import { existsSync } from 'fs';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import { BASE_CLIENT_URL } from '@/const/commonConst';

/**
 * Get image from server and send it to client
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const loadImage = (req: Request, res: Response) => {
  const { imageName, userFolder } = req.params;
  const imagePath = userFolder
    ? path.join(__dirname, `../public/recipeImages`, userFolder, imageName)
    : path.join(__dirname, `../public/recipeImages`, imageName);

  res.set('Access-Control-Allow-Origin', BASE_CLIENT_URL);
  res.set('Cross-Origin-Resource-Policy', 'cross-origin');
  if (existsSync(imagePath)) {
    res.status(StatusCodesEnum.OK).sendFile(imagePath);
  } else {
    res.status(StatusCodesEnum.NotFound).send('');
  }
};

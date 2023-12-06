import type { Request, Response } from 'express';

/**
 * Example action to return some message
 * @param {Request} req Request
 * @param {Response} res Response
*/
export const getMessage = (req: Request, res: Response): void => {
  res.status(200).json({ msg: 'Hello World' });
}

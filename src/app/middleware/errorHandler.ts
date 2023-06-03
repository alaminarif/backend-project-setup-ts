import { NextFunction, Request, Response } from 'express'

const globalErrodHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next()
}

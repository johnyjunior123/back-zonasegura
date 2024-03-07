import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Token de autenticação ausente" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    req.body.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token autenticação invalido" });
  }
};

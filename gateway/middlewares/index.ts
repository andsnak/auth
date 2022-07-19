import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services";

export async function verifyToken(
  req: Request & { userId: number },
  res: Response,
  next: NextFunction
) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  try {
    req.userId = await AuthService.verify(token);
    next();
  } catch (error) {
    return res.status(401).send({
      message: "Unauthorized!",
    });
  }
}

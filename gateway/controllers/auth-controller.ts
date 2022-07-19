import { Request, Response } from "express";
import { AuthService } from "../services";

interface Credentials {
  email: string;
  password: string;
}

class AuthController {
  // signUp(req: Request, res: Response ) {
  //   const { email, password } = req.body;
  // }

  async signIn(req: Request<Credentials>, res: Response) {
    console.log("sign in");
    const { email, password } = req.body as Credentials;

    if (!email || !password) {
      res.status(403).send({
        message: "Invalid credentials!",
      });
    }

    try {
      const token = await AuthService.login({ email, password });
      res.status(200).json({ token });
    } catch (e) {
      res.status(403).send({
        message: "Invalid credentials!",
      });
    }
  }
}

export default AuthController;

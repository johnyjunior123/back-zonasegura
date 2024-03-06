import { Router } from "express";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dto/user.dto";
import { validate } from "class-validator";
import { AuthService } from "../services/auth.service";
import { QueryFailedError } from "typeorm";
import { formatErrorsClassValidator } from "../utils/errors";
export const userRouter = Router();
const userService = new UserService();

userRouter.post("/login", async (req, res) => {
  try {
    const authUser = await AuthService.authUser(
      req.body.cpf,
      req.body.password
    );
    res.status(200).json(authUser);
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});

userRouter.post("/register", async (req, res) => {
  const newUser = new CreateUserDto(req.body);
  const errors = await validate(newUser);
  if (errors.length > 0) {
    return res.status(400).json(formatErrorsClassValidator(errors));
  }
  try {
    const user = await userService.createUser(req.body);
    if (
      user instanceof QueryFailedError &&
      user.message.includes("violates unique constraint")
    ) {
      res.status(400).json({ message: "usuário já existente" });
    }
    if (user instanceof Error) {
      res.status(500).json({ message: "erro desconhecido" });
    }

    res.status(200).json({ ...user, password: undefined });
  } catch (e) {
    console.log(e);
  }
});

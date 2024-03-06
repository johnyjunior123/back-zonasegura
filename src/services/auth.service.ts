import jwt from "jsonwebtoken";
import { UserService } from "./user.service";
import { EntityNotFoundError } from "typeorm";

export class AuthService {
  static async authUser(cpf: string, password: string) {
    const userService = new UserService();
    try {
      const user = await userService.findByCpf(cpf);
      if (user.password === password) {
        const token = jwt.sign(
          {
            ...user,
            password: undefined,
          },
          process.env.SECRET_JWT,
          {
            expiresIn: "1d",
          }
        );
        return {
          user: {
            ...user,
            password: undefined,
          },
          token,
        };
      } else {
        throw new Error("CPF ou senha inválido");
      }
    } catch (e) {
      if (e instanceof EntityNotFoundError) {
        throw new Error("Usuario não encontrado");
      }
      throw new Error(e.message);
    }
  }
}

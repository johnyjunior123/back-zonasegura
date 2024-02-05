import { v4 } from "uuid";
import { User } from "./User";

export type ICreateUser = Omit<
  User,
  "id" | "created_at" | "updated_at" | "ocurrence"
>;

export class userFactory {
  static create(data: ICreateUser) {
    return new User({
      id: v4(),
      name: data.name,
      cpf: data.cpf,
      email: data.email,
      birthday: data.birthday,
      password: data.password,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
}

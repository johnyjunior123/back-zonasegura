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
      fullName: data.fullName,
      cpf: data.cpf,
      email: data.email,
      dob: new Date(data.dob),
      password: data.password,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
}

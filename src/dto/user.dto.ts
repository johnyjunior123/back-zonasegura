import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  Length,
  IsString,
  IsDateString,
} from "class-validator";
import { IsCpfValid } from "../../helpers/cpfValidator";
import { ICreateUser } from "../entity/user.factory";

export class CreateUserDto {
  @IsNotEmpty({ message: "O nome é obrigatório" })
  fullName: string;

  @IsCpfValid()
  @IsNotEmpty({ message: "O cpf é obrigatório" })
  @Length(11, 11, { message: "o tamanho está incorreto" })
  cpf: string;

  @IsNotEmpty({ message: "O e-mail é obrigatório" })
  @IsEmail({}, { message: "E-mail inválido" })
  email: string;

  @IsNotEmpty({ message: "A data de nascimento é obrigatória" })
  @IsDateString({}, { message: "Data no formato invalido" })
  dob: string;

  @IsNotEmpty({ message: "A senha é obrigatória" })
  @IsString()
  @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres" })
  password: string;
  constructor(data: ICreateUser) {
    Object.assign(this, data);
  }
}

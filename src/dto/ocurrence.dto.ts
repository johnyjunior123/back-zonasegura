import { IsEnum, IsNotEmpty, IsUUID } from "class-validator";
import { IDataOccurrence } from "../entity/occurrence.factory";

enum genrer {
  male = "masculino",
  female = "feminino",
  undefined = "indefinido",
}

export class CreateOccurrenceDto {
  @IsNotEmpty({ message: "A data é obrigatorio" })
  date: Date;
  @IsEnum(genrer, { message: "Genêro não identificado" })
  genrer: string;
  @IsNotEmpty()
  local: string;
  @IsNotEmpty()
  subject: string;
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  constructor(data: IDataOccurrence) {
    Object.assign(this, data);
  }
}

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
  genrer: string;
  @IsNotEmpty()
  local: string;
  subject: string;
  constructor(data: IDataOccurrence) {
    Object.assign(this, data);
  }
}

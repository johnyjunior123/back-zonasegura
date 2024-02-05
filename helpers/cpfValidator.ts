import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { cpf } from "cpf-cnpj-validator";
@ValidatorConstraint({ name: "isCpfValid", async: false })
export class IsCpfValidConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return cpf.isValid(value);
  }

  defaultMessage() {
    return "CPF inválido";
  }
}

export function IsCpfValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCpfValidConstraint,
    });
  };
}

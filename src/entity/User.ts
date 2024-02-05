import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Ocurrence } from "./Occurrence";
import { hashing } from "../../helpers/hashing";

export interface IUser {
  id: string;
  name: string;
  cpf: string;
  email: string;
  birthday: Date;
  password: string;
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  cpf: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  birthday: Date;

  @Column({
    transformer: hashing,
  })
  password: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Ocurrence, (ocurrence) => ocurrence.user)
  ocurrence: Ocurrence[];

  constructor(user: IUser) {
    Object.assign(this, user);
  }
}

import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Occurrence } from "./Occurrence";
import { hashing } from "../../helpers/hashing";

export interface IUser {
  id: string;
  fullName: string;
  cpf: string;
  email: string;
  dob: Date;
  password: string;
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column({
    unique: true,
  })
  cpf: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  dob: Date;

  @Column({
    transformer: hashing,
  })
  password: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Occurrence, (occurrence) => occurrence.user)
  ocurrence: Occurrence[];

  constructor(user: IUser) {
    Object.assign(this, user);
  }
}

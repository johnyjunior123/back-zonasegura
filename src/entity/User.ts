import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { passwordTransformer } from "../utils/password.transformer"; 
import { Ocurrence } from './Occurrence'

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
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  birthday: Date;
  
  @Column({
    length: 255,
    transformer: new passwordTransformer()
  })
  password: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Ocurrence, (ocurrence) => ocurrence.user)
  ocurrence: Ocurrence[]

  constructor(user: IUser) {
    Object.assign(this, user)
  }
}
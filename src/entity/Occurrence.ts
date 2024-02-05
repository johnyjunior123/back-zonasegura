import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

export type IOccurrence = {
  id: string;
  date: Date;
  genrer: string;
  local: string;
  subject: string;
  user: User;
};

@Entity()
export class Occurrence {
  @PrimaryColumn("uuid")
  id: string;

  @Column({
    type: "date",
  })
  date: Date;

  @Column({
    type: "enum",
    enum: ["masculino", "feminino", null],
    nullable: true,
  })
  genrer: string;

  @Column()
  local: string;

  @Column()
  subject: string;

  @ManyToOne(() => User, (user) => user.ocurrence)
  user: User;

  constructor(ocurrence: IOccurrence) {
    Object.assign(this, ocurrence);
  }
}

import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Ocurrence {
    @PrimaryColumn('uuid')
    id: string;

    @Column({
        type: 'date'
    })
    data: Date;

    @Column({
        type: 'enum',
        enum: ['masculino', 'feminino']
    })
    genrer: string;

    @Column()
    local: string;

    @Column()
    subject: string;

    @ManyToOne(() => User, (user) => user.ocurrence)
    user: User

    constructor(ocurrence: Partial<Ocurrence>){
        Object.assign(this, ocurrence)
    }
}
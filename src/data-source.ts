import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Ocurrence } from "./entity/Occurrence"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User, Ocurrence],
    migrations: [],
    subscribers: [],
})

import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./src/entity/User";
import { Occurrence } from "./src/entity/Occurrence";
import dotenv from "dotenv";

dotenv.config();
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_POSTGRES,
  port: parseInt(process.env.PORT_POSTGRES),
  username: process.env.USERNAME_POSTGRES,
  password: process.env.PASSWORD_POSTGRES,
  database: process.env.DATABASE_POSTGRES,
  synchronize: false,
  logging: false,
  entities: [User, Occurrence],
  migrations: ["./src/migration/*"],
  subscribers: [],
});

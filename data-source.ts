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
  username: process.env.DATABASE_POSTGRES,
  password: process.env.USERNAME_POSTGRES,
  database: process.env.PASSWORD_POSTGRES,
  synchronize: true,
  logging: true,
  entities: [User, Occurrence],
  migrations: ["./src/migration/*"],
  subscribers: [],
});

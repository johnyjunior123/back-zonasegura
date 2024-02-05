import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./src/entity/User";
import { Occurrence } from "./src/entity/Occurrence";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [User, Occurrence],
  migrations: ["./src/migration/*"],
  subscribers: [],
});

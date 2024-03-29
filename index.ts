import "reflect-metadata";
import express, { json } from "express";
import { AppDataSource } from "./data-source";
import swaggerUi from "swagger-ui-express";
import { userRouter } from "./src/routes/user.router";
import { ocurrenceRouter } from "./src/routes/occurence.router";
import { swaggerDocs } from "./src/documentation/config";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors());

AppDataSource.initialize()
  .then(async () => {
    app.use("/", userRouter);
    app.use("/", ocurrenceRouter);
    app.listen(3000);
    console.log("application started in port: 3000");
  })
  .catch((error) => console.error(error));

import fs from "fs";
import YAML from "yaml";

const file = fs.readFileSync("src/documentation/swagger.yaml", "utf-8");
export const swaggerDocs = YAML.parse(file);

import { configServer } from "@mayajs/core";
import { AppModule } from "./app.module";
import bodyparser from "body-parser";
import cors from "cors";

configServer(9000)
  .usePlugins([
    bodyparser.urlencoded({ extended: false }),
    bodyparser.json(),
    cors(),
  ])
  .bootstrapModule(AppModule);

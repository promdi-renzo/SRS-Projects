import { configServer } from "@mayajs/core";
import { AppModule } from "./app.module";
import bodyParser from "body-parser";

configServer(3333)
  .usePlugins([bodyParser.json(), bodyParser.urlencoded({ extended: true })])
  .bootstrapModule(AppModule);

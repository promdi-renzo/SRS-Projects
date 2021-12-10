import { configServer } from "@mayajs/core";
import { AppModule } from "./app.module";
import bodyParser from "body-parser";

configServer(3333)
  .usePlugins([bodyParser.urlencoded({ extended: false }), bodyParser.json()])
  .bootstrapModule(AppModule);

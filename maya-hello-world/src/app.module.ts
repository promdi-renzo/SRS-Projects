import { Module } from "@mayajs/core";
import { AppController } from "./app.controller";

@Module({
  declarations: [AppController],
  bootstrap: AppController,
})
export class AppModule {}

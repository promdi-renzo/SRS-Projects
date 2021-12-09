import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";
import { MongoDbModule, MongoDbServices } from "@mayajs/mongo";
import { mongoOptions } from "./database/mongo";
import { UserController } from "./controllers/user/user.controller";
import { UserServices } from "./controllers/user/user.service";

@Module({
  declarations: [AppController, UserController],
  imports: [RouterModule.forRoot(routes), MongoDbModule.forRoot(mongoOptions)],
  providers: [MongoDbServices, UserServices],
  bootstrap: AppController,
})
export class AppModule {}

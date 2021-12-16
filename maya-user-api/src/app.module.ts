import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";
import { UserController } from "./controllers/user/user.controller";
import { UserServices } from "./controllers/user/user.service";
import { MongoDbModule, MongoDbServices } from "@mayajs/mongo";
import { mongoOptions } from "./database/mongo";

@Module({
  declarations: [AppController, UserController],
  imports: [RouterModule.forRoot(routes), MongoDbModule.forRoot(mongoOptions)],
  providers: [UserServices, MongoDbServices],
  bootstrap: AppController,
})
export class AppModule {}

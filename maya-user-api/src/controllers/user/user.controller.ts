import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";
import { UserServices } from "./user.service";
import validate from "../../validators/user.validators";

@Controller()
export class UserController {
  constructor(private services: UserServices) {}

  @Post({ path: "/", middlewares: validate.user })
  async createUser({ body }: MayaJsContext): Promise<any> {
    return await this.services.add(body);
  }

  @Get()
  async readUser(): Promise<any> {
    return this.services.getAllUsers();
  }

  @Get("/:id")
  async readUserByID({ params }: MayaJsContext): Promise<any> {
    return await this.services.getUserById(params.id);
  }

  @Patch({ path: "/:id", middlewares: validate.user })
  async updateUser({ body, params }: MayaJsContext): Promise<any> {
    return await this.services.updateUser(params.id, body);
  }

  @Delete("/:id")
  async deleteUser({ params }: MayaJsContext): Promise<any> {
    return await this.services.deleteUserById(params.id);
  }
}

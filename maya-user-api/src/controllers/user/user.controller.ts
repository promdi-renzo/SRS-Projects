import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";
import { UserServices } from "./user.service";

@Controller()
export class UserController {
  constructor(private services: UserServices) {}

  @Post()
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

  @Patch("/:id")
  async updateUser({ body, params }: MayaJsContext): Promise<any> {
    return await this.services.updateUser(params.id, body);
  }

  @Delete("/:id")
  async deleteUser({ params }: MayaJsContext): Promise<any> {
    return await this.services.deleteUserById(params.id);
  }
}

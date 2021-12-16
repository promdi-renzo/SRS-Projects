import { Get, Patch, Post, Delete } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";
import { UserServices } from "./user.service";
import { AsyncResponse } from "../../interfaces";

@Controller()
export class UserController {
  constructor(private services: UserServices) {}

  @Post()
  async createUser({ body }: MayaJsContext): AsyncResponse {
    await this.services.add(body);
    return {
      status: true,
      message: `User ${body.username} successfully added.`,
    };
  }

  @Get()
  async readUser(): Promise<any> {
    return await this.services.getAll();
  }

  @Get("/:id")
  async readUserByID({ params }: MayaJsContext): Promise<any> {
    return await this.services.getUserById(params.id);
  }

  @Patch()
  async updateUser({ body }: MayaJsContext): Promise<any> {
    return await this.services.update(body);
  }

  @Delete("/:id")
  async deleteUser({ params }: MayaJsContext): Promise<any> {
    return await this.services.delete(params.id);
  }
}

import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Controller } from "@mayajs/core";

@Controller()
export class AppController {
  @Post()
  async createApp(): Promise<any> {
    return { message: "POST" };
  }

  @Get()
  async readApp(): Promise<any> {
    return { message: "GET" };
  }

  @Put()
  async replaceApp(): Promise<any> {
    return { message: "PUT" };
  }

  @Patch()
  async updateApp(): Promise<any> {
    return { message: "PATCH" };
  }

  @Delete()
  async deleteApp(): Promise<any> {
    return { message: "DELETE" };
  }
}

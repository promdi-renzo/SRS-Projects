import { Get } from "@mayajs/common";
import { Controller } from "@mayajs/core";

@Controller()
export class AppController {
  @Get()
  async helloWorld(): Promise<any> {
    return { message: "Hello World" };
  }
}

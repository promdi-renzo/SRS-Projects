import { Post } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";
import validate from "./app.validation";

@Controller()
export class AppController {
  @Post({ path: "/", middlewares: validate.app })
  async createApp({ body }: MayaJsContext): Promise<any> {
    return { message: "Body Validated", body };
  }
}

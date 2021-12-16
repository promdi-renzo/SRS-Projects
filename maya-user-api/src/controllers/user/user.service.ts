import { Service } from "@mayajs/core";
import { MongoDbServices } from "@mayajs/mongo";
import { IUserModel, IUserSchema } from "../../interface";
import CONST from "../../constants/index";

@Service()
export class UserServices {
  constructor(private mongo: MongoDbServices) {}

  get model() {
    const db = this.mongo.database("user-api");
    return db.instance.model<IUserModel>(CONST.MODEL.USER);
  }

  async add(body: IUserSchema) {
    const newUser = await this.model.create(body);
    return newUser;
  }

  async getAllUsers() {
    const users = this.model.find({});
    return users;
  }

  async getUserById(id: string) {
    const user = this.model.findById({ _id: id });
    return user;
  }

  async updateUser(id: string, body: IUserSchema) {
    const user = this.model.findByIdAndUpdate({ _id: id }, body);
    return user;
  }

  async deleteUserById(id: string) {
    const user = this.model.findByIdAndDelete({ _id: id });
    return user;
  }
}

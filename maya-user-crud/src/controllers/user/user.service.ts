import { Service } from "@mayajs/core";
import { MongoDbServices } from "@mayajs/mongo";
import { IUserModel, IUser, IUserSchema } from "../../interfaces";

@Service()
export class UserServices {
  constructor(private mongo: MongoDbServices) {}

  get model() {
    const db = this.mongo.database("mains");
    return db.instance.model("Users");
  }

  async add(body: IUserSchema) {
    const newUser = new this.model({ ...body });
    await newUser.save();
  }

  async getAll() {
    return await this.model.find();
  }

  async getUserById(id: string) {
    return this.model.findById(id);
  }

  async update(body: IUser) {
    const { _id, ...data } = body;
    return this.model.findByIdAndUpdate(_id, data);
  }

  async delete(_id: string) {
    try {
      await this.model.findOneAndDelete({ _id });
      return { status: true, message: "User Successfully deleted" };
    } catch (err) {
      console.log(err);
      return { status: false, message: "Server Error, User was not deleted" };
    }
  }
}

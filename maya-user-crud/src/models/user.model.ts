import { Schema, model } from "mongoose";
import { IUserModel } from "../interfaces";

const schema = new Schema<IUserModel>(
  {
    username: {
      type: String,
      unique: true,
    },
    password: String,
  },
  {
    timestamps: { createdAt: "dateCreated", updatedAt: "dateUpdated" },
  }
);

export default model("Users", schema);

import { Document } from "mongoose";

export interface IUserSchema {
  username: string;
  password: string;
}

export interface IUser extends IUserSchema {
  _id: string;
}

export interface IUserModel extends Document, IUserSchema {}

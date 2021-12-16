import env from "../environments";
import User from "../models/user.model";

export const mongoOptions = {
  connectionString: env.mongo_conn,
  name: "user-api",
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  schemas: [User],
};

import env from "../environments";

export const mongoOptions = {
  connectionString: env.mongo_conn,
  name: "main",
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  schemas: [],
};

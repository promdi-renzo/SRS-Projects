import { UserController } from "./controllers/user/user.controller";
export const routes = [
  {
    path: "api",
    children: [
      {
        path: "v1",
        children: [
          {
            path: "user",
            controller: UserController,
          },
        ],
      },
    ],
  },
];

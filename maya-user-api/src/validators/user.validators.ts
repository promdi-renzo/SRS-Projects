import { Check } from "@mayajs/common";

const user = [
  Check("username").isString().notEmpty().required(),
  Check("password").isString().notEmpty().required(),
];

export default { user };

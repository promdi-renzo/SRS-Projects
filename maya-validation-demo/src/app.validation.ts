import { Check } from "@mayajs/common";

const app = [Check("msg").isString().notEmpty().required()];

export default { app };

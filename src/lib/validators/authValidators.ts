import Joi from "joi";

export const loginFormValidator = Joi.object({
  password: Joi.string().required().trim().label("Password"),
  email: Joi.string().required().trim().email().label("Email"),
});

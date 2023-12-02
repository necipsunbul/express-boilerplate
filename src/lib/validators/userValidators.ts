import Joi from "joi";
import { userRole } from "../_core/constants/appConstants";

export const createUserValidator = Joi.object({
  name: Joi.string().required().trim().label("Name"),
  surName: Joi.string().allow(null, "").trim().label("Surname"),
  userName: Joi.string().allow(null, "").trim().label("Username"),
  email: Joi.string().required().trim().email().label("Email"),
  birthDay: Joi.string().isoDate().trim().required().label("Birthday"),
  gender: Joi.number().required().label("Gender"),
  password: Joi.string().required().min(6).trim().label("Password"),
  roles: Joi.array()
    .items(Joi.number())
    .required()
    .default([userRole.USER])
    .label("User role"),
});

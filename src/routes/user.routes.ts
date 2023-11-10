import { Router } from "express";
import UserController from "../controllers/UserController";
import JoiValidMid from "../middlewares/JoiValidMid";
import { createUserValidator } from "../validators/userValidators";
const router = Router();

router.post("/", JoiValidMid(createUserValidator), UserController.create);

export default router;

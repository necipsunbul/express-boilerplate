import { Router } from "express";
import JoiValidMid from "../../middlewares/JoiValidMid";
import AuthController from "../../controllers/backend/AuthController";
import { loginFormValidator } from "../../validators/authValidators";
const router = Router();

router.post("/login", JoiValidMid(loginFormValidator), AuthController.login);

export default router;

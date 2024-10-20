import { Router } from "express";
import { LoginUser, RegisterUser } from "../controllers/Admin.controller.js";

const router = Router();

router.route("/regiter").post(RegisterUser);
router.route("/login").get(LoginUser);

export default router;

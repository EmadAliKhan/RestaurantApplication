import { Router } from "express";
import {
  DelCheckoutData,
  CheckoutData,
  GetCheckoutData,
} from "../controllers/Checkout.controller.js";

const router = Router();

router.route("/checkout").post(CheckoutData);
router.route("/getcheckout").post(GetCheckoutData);
router.route("/delcheckout").post(DelCheckoutData);

export default router;

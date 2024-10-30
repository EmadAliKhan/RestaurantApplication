import { Router } from "express";
import {
  AcceptedOrder,
  AcceptedReservation,
  RejectedOrder,
  RejectedReservation,
} from "../controllers/Email.controller.js";

const router = Router();

router.route("/acceptedOrder").post(AcceptedOrder);
router.route("/rejectedOrder").post(RejectedOrder);
router.route("/acceptedReservation").post(AcceptedReservation);
router.route("/rejectedReservation").post(RejectedReservation);

export default router;

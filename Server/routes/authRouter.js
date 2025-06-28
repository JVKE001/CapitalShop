import express from "express";
import authController, {
  loginController,
  testController,
  updateProfileController,
  registerController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controller/authController.js";

import forgotPasswordController from "../controller/authController.js";

import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

router.get("/test", requireSignIn, isAdmin, testController);

router.post("/forgotpassword", forgotPasswordController);

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//Update user profile
router.put("/profile", requireSignIn, updateProfileController);

//Orders
router.get("/orders", requireSignIn, getOrdersController);
router.get("/all-orders", requireSignIn, getAllOrdersController);
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;

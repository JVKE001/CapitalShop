import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  braintreeTokenController,
  braintreePaymentController,
} from "../controller/productController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";
import express from "express";

const router = express.Router();

//Route
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//Get Route
router.get("/get-product", getProductController);

//Single Product Route
router.get("/single-product/:slug", getSingleProductController);

//Product Photo Route
router.get("/product-photo/:pid", productPhotoController);

//Delete Product Route
router.delete("/delete-product/:pid", deleteProductController);

//Update Product Route
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//Filter Product
router.post("/product-filters", productFilterController);

//Product Count
router.get("/product-count", productCountController);

//Product Per Page
router.get("/product-list/:page", productListController);

//Payment Routes
//Token
router.get("/braintree/token", braintreeTokenController);

//Payment
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

export default router;

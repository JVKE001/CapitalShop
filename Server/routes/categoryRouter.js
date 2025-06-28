import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  singleCategoryController,
  deleteCategoryController,
  updateCategoryController,
} from "./../controller/categoryController.js";

const router = express.Router();

//Create Category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//Get all category
router.get("/get-category", categoryController);

//Update CAtegory
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//Single Category
router.get("/single-category/:slug", singleCategoryController);

//Delete Category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;

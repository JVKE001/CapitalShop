import categorySchema from "../models/categorySchema.js";
import slugify from "slugify";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingCategory = await categorySchema.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Category already exists",
      });
    }
    const category = await new categorySchema({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "New category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in category",
    });
  }
};

//Get all Category
export const categoryController = async (req, res) => {
  try {
    const category = await categorySchema.find({});
    res.status(200).send({
      success: true,
      message: "All category list",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all category",
    });
  }
};

//Update Category
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categorySchema.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Update SuccessFully...",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while Updating Category",
    });
  }
};

//Single Category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categorySchema.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get Single Category SuccessFully...",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while Getting Single Category",
    });
  }
};

//Delete Category
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await categorySchema.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category Deleted SuccessFully...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while Deleting category",
      error,
    });
  }
};

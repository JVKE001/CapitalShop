import JWT from "jsonwebtoken";
import userSchema from "../models/userSchema.js";

//Protected Routes Token Base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in Admin Middleware",
    });
  }
};

//Admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userSchema.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

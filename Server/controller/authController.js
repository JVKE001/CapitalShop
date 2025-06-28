import userSchema from "../models/userSchema.js";
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";
import orderSchema from "../models/orderSchema.js";

//REGISTER POST
export const registerController = async (req, res) => {
  const { name, email, password, phone, address, answer } = req.body;
  if (!name || !email || !phone || !address || !password || !answer) {
    return res.status(422).json({ error: "Please fill all Filled" });
  }
  try {
    const useExist = await userSchema.findOne({ email: email });
    if (useExist) {
      return res.status(422).json({ error: "Email Already Exist" });
    }
    const hashedPassword = await hashPassword(password);
    const user = new userSchema({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    });
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: "User Register SuccessFully...😊" });
    }
  } catch (err) {
    console.log(err);
  }
};

//LOGIN POST
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    const user = await userSchema.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not Register",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log("Token : " + token);

    res.status(200).send({
      success: true,
      message: "Login SuccessFully...",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

//Test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//FORGOTPASSWORD POST
const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    if (!email) {
      res.status(404).send({ message: "Email is Required" });
    }
    if (!answer) {
      res.status(404).send({ message: "Answer is Required" });
    }
    if (!newPassword) {
      res.status(404).send({ message: "New Password is Required" });
    }
    //CHECK
    const user = await userSchema.findOne({ email, answer });

    //VALIDATION
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }

    const hashed = await hashPassword(newPassword);
    await userSchema.findByIdAndUpdate(user._id, { password: hashed });

    res.status(200).send({
      success: true,
      message: "Password Reset Successfully...",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};

//UPDATE USER PROFILE
export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await userSchema.findById(req.user._id);
    //Password
    if (password && password.length < 8) {
      return res.json({ error: "Password is required and 8 character long" });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userSchema.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        email: email || user.email,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "profile Successfully...",
      updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};

//ORDER CONTROLLER
export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderSchema
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching orders",
      error,
    });
  }
};

//GET ALL ORDERS
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderSchema
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching orders",
      error,
    });
  }
};

//ORDER STATUS
export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderSchema.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating order",
      error,
    });
  }
};

export default forgotPasswordController;

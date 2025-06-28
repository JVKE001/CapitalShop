import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import CartPage from "./Pages/CartPage";
import Contact from "./Pages/Contact";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminRoute from "./Components/Routes/AdminRoute";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import CreateCategory from "./Pages/Admin/CreateCategory";
import Dashboard from "./Pages/User/Dashboard";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Products from "./Pages/Admin/Product";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import Profile from "./Pages/User/Profile";
import Orders from "./Pages/User/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user/profile" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile/edit" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin/profile" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          {/* <Route path="admin/users" element={<Users />} /> */}
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
        </Route>

        {/* <Route path="/admindashboard" element={<AdminDashboard />}></Route> */}
      </Routes>
    </>
  );
}

export default App;

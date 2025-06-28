import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthProvider } from "./Components/Context/Auth";
import { CartProvider } from "./Components/Context/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const img_1 =
//   "https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62";

root.render(
  <>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </>
);

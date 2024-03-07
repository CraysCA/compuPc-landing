import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import CardSection from "./components/CardSection.jsx";
import ProductSection from "./components/ProductSection.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <CardSection />
    <ProductSection />
  </React.StrictMode>
);

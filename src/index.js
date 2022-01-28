import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
// import App from "./App";
// import App2 from "./App2";

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <App2 /> */}
    <Footer />
    <Menu />
  </React.StrictMode>,
  document.getElementById("root")
);

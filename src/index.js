import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App, { Student } from "./App";
// import App, { App as Student } from "./App";
import Student from "./Student";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Student title="WebBrain" />
    <Student title="IT" />
    <Student title="Academy" />
    <Student>Salom</Student>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

// Call it once in your app. At the root of your app is the best place

import App from "./App";

toast.configure({
  position: toast.POSITION.BOTTOM_CENTER
});
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

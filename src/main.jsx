
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const zanderioScript = document.createElement("script");
zanderioScript.src = "https://cdn.zanderio.ai/widget/loader.js";
zanderioScript.setAttribute(
  "data-id",
  "wdg_tsbXk35HZzMLdomF3FUXnhub"
);
zanderioScript.defer = true;

document.body.appendChild(zanderioScript);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


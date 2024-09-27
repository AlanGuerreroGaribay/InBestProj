import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/_main.scss";
import { RouterProviderApp } from "./routes/RouteProviderApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProviderApp />
  </React.StrictMode>
);

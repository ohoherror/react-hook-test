import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import RefDemo from "./views/Ref";
import StorageHandle from "./views/StorageHandle";
import {Provider} 

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider>
    {/* <App /> */}
    <StorageHandle></StorageHandle>
    {/* <RefDemo></RefDemo> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

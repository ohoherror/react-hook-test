import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./views/App";
import RefDemo from "./views/Ref";
import reportWebVitals from "./reportWebVitals";
import StorageHandle from "./views/StorageHandle";
import { Provider } from "react-redux";
import store from "./store";

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    {/* <App /> */}
    <StorageHandle></StorageHandle>
    {/* <RefDemo></RefDemo> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { CookiesProvider } from "react-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GOOGLE_CLIENT_ID = "881838406228-9bqa8vfdkv44qurbcvktob8cccu9d9of.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <ToastContainer />
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </CookiesProvider>
);

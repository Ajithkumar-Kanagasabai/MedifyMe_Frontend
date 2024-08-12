import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { CookiesProvider } from "react-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GOOGLE_CLIENT_ID = "745500314459-1vpfbmulqi0ekajshi4nsgdoqu88jr0h.apps.googleusercontent.com";

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

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { PeliculaProvider } from "./context/PeliculaContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <PeliculaProvider>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AcJJrQOmpjtxdyl7LThpzTMX5zkPjhIsGgd8xU-GLpvzOUSQfh1ldTrvbSQn7nM9WqE6fyvx3VFYnYKh",
          }}
        >
          <App />
        </PayPalScriptProvider>
      </PeliculaProvider>
    </UserProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

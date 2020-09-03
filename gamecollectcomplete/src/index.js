import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.render(
    <Auth0Provider
      domain="dev-gamecollect.us.auth0.com"
      clientId="aoHu9oGEf9xO9ouUfC7JK7mC9T5KqMwt"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
    document.getElementById("root")
  );
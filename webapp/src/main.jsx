import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AsgardeoProvider } from "@asgardeo/react";
import SriLankaTourism from "./SriLankaTourism.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="GHnsoF8saSBGjmMPT4p0Iinhjc0a"
      baseUrl="https://api.asgardeo.io/t/harshareactdemo"
      afterSignInUrl="http://asgardeo-webapp-demo-env.eba-22drhbvm.us-east-1.elasticbeanstalk.com/tours"
    >
      <App></App>
    </AsgardeoProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";

/**
 * RecoilRoot envolve toda a aplicação —
 * equivale ao TodoProvider da versão com Context API,
 * mas sem precisar criar um provider manualmente.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);

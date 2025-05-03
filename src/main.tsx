import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Win from "./components/win.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lost from "./components/lost.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/win" element={<Win />} />
        <Route path="/lost" element={<Lost />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

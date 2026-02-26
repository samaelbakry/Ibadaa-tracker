import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { ThemeContextProvider } from "./context/themeContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeContextProvider>
      <App />
    <ToastContainer position="top-left"/>
    </ThemeContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);

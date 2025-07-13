import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import { VersionLogger } from "@shared-vendor/helpers";

import "@shared-vendor/assets/style/index.css";

VersionLogger.log();

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <Compose components={[StrictMode, ThemeModeProvider, ErrorBoundary, Toaster, QueryClientProvider]}>
    <App />
  </Compose>,
);

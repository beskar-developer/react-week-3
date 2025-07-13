import { defineConfig, loadEnv } from "vite";

import AutoImportPlugin from "unplugin-auto-import/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const ENV_DIRECTORY = "./env";
const JS_FILE_PATTERN = /\.[tj]sx?$/;

const AUTO_IMPORT_CONFIG = {
  include: [JS_FILE_PATTERN],
  imports: [
    "react",
    "react-router",
    {
      from: "react",
      imports: [
        "ComponentProps",
        "ReactNode",
        "SyntheticEvent",
        "FragmentProps",
        "JSXElementConstructor",
        "PropsWithChildren",
      ],
      type: true,
    },
    {
      from: "react-router",
      imports: ["RouteObject"],
      type: true,
    },
    {
      from: "motion",
      imports: ["MotionProps"],
      type: true,
    },
    {
      "react-hook-form": ["useForm"],
      react: ["StrictMode", "createContext"],
      "motion/react-client": [["*", "motion"]],
      "motion/react": ["AnimatePresence"],
      "tailwind-merge": ["twMerge"],
      "react-hot-toast": [["default", "toast"]],
      "react-router": ["createHashRouter", "Outlet", "redirect", "generatePath"],
      "@tanstack/react-query": ["useQuery", "useMutation", "useQueryClient", "QueryClient"],
    },
  ],
  dirs: [
    "./packages/shared-vendor/hooks/**",
    "./packages/shared-vendor/utils/**",
    "./packages/shared-vendor/components/**/*",
    "./packages/shared-vendor/providers/**",
    "./src/hooks/**",
    "./src/providers/**",
  ],
  dirsScanOptions: {
    filePatterns: [".ts", ".tsx", ".js", ".jsx"],
    fileFilter: (file: string) => !file.includes(".type"),
    types: false,
  },
  dts: true,
  eslintrc: {
    enabled: true,
  },
};

const REACT_CONFIG = {
  babel: {
    plugins: [["babel-plugin-react-compiler"], ["@babel/plugin-proposal-decorators", { version: "2023-11" }]],
  },
};

export default ({ mode = "dev" } = {}) => {
  process.env = { ...process.env, ...loadEnv(mode, ENV_DIRECTORY, "") };

  return defineConfig({
    envDir: ENV_DIRECTORY,
    esbuild: {
      pure: mode === "prod" ? ["console.log"] : [],
    },
    server: {
      proxy: {
        "^api/(auth|movie)(.*)?$": {
          target: process.env.VITE_DEFAULT_URL,
          ws: false,
          secure: false,
          changeOrigin: true,
        },
      },
    },
    plugins: [
      react(REACT_CONFIG),
      AutoImportPlugin(AUTO_IMPORT_CONFIG),
      tsconfigPaths(),
      tailwindcss(),
      svgr(),
    ],
  });
};

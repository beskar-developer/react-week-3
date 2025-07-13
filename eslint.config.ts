import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  ...compat.extends("./.eslintrc-auto-import.json"),
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // react rules
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react-hooks/exhaustive-deps": ["off"],

      // js rules
      "no-debugger": "off",
      "no-duplicate-imports": "error",
      "no-self-compare": "warn",
      eqeqeq: ["error", "smart"],
      "no-alert": "error",
      "no-nested-ternary": "warn",
      "func-style": ["error", "expression"],
      "max-params": [
        "error",
        {
          max: 3,
        },
      ],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "array-callback-return": "error",
      "no-var": "error",
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      camelcase: [
        "error",
        {
          properties: "never",
        },
      ],
    },
  },
);

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "airbnb-base",
    "@vue/prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".vue"],
      },
    },
    "import/core-modules": ["vite", "@vitejs/plugin-vue"],
  },
  plugins: ["vue", "prettier"],
  rules: { "prettier/prettier": "error" },
};

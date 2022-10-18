module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/airbnb", "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "vue/multi-word-component-names": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: true,
  },
  browserslist: [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ]
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true, // this removes errors like describe and test functions are not defined
    webextensions: true,
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  ignorePatterns: ["dist/", "node_modules/", "*.js"],
  plugins: ["@typescript-eslint"],
  rules: {
    // prettier rules
    "max-len": [
      "error",
      {code: 80, ignoreStrings: true, ignoreTemplateLiterals: true},
    ],
    indent: ["error", 2],
    semi: ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "object-curly-spacing": ["error", "never"],
    quotes: ["error", "double"],
    "arrow-parens": ["error", "always"],
    "linebreak-style": 0,

    // override airbnb
    "no-console": ["off", "always"],
    "no-use-before-define": ["error", {functions: false}],
    "operator-linebreak": ["error", "before", {overrides: {"=": "after"}}],
    "import/no-extraneous-dependencies": ["error", {devDependencies: true}],
    "import/prefer-default-export": "off",

    "array-bracket-newline": ["error", {minItems: 2}],
    "array-element-newline": ["error", {minItems: 2}],
    "object-curly-newline": [
      "error",
      {
        /* ObjectExpression: "always",
        ObjectPattern: {multiline: true}, */
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
          consistent: true,
        },
        ExportDeclaration: {multiline: true, minProperties: 2},
      },
    ],
    "object-property-newline": "error",
  },
};

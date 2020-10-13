module.exports = {
  extends: "react-app",
  parser: "babel-eslint",
  env: {
    jest: true,
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "on",
    "react/prop-types": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "only-multiline",
        functions: "never",
      },
    ],
  },
  globals: {
    fetch: false,
  },
};

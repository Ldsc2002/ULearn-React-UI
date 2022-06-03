module.exports = {
    parser: "babel-eslint",
    env: {
      browser: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    parserOptions: {
      ecmaFeatures: {
        modules: true,
        jsx: true
      },
      ecmaVersion: '12',
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'linebreak-style':0,
      "quotes": [2, "single", { "avoidEscape": true }],
      "semi": [1, "never"],
      "indent": ["error", 4],
      "react/jsx-indent" : ["error", 4],
      "react/jsx-indent-props" : ["error", 4],
      "react/prop-types": "off",
      "camelcase": "off",
      "react/jsx-filename-extension": "off",
      "react/destructuring-assignment": "off",
      "no-param-reassign": "off",
      "react/jsx-props-no-spreading": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "react/no-access-state-in-setstate": "off",
      "react/no-deprecated": "off",
      "react/no-unescaped-entities": "off",
      "no-alert": "off",
      "max-len": "off",
      "no-plusplus": "off",
      "no-unused-vars": "off",
      "react/no-danger": "off",
      "no-return-assign": "off",
      "react/sort-comp": "off",
      "class-methods-use-this": "off",
      "no-mixed-operators": "off",
      "consistent-return": "off",
      "react/no-unused-class-component-methods": "off",
      "react/static-property-placement": "off"
    }
    ,
  };
  
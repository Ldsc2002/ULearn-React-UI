module.exports = {
    env: {
      browser: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
    },
    plugins: [
      'react',
    ],
    rules: {
      "semi": [1, "never"],
      "indent": ["error", 4],
      "react/jsx-indent" : ["error", 4],
      "react/jsx-indent-props" : ["error", 4],
      "react/prop-types": "off"
    }
    ,
  };
  
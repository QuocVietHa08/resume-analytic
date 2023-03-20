module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './jsconfig.eslint.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    // tsconfigRootDir: __dirname,
  },
  root: true,
  plugins: ['jsx-a11y', 'react', 'react-hooks', 'import', 'prefer-arrow'],
  ignorePatterns: ['.eslintrc.*', '*.config.js'],
  rules: {
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/default': 0,
    'import/namespace': 0,
    'no-param-reassign': 0,
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-void': 'off',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/jsx-filename-extension': 0,
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'react/destructuring-assignment': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'padding-line-between-statements': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    "import/no-unresolved": 0,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    'import/extensions': ['.js', '.jsx'],
  },
};

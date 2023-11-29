# React + TypeScript + Vite
# Sacco Management System Demo


This demo showcases a Sacco management system with dual dashboards for members and administrators. It streamlines driver registration and complaint management, replacing manual processes. Sacco members register drivers and report complaints efficiently, while administrators manage accounts and resolutions. Seamlessly integrated with M-Pesa for financial transactions.

 This project utilizes Material-UI for a sleek UI design, Jest and React Testing Library for robust testing, TypeScript for enhanced type safety, and Redux Toolkit Query for efficient state management. Explore the features and experience seamless integration with M-Pesa for financial transactions.


## Tech Stack
- Material-UI
- Jest & React Testing Library
- TypeScript
- Redux Toolkit Query


## Getting Started
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the app locally with `npm start`.
4. Test using Jest with `npm test`.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

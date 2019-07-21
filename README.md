This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Intro

Crated using
`
npx create-react-app my-app --typescript
`

## Storybook installation
Added storybook using [this blog post](https://medium.com/@dandobusiness/setting-up-a-react-typescript-storybook-project-5e4e9f540568)

`npm i -D @storybook/react`

Created the `.storybook` folder
`.storybook
 - addons.js
 - config.js
 - tsconfig.json
 - webpack.config.js
`
Updated `config.js`
`import { configure } from '@storybook/react';
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);`

Added settings to `.storybook/tsconfig.json`

`{
  "compilerOptions": {
    "baseUrl": "./",
    "allowSyntheticDefaultImports": true,
    "module": "es2015",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": false,
    "jsx": "react",
    "moduleResolution": "node",
    "rootDir": "../",
    "outDir": "dist",
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "declaration": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "build",
    "dist",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts",
    "**/*/*.test.ts",
    "examples"
  ]
}`

Installed the following packages:
`npm i -D awesome-typescript-loader
npm i -D react-docgen-typescript-loader
npm i -D react-docgen-typescript-webpack-plugin`

Copied the following code into `.storybook/webpack.config.js`

`const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');
//dont need stories path if you have your stories inside your //components folder
module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: './.storybook/tsconfig.json'
          }
        },
        { loader: require.resolve('react-docgen-typescript-loader') }
      ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};`

Added a new script under `scripts` in `package.json`
`"storybook": "start-storybook -p 9001 -c .storybook"`


  
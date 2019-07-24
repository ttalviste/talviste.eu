# talviste.eu

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [talviste.eu](#talvisteeu)
  - [Intro](#intro)
    - [Motivation](#motivation)
    - [Development roadmap](#development-roadmap)
  - [Project setup](#project-setup)
    - [Editor settings](#editor-settings)
    - [Project settings](#project-settings)
      - [Storybook installation](#storybook-installation)
      - [Sass stylesheets](#sass-stylesheets)
        - [Sass and Typescript and Storybook](#sass-and-typescript-and-storybook)
      - [Bootstrap](#bootstrap)

<!-- /code_chunk_output -->

## Intro

Created using
`npx create-react-app my-app --typescript`

### Motivation

I am always reading something and writing down notes. Because of that, I have a lot of notes lying around and cannot find them when I need them.

So that, I started with this little project to keep track of what I am reading, have read and what thoughts and notes I gathered about them.

### Development roadmap

- Setup project
- Get ready with a POC
- Publish to talviste.eu
  - Publish devOps guide
- Refactor
- Create a mobile app

## Project setup

Here you can just read up how this project was created and bootstrapped.

### Editor settings

As I am using Visual Studio Code I followed the instruction in `create-react-app` [here](https://facebook.github.io/create-react-app/docs/setting-up-your-editor)

- Syntax highlighting
- Displaying ESLint output in editor
- Debugging
- Formatting Code Automatically

### Project settings

Here we have the setup for the project, what extra tools are used and how things are layed out.

#### Storybook installation

Added storybook using [this blog post](https://medium.com/@dandobusiness/setting-up-a-react-typescript-storybook-project-5e4e9f540568)

`npm i -D @storybook/react`

Created the `.storybook` folder

```json
.storybook
 - addons.js
 - config.js
 - tsconfig.json
 - webpack.config.js
```

Updated `config.js` with:

```javascript
import { configure } from "@storybook/react";

const req = require.context("../src/components", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
```

Added settings to `.storybook/tsconfig.json`

```javascript
{
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
}
```

Installed the following packages:
`npm i -D awesome-typescript-loader`

`npm i -D react-docgen-typescript-loader`

`npm i -D react-docgen-typescript-webpack-plugin`

Copied the following code into `.storybook/webpack.config.js`

```javascript
const path = require("path");
const SRC_PATH = path.join(__dirname, "../src");
const STORIES_PATH = path.join(__dirname, "../stories");
//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: "./.storybook/tsconfig.json"
        }
      },
      { loader: require.resolve("react-docgen-typescript-loader") }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
```

Added a new script under `scripts` in `package.json`

```json
"storybook": "start-storybook -p 9001 -c .storybook"
```

#### Sass stylesheets

This was enabled by adding `node-sass`:

`npm install node-sass --save`

Renamed all stylesheets from `*.css` to `*.scss`.
Moved to `src/styles/`

##### Sass and Typescript and Storybook

As we are using Sass, TS and Storybook in this projects, I have created an example TS definition (`colors.scss.d.ts`) which enables to use variables added to `colors.scss` be reused in `*.ts` or `*.tsx` files.
I went for this manual method just to satisfy my intial needs for sharing variables, but there are probably some tools for that, but atm not viable. I will evaluate the need as the project grows.

#### Bootstrap

The project just uses latest Bootstrap version and no components based on it.

Installed using:
`npm install --save bootstrap`

Created `talviste.scss` in the `/styles` folder for custom styles

```scss
// Override default variables before the import
$body-bg: #000;

// Import Bootstrap and its default variables
@import "~bootstrap/scss/bootstrap.scss";
```

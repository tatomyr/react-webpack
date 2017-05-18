# React | Webpack

* Start writing a `*.jsx` code within `src/` folder.
* To create a bundle file in `build/` folder run `$ ./node_modules/.bin/webpack -d` in Terminal.
* To watch result open the `index.html` file in browser.
* To make Webpack watch changes run `$ ./node_modules/.bin/webpack -d --watch`.
* To make a production bundle run `$ ./node_modules/.bin/webpack -p`.
* Sake of simplicity you can run dev mode or build production using npm scripts, defined in "scripts" inside `package.json` with `$ npm run dev` and `$ npm run build` respectively.

# Creating a new project

* Initialize project named `<project>`:
```
$ mkdir <project>
$ cd <project>
$ npm init
```
* Install and configure Webpack:
```
$ npm i webpack -D
$ touch webpack.config.js
```
* Install and configure Babel-Loader:
```
$ npm i babel-loader babel-preset-es2015 babel-preset-react -D
$ touch .babelrc
```
* Install React:
```
$ npm i react react-dom -D
```
* Install Scss loaders:
```
$ npm i style-loader css-loader node-sass sass-loader -D
```
Styles should be imported directly in component:
```javascript
import './App.scss';
```
* Complete project with the structure:
```
<project>/
├─src/
│ ├─App.jsx
│ ├─containers/
│ └─components/
├─index.html
├─build/
├─package.json
├─webpack.config.js
└─.babelrc
```
* Use `node` version 7+

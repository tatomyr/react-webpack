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
$ npm i -D webpack
$ touch webpack.config.js
```
* Install dev-server:
```
$ npm i -D webpack-dev-server@2
```
* Install and configure Babel-Loader:
```
$ npm i -D babel-loader babel-preset-es2015 babel-preset-react
$ touch .babelrc
```
* Install React:
```
$ npm i -D react react-dom
```
* Install Scss loaders:
```
$ npm i -D style-loader css-loader node-sass sass-loader
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

# Tips

* Use `node` version 7+
* To prevent publishing `node_modules/` to git apply this snippet: `$ echo "node_modules/" > .gitignore`
* To keep `build/` dir untracked for `$ git diff` add `.gitattributes` file with such option: `build/* -diff`
* Styles should be imported directly in component:
```javascript
import './App.scss';
```
* To watch project at `localhost:8080` start dev-server via `$ ./node_modules/.bin/webpack-dev-server` (or `$ npm run server`) alongside with development or production build

# react templete

# 環境
以下のnodeのバージョンで開発しています。
```
v12.13.0
```

```
npm i webpack webpack-cli webpack-dev-server fork-ts-checker-webpack-plugin dotenv dotenv-expand
npm i html-webpack-plugin babel-loader style-loader css-loader svg-url-loader url-loader source-map-loader @hot-loader/react-dom
npm i @babel/core @babel/plugin-external-helpers @babel/preset-env @babel/preset-react @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i react react-dom react-scripts react-router-dom connected-react-router redux @reduxjs/toolkit
npm i typescript @types/react @types/react-dom @types/react-router-dom @types/react-redux @types/node
npm i history
npm i prettier eslint-plugin-prettier
```

dotenv-webpackには以下の問題がある。
https://github.com/mrsteele/dotenv-webpack/issues/377
以下の構成に変えたほうが良さそう。
https://webpack.js.org/guides/production/
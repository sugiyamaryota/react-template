# react templete

# 環境
以下のnodeのバージョンで開発しています。
```
v12.13.0
```

# パッケージ

```
npm i webpack webpack-cli webpack-dev-server fork-ts-checker-webpack-plugin dotenv dotenv-expand
npm i html-webpack-plugin babel-loader style-loader css-loader svg-url-loader url-loader source-map-loader
npm i @babel/core @babel/plugin-external-helpers @babel/preset-env @babel/preset-react @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i react react-dom react-scripts react-router-dom connected-react-router redux @reduxjs/toolkit
npm i typescript @types/react @types/react-dom @types/react-router-dom @types/react-redux @types/node
npm i history
npm i prettier eslint-plugin-prettier
```

# 備考

## react-hot-loaderからreact-refreshへの移行について
https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#coming-from-react-hot-loader

```
yarn add react-refresh
yarn add @babel/core babel-loader @pmmmwh/react-refresh-webpack-plugin -D
yarn remove react-hot-loader @hot-loader/react-dom
```

## dotenv-webpackの問題について
https://github.com/mrsteele/dotenv-webpack/issues/377

webpackの構成を以下で検討

https://webpack.js.org/guides/production/

## Fetching query dataについて

https://relay.dev/
https://relay.dev/docs/getting-started/step-by-step-guide/

https://github.com/facebook/relay
https://github.com/graphql/graphql-js
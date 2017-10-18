# ChineseFonts
You can use this program to convert asian fonts to web fonts, like Chinese, Japanese, Korean.

這是一個可以把字體抽出壓縮成web fonts的程式，適用於中文，日文及韓文。

![convert font](https://raw.githubusercontent.com/edmondyip/ChineseFonts/master/flow.jpg)

# Usage

## Setting

```
//setting
const fileDirectory = './'; //target directory
const fileExtension = 'html'; //file extendion
const fontsSource = './fonts/seto.ttf'; //fonts source (must be .ttf)
const outputPath = 'build/'; //output web fonts directory
const fontsClass = 'h1'; //class need fonts
```
You can change setting in index.js

## package.json
```
{
  "name": "ChineseFonts",
  "version": "0.0.2",
  "description": "Zip target fonts to web fonts",
  "main": "index.js",
  "dependencies": {
    "bluebird": "latest",
    "fontmin": "latest",
    "fs": "latest",
    "gulp-ttf2woff2": "latest",
    "fast-html-parser": "latest",
    "imagemin": "latest",
    "imagemin-svgo": "latest",
    "minimatch": "latest"
  },
  "devtool": {
    "source-map": "latest"
  },
  "scripts": {
    "build": "node index.js"
  },
  "author": "Edmond Yip",
  "license": "MIT"
}

```
## install
```
$ npm install
```
Use `npm install` to install package.

## Scripts
```
$ npm run build
$ > ChineseFonts@0.0.1 build /var/test
$ > node index.js
$ Converted words : 我是超級大標題第二 (9)
```
You can see which words have been convert after run `build`.

運行`build`後會顯示已轉換的字型

# Thanks

* [Fontmin](https://github.com/ecomfe/fontmin)
* [gulp-ttf2woff2](https://github.com/nfroidure/gulp-ttf2woff2)
* [Fast Html Parse](https://github.com/ashi009/node-fast-html-parser)

# version

* v0.0.1 first push
* v0.0.2 add word counter

# Remark

This is my first open source in Github, please tell me if you find any questions, Thanks.

這是我Github第一次公開open source，還沒有掌握好重點，如有問題請多多指教。

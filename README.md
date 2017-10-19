# ChineseFonts
You can use this program to convert asian fonts to web fonts, like Chinese, Japanese, Korean.

這是一個可以把字體抽出壓縮成web fonts的程式，適用於中文，日文及韓文。

![convert font](https://raw.githubusercontent.com/edmondyip/ChineseFonts/master/flow.jpg)

# Usage

## Setting

```
//setting
const fileDirectory = './';
const fileExtension = 'html';
const fontsSource = './fonts/seto.ttf';
const outputPath = 'build/';
const fontsClass = 'h1';
```
You can change setting in index.js

## package.json
```
{
  "name": "ChineseFonts",
  "version": "0.0.3",
  "description": "Zip target fonts to web fonts",
  "main": "index.js",
  "dependencies": {
    "fontmin": "latest",
    "fs": "latest",
    "gulp-ttf2woff2": "latest",
    "fast-html-parser": "latest",
    "imagemin": "latest",
    "imagemin-svgo": "latest",
    "readdir": "latest"
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
$ > ChineseFonts@0.0.3 build /var/test
$ > node index.js
$ Converted words : 我是超級大標題第二 (9)
```
You can see which words have been convert after run `build`.

運行`build`後會顯示已轉換的字型

# Thanks

* [Harry Lo](https://github.com/apple1324hk)
* [Fontmin](https://github.com/ecomfe/fontmin)
* [gulp-ttf2woff2](https://github.com/nfroidure/gulp-ttf2woff2)
* [Fast Html Parse](https://github.com/ashi009/node-fast-html-parser)

# version

* v0.0.1 first push
* v0.0.2 add word counter
* v0.0.3 check all subdirectory

# Remark

This is my first open source in Github, please tell me if you find any questions, Thanks.

這是我Github第一次公開open source，還沒有掌握好重點，如有問題請多多指教。

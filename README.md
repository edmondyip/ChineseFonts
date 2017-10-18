# ChineseFonts
Convert Chinese text to web fonts

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
  "version": "0.0.1",
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

## Scripts
```
npm run build
```
運行`build`後會顯示已轉換的字型

# Thanks

* [Fontmin](https://github.com/ecomfe/fontmin)
* [gulp-ttf2woff2](https://github.com/nfroidure/gulp-ttf2woff2)
* [Fast Html Parse](https://github.com/ashi009/node-fast-html-parser)

# Remark

這是我Github第一次公開open source，還沒有掌握好重點，如有問題請多多指教。

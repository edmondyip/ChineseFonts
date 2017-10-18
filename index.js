//setting
const fileDirectory = './'; //target directory
const fileExtension = 'html'; //file extendion
const fontsSource = './fonts/seto.ttf'; //fonts source (must be .ttf)
const outputPath = 'build/'; //output web fonts directory
const fontsClass = 'h1'; //class need fonts

//require
const promise = require("bluebird");
const fs = require('fs');
const files = fs.readdirSync('./' + fileDirectory);
promise.promisifyAll(fs);

const htmlParser = require('fast-html-parser');
const Fontmin = require('fontmin');
const imagemin = require('imagemin');
const svgo = require('imagemin-svgo');
const ttf2woff2 = require('gulp-ttf2woff2');

let allText = "";

// get text string
files.forEach((file) => {
  const filteredFile = RegExp("^[a-z]*." + fileExtension + "$");
  if (!file.match(filteredFile)) return false;
  let fileContent = fs.readFileSync(fileDirectory + "/" + file, 'utf8');
  let forText = htmlParser.parse(fileContent);
  allText += (forText.querySelector(fontsClass).text);
});

// remove dupicate text
function removeDupicateText(string) {
  var unique = '';
  for (var i = 0; i < string.length; i++) {
    if (unique.indexOf(string[i]) == -1) {
      unique += string[i];
    }
  }
  return unique;
};

// print all text
console.log(removeDupicateText(allText));

// convert file type
var fontmin = new Fontmin()
  .src(fontsSource)
  .use(Fontmin.glyph({
    text: allText
  }))
  .use(ttf2woff2({
    clone: true
  })) // add woff2
  .dest(outputPath)
  .use(Fontmin.ttf2eot())
  .use(Fontmin.ttf2woff({
    deflate: true
  }))
  .use(Fontmin.ttf2svg());
imagemin([outputPath + '*.svg'], outputPath + 'optimize', {
  use: [svgo()]
}).then(() => {
  console.log('Convert finished'); // Finished
});
fontmin.run(function(err, files) {
  if (err) {
    throw err;
  }
});

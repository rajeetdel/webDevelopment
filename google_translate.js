var api = "AIzaSyAOFpY77xVp9xFSKVb93eWjW0OLOFsaVFI";
var googleTranslate = require('google-translate')(api);

var text = '';


for (let j = 2; j < process.argv.length; j++) {
    text = text + " " + process.argv[j];
}

console.log("English :>",text);
googleTranslate.translate(text, 'es', function(err, translation) {
  console.log("Spanish :>",translation.translatedText);
});	
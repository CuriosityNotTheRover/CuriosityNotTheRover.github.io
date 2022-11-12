/*
var text = "Prova Read";
var result = text.link("https://www.w3schools.com");
document.getElementById("readButton").innerHTML = result;
*/

/*
var textLinkRead = "Read";
document.getElementById("read").innerHTML = textLinkRead;

var textLinkComing = "Coming Next";
document.getElementById("coming").innerHTML = textLinkComing;
*/

const sections = ['Blog', 'Learning Journal', 'Antilibrary', 'About Me'];
var text = '';
for (let i = 0; i < sections.length; i++) {
    text += sections[i] + '<br>';
}
document.getElementById("nav").innerHTML = text;
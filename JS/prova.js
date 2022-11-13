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

const sections = ['Blog', 'Learning Journal', 'Antilibrary', 'About Me', 'prova'];
const sectionsLinks = [ "http://www.curiositynottherover.com",
                        "http://www.curiositynottherover.com/learningJournal.html",
                        "http://www.curiositynottherover.com/antilibrary.html",
                        "http://www.curiositynottherover.com/about.html",
                        "#"]
var text = '';
var temp;
var result
for (let i = 0; i < sections.length; i++) {
    temp = sections[i];
    result = text.link(sectionsLinks[i]);
    text += result;
}
document.getElementById("nav").innerHTML = text;

/*var data = $.csv.toObjects(csv)*/
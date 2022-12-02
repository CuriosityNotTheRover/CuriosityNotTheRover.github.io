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

//Hosting website
const website = "http://www.curiositynottherover.com"


const sections = ['Blog', 'Learning Journal', 'Antilibrary', 'About Me']; // Sections of the Navbar
const sectionsLinks = [ "",
                        "learningJournal.html",
                        "antilibrary.html",
                        "about.html",
]; // Links of the section in the Navbar


// Constructing the Navbar
var text = '';
let i = 0
for (i = 0; i < sections.length; i++) {
    text += "<a href=" + website + "/" + sectionsLinks[i] + ">" + sections[i] + "</a> "
}
document.getElementById("nav").innerHTML = text;


/*var data = $.csv.toObjects(csv)*/
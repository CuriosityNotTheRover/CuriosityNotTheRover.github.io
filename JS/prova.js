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

// Sections of the Navbar
const sections = ['Blog', 'Learning Journal', 'Antilibrary', 'About Me'];
// Links of the section in the Navbar
const sectionsLinks = [ "http://www.curiositynottherover.com",
                        "http://www.curiositynottherover.com/learningJournal.html",
                        "http://www.curiositynottherover.com/antilibrary.html",
                        "http://www.curiositynottherover.com/about.html",
]

// Constructing the Navbar
var text = '';
let i = 0
for (i = 0; i < sections.length; i++) {
    text += "<a href=" + sectionsLinks[i] + ">" + sections[i] + "</a>"
}
document.getElementById("nav").innerHTML = text;


// Post to Publish
const postToP = [   'Milestoning',
                    'Prepare in Advance'
];
// Post Published
const post = [  'Blog', 'Learning Journal', 'Antilibrary',
                'How Writing Helps Me Think'];



/*var data = $.csv.toObjects(csv)*/
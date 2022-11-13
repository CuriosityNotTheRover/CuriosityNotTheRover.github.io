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

// Sections of the Navbar
const sections = ['Blog', 'Learning Journal', 'Antilibrary', 'About Me'];
// Links of the section in the Navbar
const sectionsLinks = [ "",
                        "learningJournal.html",
                        "antilibrary.html",
                        "about.html",
]

// Constructing the Navbar
var text = '';
let i = 0
for (i = 0; i < sections.length; i++) {
    text += "<a href=" + website + "/" + sectionsLinks[i] + ">" + sections[i] + "</a>"
}
document.getElementById("nav").innerHTML = text;


// Directory of Posts
const postDirectory = "Posts"
// Post to Publish
const postToP = [   'Milestoning',
                    'Prepare in Advance'
];
// Post Published
const post = [  'An Antilibrary',
                'Which Are My Core Values?',
                'Passion From Jony Ive',
                'How Writing Helps Me Think'
];
const linkToPosts = [
                'prova'
];


/*var data = $.csv.toObjects(csv)*/
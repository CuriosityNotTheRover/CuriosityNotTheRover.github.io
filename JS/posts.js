const website = "http://www.curiositynottherover.com" //Hosting website
const postDirectory = "Posts" // Directory of Posts


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
// Array of Posts Teaser
const postTeasers = [
                'Having an antilibrary is a daily reminder that you still have to learn, you’re not finished and you have not learned everything',
                'The first question was: “Which are my core values?”. I feel like I have some values but it is curious to see how you are perceived from the outside',
                'Jony Ive does quite a few interesting things to express his passion, I analyze the ones I find most interesting',
                'writing down ideas helps me with the thinking process'
];
// Link of each post.
const linkToPosts = [
                'antilibraryArticle.html',
                'whichAreMyCoreValues.html',
                'passionFromJonyIve.html',
                'howWritingHelpsMeThink.html'
];

// Constructing the car"ds
var text = '';
let i = 0
for (i = 0; i < postToP.length; i++) {
    text += "titolo: " + postToP[i] + "<br>"
}
for (i = 0; i < post.length; i++) {
    text += "titolo: " + post[i] + "<br>" +
            postTeasers[i] + "<br>" + 
            "<a href=" + website + "/" + postDirectory + "/" + linkToPosts[i] + ">" + "read" + "</a> " +
            "<br><br>"
}
document.getElementById("postscards").innerHTML = text;

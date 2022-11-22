//var website = "http://www.curiositynottherover.com" //Hosting website


// Post Published [title, [author/s]]
const books = [ ['The Black Swan', ['Nassim Nicholas Taleb']],
                ['Overcomplicated', ['Samuel Arbesman']],
                ['All Art is Propaganda', ['George Orwell']],
                ['The Tools of Argument', ['Joel P. Trachtman']]
];
// Array containing the images   TO UPDATE
const images = [
                'Having an antilibrary is a daily reminder that you still have to learn, you’re not finished and you have not learned everything',
                'The first question was: “Which are my core values?”. I feel like I have some values but it is curious to see how you are perceived from the outside',
                'Jony Ive does quite a few interesting things to express his passion, I analyze the ones I find most interesting',
                'writing down ideas helps me with the thinking process'
];

// Constructing the cards with the books
var text = '';
var j = 0
var i = 0
for (j = 0; j < books.length; j++) {
    text += '<div class="card"><h4><b>' + books[j][0] + '</b></h4><p>'
    for (i = 0; i < books[j].length; i++) {
        text += books[j][1][i] + ', '
    }
    text += '</p></div>'
}
document.getElementById("books").innerHTML = text;

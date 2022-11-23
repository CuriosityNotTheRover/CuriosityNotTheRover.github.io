var website = "http://www.curiositynottherover.com" //Hosting website
const coverDirectory = "img/BooksCovers/" // Directory of Posts


// Post Published [title, [author/s]]
const books = [ ['The Black Swan', ['Nassim Nicholas Taleb']],
                ['Overcomplicated', ['Samuel Arbesman']],
                ['All Art is Propaganda', ['George Orwell']],
                ['The Tools of Argument', ['Joel P. Trachtman']]
];
// Array containing the images   TO UPDATE
const images = [
                'TheBlackSwan-NassimNicholasTaleb.jpg',
                'Overcomplicated-SamuelArbesman.png',
                'AllArtIsPropaganda-GeorgeOrwell.jpg',
                'TheToolsOfArgument-JoelTrachtman.png'
];

// Constructing the cards with the books.
var text = '';
var j = 0
var i = 0
for (j = 0; j < books.length; j++) {
    text += '<div class="card"><h4><b>' + books[j][0] + '</b></h4><p>'
    for (i = 0; i < books[j][1].length; i++) {
        text += books[j][1][i] + ', '
    }
    text += '</p><br><img src=' + website + "/" + coverDirectory + images[j] + ' width="100px">' + '</div>'
}
document.getElementById("books").innerHTML = text;

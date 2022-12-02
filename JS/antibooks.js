var website = "http://www.curiositynottherover.com" //Hosting website
const coverDirectory = "img/BooksCovers/" // Directory of Posts


// Post Published [title, [author/s]]
const books = [ ['The Book of Why', ['Judea Pearl']],
                ['The Black Swan', ['Nassim Nicholas Taleb']],
                ['Overcomplicated', ['Samuel Arbesman']],
                ['All Art is Propaganda', ['George Orwell']],
                ['The Tools of Argument', ['Joel P. Trachtman']],
                ['Godel, Escher, Bach: An Eternal Golden Braid', ['Douglas Hofstadter']]
];
// Array containing the images   TO UPDATE
const images = [
                'TheBookOfWhy-JudeaPearl.png',
                'TheBlackSwan-NassimNicholasTaleb.jpg',
                'Overcomplicated-SamuelArbesman.png',
                'AllArtIsPropaganda-GeorgeOrwell.jpg',
                'TheToolsOfArgument-JoelTrachtman.png',
                'GEB-DouglasRHofstadter.jpg'
];

/*
    <div class="books">    
		<div class="bookCover">
			<img class="cover" src="http://www.curiositynottherover.com/img/BooksCovers/TheBlackSwan-NassimNicholasTaleb.jpg">
		</div>
		<div class="content">
			<p class="booktitle"><h4><b>Titolo</b></h4></p>
			<p class="bookauthor">Autore</p>
		</div>
	</div>
*/

// Constructing the cards with the books.
var text = '';
var j = 0
var i = 0
for (j = 0; j < books.length; j++) {
    text += '<div class="books"><div class="bookCover">' + 
        '<img class="cover" src="' +  website + "/" + coverDirectory + images[j] + '"></div>' +
        '<div class="content"><p class="booktitle"><h4><b>' + books[j][0] + '</b></h4><p>' +
        '<p class="bookauthor">'
    for (i = 0; i < books[j][1].length; i++) {
        text += books[j][1][i] + ', '
    }
    text += '</p></div></div>'
}
document.getElementById("books").innerHTML = text;

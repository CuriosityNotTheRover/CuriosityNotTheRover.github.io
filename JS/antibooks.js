var websiteAnti = "http://www.curiositynottherover.com" //Hosting website
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
var jAnti = 0
var iAnti = 0
for (jAnti = 0; jAnti < books.length; jAnti++) {
    text += '<div class="books"><div class="bookCover">' + 
        '<img class="cover" src="' +  websiteAnti + "/" + coverDirectory + images[jAnti] + '"></div>' +
        '<div class="content"><p class="booktitle"><h4><b>' + books[jAnti][0] + '</b></h4><p>' +
        '<p class="bookauthor">'
    for (iAnti = 0; iAnti < books[jAnti][1].length; iAnti++) {
        text += books[jAnti][1][iAnti]
        if(iAnti < books[jAnti][1].length - 1){
            text += ', '
        }
    }
    text += '</p></div></div>'
}
document.getElementById("books").innerHTML = text;

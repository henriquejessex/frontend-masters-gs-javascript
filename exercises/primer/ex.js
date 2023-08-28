var favoriteBooks = [];
var book = "";

function addFavoriteBook(bookName){
    if(!bookName.includes("Great")){
        favoriteBooks.push(bookName);
    }   
}


function printFavoriteBooks(){
    for (let i = 0; i < favoriteBooks.length; i++) {
        const book = favoriteBooks[i];
        
    }
    console.log(favoriteBooks);
    
}



addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();

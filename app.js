var favoriteBooks = [];

function addFavoriteBook(book) {
  // First, We'll check if the book string contains great or not, If not then we'll add this to our collection.

  // Don't assume that user will always pass an String as input for Book. So Double Test it before executing.

  if (typeof book === "string") {
    const bookLowerCaseString = book.toLowerCase();

    if (!bookLowerCaseString.includes("great")) {
      // Using .includes() on string, I can check if this string contains "great" as sub-string or Not.

      favoriteBooks.push(book);
    }

    // No Else Here.
  } else {
    console.error("Please pass an String as input for Book");
  }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know Js");
addFavoriteBook(1);

console.log(favoriteBooks);

// Create book object with
// Properties: title, author, pages
// Function: open, close
// Call book.open() function

let book = {
    title: "munamadan",
    author: "laxmi prasad devkota",
    pages : 500,
     open: function(){
        console.log(`book is open`)
     },
     close: function(){
        console.log(`book is close`)
     }
}
book.open()
book.close()
// practicing class 
class Book{
    constructor(name,author,edition,page){
        this.name = name
        this.author = author
        this.edition = edition
        this.page    = 500
    }
    display(){
        console.log(`Name of book is ${this.name}`)
        console.log(`Author of the book is ${this.author}`)
        console.log(`Edition of book is ${this.edition}`)
        console.log(`Page of book is ${this.page}`)
        console.log('\n----------------------------')
    }

}
   //creating object
   const book1 = new Book("Rich Dad Poor Dad","Robert Kiyosaki",1997,195)
   const book2 = new Book("Muna Madan","Laxmi Prasad",1990,450)
   const book3 = new Book("Letting Go","Philip Roth",1995,250)
   const book4 = new Book("Fear of Flying","Erica Jong",1998,150)
   
   books = [ book1,book2,book3,book4]
      for(i=0; i<books.length; i++){
        books[i].display()
      }

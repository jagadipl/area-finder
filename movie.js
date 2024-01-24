// practicing Class
 
class Movie{
    constructor(name,director,actor,actress,releaseDate,duration,){
        this.name    = name
        this.director = director
        this.actor   = actor
        this.actress = actress
        this.releaseDate = releaseDate// dont give space in between release and date
        this.duration = duration
    }
    display(){
        console.log(`name of movie is ${this.name}`)
        console.log(`director of movie is ${this.director}`)
        console.log(`actor of the ,movie is ${this.actor}`)
        console.log(`actress of the movie is${this.actress}`)
        console.log(`releaseDate of movie is ${this.releaseDate}`)
        console.log(`duration of movie is ${this.duration}`)
        console.log('\n-----------------------------');
    }
}

// careating object

 const movie1 = new Movie("Titanic","James Camero","Leonardo DiCaprio","Kate Winslet",1997,"3 hour and 14 minute")
 const movie2 = new Movie("Animal","Sandeep Reddy","Ranvir","Tripti",2023,"2.30 hrs")
 const movie3 = new Movie("Upakar","Surendra Rana","Shree Krishna","Neeruta",2000,"2.50 hrs")
 const movie4 = new Movie("ChhakaPanja","Deepa Shree","Deepak","priyanka",2020,"2.3hrs")

movies = [movie1,movie2,movie3, movie4]

for(i=0; i<movies.length; i++){
    movies[i].display()
}
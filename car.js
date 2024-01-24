class Car{
    constructor(brand,price,color,year){
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.year  = year;
    }
    display(){
        console.log(`car brand is ${this.brand}`)
        console.log(`car price is ${this.price}`)
        console.log(`car color is ${this.color}`)
        console.log(`car year is ${this.year}`)
    }


}
// creating object
const car1 = new Car("BMW",70000,"Silver",2024)
car1.price = 75000
car1.display()

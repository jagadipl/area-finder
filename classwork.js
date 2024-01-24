// Class: Class is blueprint for creating object 
class Laptop{
    constructor(name,price,color){
        this.name = name;
        this.price = price;
        this.color = color;
    }

    display(){
        console.log(`Laptop name is ${this.name}`);
        console.log(`Laptop price is ${this.price}`);
        console.log(`Laptop color is ${this.color}`);
    }
}

// Creating object
const laptop1 = new Laptop("HP",4500,"black")
laptop1.color="red"// we can change of color , price and name too ,here changing color by adding red
laptop1.display()




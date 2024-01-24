const capital = new Map()


capital.set("nepal","Kathmandu")
capital.set("india","delhi")
capital.set("japan","tokyo")
capital.set("bhutan","thimpu")


 console.log(capital.get("nepal"));
 console.log(capital.get("japan"))
capital.delete("japan")
console.log(capital.size);
console.log(capital.has("usa")); // has indicate true or false, if item has on it says true otherwise false.

capital.forEach(function (value,key){
    console.log(`The capital of ${key} is ${value}.`);
})
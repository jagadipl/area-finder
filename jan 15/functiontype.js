// Function Types
// No Parameter And No Return Type
// Parameter And No Return Type
// No Parameter And Return Type
// Parameter And Return Type

// if there is nothing in (), then its no parameter
// if there is no return keyword then its no return type
function displayName(){
    console.log("Jagadip Lamsal");
}


// Parameter and No return Type
function add(a,b){
    total = a +b 
    console.log(`Total is ${total}`);
}
add(5,6)
add(7,70)
add(10,7)
// Parameter and return Type
function diff(a,b){
    total = a-b 
    return total
}


data = diff(10,2)
console.log(`Diff is ${data}`);



// calling function
displayName()


// No Parameter And Return Type
function voterAge(){
    return 18
}


age = voterAge()
console.log(age);
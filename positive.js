result  = numberChecker(5)
console.log(result);


function numberChecker(number){
    if(number>0){
        return "Number is positive."
    }else if(number <0){
        return "Number is negative."
    }else if(number == 0){
        return "Number is 0"
    }else{
        return "Something went wrong..."
    }
}
// print positive,negative and zero number in js another way
 number = -5
 if( number>0){
    console.log("number is positive.")

 }else if( number<0){
    console.log("number is negative.")

 }else if( number == 0){
    console.log("numner is zero")
 }else {
    console.log("something went wrong...")
 }
 // converting in function above practice
 numberChecker(6)
 function numberChecker(number){
if( number>0){
        console.log("number is positive.")
    
     }else if( number<0){
        console.log("number is negative.")
    
     }else if( number == 0){
        console.log("numner is zero")
     }else {
        console.log("something went wrong...")
     }
 }
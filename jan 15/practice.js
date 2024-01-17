function displayName(){
    console.log("jagadip");
}
displayName()

// print even numbers between 1 to 100 by using function

function printNumber(start, end){
    for( i=start; i<=end; i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
printNumber(1,50)
// print odd number from 1 to 30 by using function
function printOddNumbers() {
    for (i = 1; i<= 30;  i += 2) {
        console.log(i);
    }
}

// Call the function to print odd numbers from 1 to 30
printOddNumbers();

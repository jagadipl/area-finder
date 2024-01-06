 // Creating random password.
 function randompasswordGenerator(total){
    randompass = ""
    for(i=0; i<total; i++){
        randompass+=getRandomChar()
    }
console.log(`Random Password is: ${randompass}`);
   
}

randompasswordGenerator(4)
function getRandomChar(){
    words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~@#$%^&*()-"
    length = words.length
    random_index = Math.floor(Math.random()*length)
    return words[random_index] 
}




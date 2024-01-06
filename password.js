//  Creating Random password
function randompasswordGenerator(total){
    randompass = ""
    for( i=0; i<total; i++)
    {randompass+=getRandomChar()
    }
    
console.log(`Random Password is: ${randompass}`);
}
randompasswordGenerator(6)
 
function getRandomChar(){
    words = "ABCDEFGHIJ123456/*^%"
    length = words.length
    random_index = Math.floor(Math.random()*length)
    return words[random_index]
}
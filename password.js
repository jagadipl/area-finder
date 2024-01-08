//  Creating Random password
function randompasswordGenerator(total){
    randompass = ""
    for( i=0; i<total; i++)
    {randompass+=getRandomChar()
    }
    
console.log(`Random Password is: ${randompass}`);
}
randompasswordGenerator(7)
 
function getRandomChar(){
    words = "ABCDEFGHIJ123456/*^%"
    length = words.length
    random_index = Math.floor(Math.random()*length)
    return words[random_index]
}
 //creating random pasword
 function randompasswordGenerator(total){
    randompass = ""
    for( i = 0; i<total; i++){
        randompass+=getRandomChar()
    }
    console.log(`Random password is: ${randompass}`)
 }
 randompasswordGenerator(4)

 function getRandomChar(){
    words = "ABCDEFGH/*$#@123456"
    length = words.length
    randomIndex = Math.floor(Math.random()*length)
    return words[randomIndex]
 }
   
 function randompasswordgenerator(total){
    password = ""
    for(i = 0; i<total; i++){
        randompass+=getRandomChar()
        console.log(`Random password is:${randompass}`)

    }
}
randompasswordGenerator(2)


function getRandomchar(){
    words = "ABCDEFGHI"
    length = words.length
    randomIndex = Math.floor(Math.random()*length )
    return words[randomIndex]
}


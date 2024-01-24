// Regular expression is a sequence of character that forms a search patterns.

text = "Jagadip Lamsal"

n= text.search("Lamsal")
n= text.replace("Lamsal", "Poduel")
console.log(n);


function valiateEmail(email){
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email)
}

email = "a@gmail.com"
console.log(valiateEmail(email));
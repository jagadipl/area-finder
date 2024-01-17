todo = []

todo.push("Learn Js")
todo.push("Learn C#")
todo.push("Go to work")
todo.push("Sleep")
// remove item[s] from array based on index value

todo.splice(2,2)
for(i=0; i<todo.length; i++){
    console.log(todo[i])
}
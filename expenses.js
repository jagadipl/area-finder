const expenses = new Map()

expenses.set("sun",160)
expenses.set("mon",80)
expenses.set("tue",170)
expenses.set("wed",95)
expenses.set("thur",85)
expenses.set("fri",100)
expenses.set("sat",105)

total = 0
expenses.forEach(function(value,key){
    console.log(`expenses of ${key} is ${value}`)
    total+=value
   
})

console.log(`Total expenses of week is ${total}`);

// set and print salary of 12 months. Also find total of each month.

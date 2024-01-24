const salary = new Map()

salary.set("jan",2500)
salary.set("feb",2500)
salary.set("march",2600)
salary.set("april",2400)
salary.set("may",2700)
salary.set("jun",2300)
salary.set("july",2700)
salary.set("august",2800)
salary.set("sep",2600)
salary.set("oct",2600)
salary.set("nov",2800)
salary.set("dec",2000)

total = 0
salary.forEach(function(value,key){
    console.log(`Salary of ${key} is ${value}`)
    total += value
})
console.log(`Total income of the 12 month is ${total}`)
console.log(typeof(salary))


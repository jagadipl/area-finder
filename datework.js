const date = new Date()

console.log(date.toString());


let birthday = new Date('1997-05-14')
let today = new Date('2024-05-14')

// 
console.log(birthday.getDay());
console.log(birthday.getMonth());


// Add Days to a date
birthday.setDate(birthday.getDate()+365)

console.log(birthday);

millisec = today-birthday
days = millisec/ (1000*60*60*24)
year = days /365
console.log(Math.floor(year));
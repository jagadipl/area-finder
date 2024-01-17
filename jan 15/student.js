// Create array students add 3 students. Use push pop and find the length.

student = ["ram","shayam","hari","gopal"]
student.pop()
student.push("bhim")
student.push("mahesh")
student.push("dillip")


for(i=0; i<student.length; i++){
    console.log(student[i])
}
length = student.length
console.log(`total number of student:${length}`)


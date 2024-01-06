json = `{
    "firstname": "jagadip",
    "lastname" : "lamsal"
}`
obj= JSON.parse(json)
console.log(`My name is ${obj.firstname} ${obj.lastname}`)

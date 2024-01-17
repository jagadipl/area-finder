text= `{
  "name": "Jagadip Lamsal",
  "address": "Columbus ohio",
  "Contact": "jagadiplamsal@gmail.com",
  "about me":
  " Hi this is jagadip lamsal.I would like to be a Web developer in a future.nowadays doing some useful classes regarding web developer.",
  "skills" : "html,css and javascripts"
  
  
  
}`

obj =JSON.parse(text)


console.log(obj.skills)
console.log(obj.name)
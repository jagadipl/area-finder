function multiply(){
    number = parseFloat(document.getElementById("multipe").value);
    result = "<p>"
    for(i=1; i<=10; i++){
        result+=`${number} * ${i} = ${number*i}<br>`
    }
    result += "</p>"
    console.log(result);
    document.getElementById("result").innerHTML= result;
}
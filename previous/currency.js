function CurrencyConvert(){
    usd = document.getElementById("number").value
   chosenCountry = document.querySelector("input[name='convert']:checked").value
if(chosenCountry== "nepali"){
    amount = parseFloat(usd) * 130
    alert(`converted nepali amount is ${amount}`)
}else if(chosenCountry== "indian"){
    amount = parseFloat(usd) * 83
    alert(`converted indain amount is ${amount}`)
 }else if(chosenCountry== "japanease"){
    amount = parseFloat(usd) * 142
    alert( `converted japanease amount is ${amount}`)
 }else if(chosenCountry== "bhutinease"){
    amount = parseFloat(usd) * 60
    alert(`converted bhutinease amount is ${amount}`)
 }
 else if(chosenCountry== "pakistan"){
    amount = parseFloat(usd) * 283
    alert(`converted pakistan amount is ${amount}`)
    }
    else if(chosenCountry== "srilankan"){
        amount = parseFloat(usd) * 326
        alert(`converted srilankan amount is ${amount}`)
    }
    else if(chosenCountry== "chinease"){
        amount = parseFloat(usd) * 7
        alert(`converted chinease amount is ${amount}`)
        alert(`please choose country first`)
    }
}
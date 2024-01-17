

function rolldice(){
    random = Math.floor(Math.random() * 6)+1
    console.log(random);
    document.getElementById("img").src=`https://raw.githubusercontent.com/bishworajpoudelofficial/flutter_dice_roller/master/assets/${random}.png`
}

function roll6Dice(){
    img1 = Math.floor(Math.random() * 6)+1
    img2 = Math.floor(Math.random() * 6)+1
    img3 = Math.floor(Math.random() * 6)+1
    img4 = Math.floor(Math.random() * 6)+1
    img5 = Math.floor(Math.random() * 6)+1
    img6 = Math.floor(Math.random() * 6)+1
    document.getElementById("img1").src=`https://raw.githubusercontent.com/bishworajpoudelofficial/flutter_dice_roller/master/assets/${img1}.png`
    document.getElementById("img2").src=`https://raw.githubusercontent.com/bishworajpoudelofficial/flutter_dice_roller/master/assets/${img2}.png`
    document.getElementById("img3").src=`https://raw.githubusercontent.com/bishworajpoudelofficial/flutter_dice_roller/master/assets/${img3}.png`
    document.getElementById("img4").src=`https://raw.githubusercontent.com/bishworajpoudelofficial/flutter_dice_roller/master/assets/${img4}.png`
    document.getElementById("img5").src=`https://raw.githubusercontent.com/bishworajpoudelofficial/flutter_dice_roller/master/assets/${img5}.png`
    document.getElementById("img6").src=`https://raw.githubusercontent.com/bishworajpoudelofficial/flutter_dice_roller/master/assets/${img6}.png`
}


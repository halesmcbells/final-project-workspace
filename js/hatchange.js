// JS for changing hat

function hatchange(){
    let selecthat = document.querySelector('.hatform input[name="hat"]:checked').value;
    //console.log("hat" +selecthat);
    switch (selecthat) {
        case "cowboy":
            document.getElementById("hatChosen").setAttribute('src','imgs/cowboyHAT.png');
            break;
        case "baseball":
            document.getElementById("hatChosen").setAttribute('src','imgs/basebHAT.png');
            break;
        case "beanie":
            document.getElementById("hatChosen").setAttribute('src', 'imgs/beanie.png');
            break;
        case "crown":
            document.getElementById("hatChosen").setAttribute('src', 'imgs/crown.png');
            break;
        case "top":
            document.getElementById("hatChosen").setAttribute('src', 'imgs/tophat.png');
            break;
        case "wiz":
            document.getElementById("hatChosen").setAttribute('src', 'imgs/wizardhat.png');
            break;
        case "removeHat":
            document.getElementById("hatChosen").setAttribute('src', 'imgs/blank.png');
            break;
    }
}
var Elist =document.querySelectorAll(".hatform input[type = 'radio']");
for(var i=0; i<Elist.length;i++){
     Elist[i].addEventListener("change", hatchange, false);
}
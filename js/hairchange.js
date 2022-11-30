// JS for changing hair

function hairchange(){
    let selecthair = document.querySelector('.hairform input[name="hair"]:checked').value;
    // console.log("hair" +selecthair);
    switch (selecthair) {
        case "blackmasc":
            document.getElementById("hairChosen").setAttribute('src','imgs/blackmasc.png');
            break;
        case "brownmasc":
            document.getElementById("hairChosen").setAttribute('src','imgs/brownmasc.png');
            break;
        case "longmasc":
            document.getElementById("hairChosen").setAttribute('src', 'imgs/longmasc.png');
            break;
        case "curlfem":
            document.getElementById("hairChosen").setAttribute('src', 'imgs/curlfem.png');
            break;
        case "silver":
            document.getElementById("hairChosen").setAttribute('src', 'imgs/silfem.png');
            break;
        case "pink":
            document.getElementById("hairChosen").setAttribute('src', 'imgs/pinkfem.png');
            break;
        case "removeHair":
            document.getElementById("hairChosen").setAttribute('src', 'imgs/blank.png');
            break;
    }
}
var Elist =document.querySelectorAll(".hairform input[type = 'radio']");
for(var i=0; i<Elist.length;i++){
     Elist[i].addEventListener("change", hairchange, false);
}
// Show or hide dress form
$('.dressform').hide();    // dress form is initially hidden

// function for shirt button
$('#dressbut').click(function(){
    if($('.dressform').is(':visible')){  // if dress form IS visible
        $('.dressform').hide();          // hide dress form on click
    }else{
        $('.dressform').show();          // if dress form is NOT visible, show form 
    }
});

// JS for changing dress
function dresschange(){
    let selectdress = document.querySelector('.dressform input[name="dress"]:checked').value;
    // console.log("hair" +selecthair);
    switch (selectdress) {
        case "suit":
            document.getElementById("dressChosen").setAttribute('src','imgs/blackpolo.png');
            break;
        case "whiteshirt":
            document.getElementById("dressChosen").setAttribute('src','imgs/whitesh.png');
            break;
        case "yellow":
            document.getElementById("dressChosen").setAttribute('src', 'imgs/yellow.png');
            break;
        case "bluesweater":
            document.getElementById("dressChosen").setAttribute('src', 'imgs/bluesweater.png');
            break;
        case "knotted":
            document.getElementById("dressChosen").setAttribute('src', 'imgs/bluetie.png');
            break;
        case "bluetshirt":
            document.getElementById("dressChosen").setAttribute('src', 'imgs/bluetsh.png');
            break;
        case "flowerbutup":
                document.getElementById("dressChosen").setAttribute('src', 'imgs/flowerbutup.png');
                break;
        case "removeFull":
            document.getElementById("dressChosen").setAttribute('src', 'imgs/blank.png');
            break;
    }
}
var Elist =document.querySelectorAll(".dressform input[type = 'radio']");
for(var i=0; i<Elist.length;i++){
     Elist[i].addEventListener("change", dresschange, false);
}
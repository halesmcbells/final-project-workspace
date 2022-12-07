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
    switch (selectdress) {
        case "suit":
            document.getElementById("dressChosen").setAttribute('src','imgs/suit.png');
            break;
        case "floraldress":
            document.getElementById("dressChosen").setAttribute('src','imgs/flowerdress.png');
            break;
        case "bluedress":
            document.getElementById("dressChosen").setAttribute('src', 'imgs/bluedress.png');
            break;
        case "polkadress":
            document.getElementById("dressChosen").setAttribute('src', 'imgs/blackpolkadress.png');
            break;
        case "blackdress":
            document.getElementById("dressChosen").setAttribute('src', 'imgs/blackdress.png');
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
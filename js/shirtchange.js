// Show or hide shirt form
$('.shirtform').hide();    // shirt form is initially hidden

// function for shirt button
$('#shirtbut').click(function(){
    if($('.shirtform').is(':visible')){  // if shirt form IS visible
        $('.shirtform').hide();          // hide shirt form on click
    }else{
        $('.shirtform').show();          // if shirt form is NOT visible, show form 
    }
});

// JS for changing shirt
function shirtchange(){
    let selectshirt = document.querySelector('.shirtform input[name="shirt"]:checked').value;
    // console.log("hair" +selecthair);
    switch (selectshirt) {
        case "blackpolo":
            document.getElementById("shirtChosen").setAttribute('src','imgs/blackpolo.png');
            break;
        case "whiteshirt":
            document.getElementById("shirtChosen").setAttribute('src','imgs/whitesh.png');
            break;
        case "yellow":
            document.getElementById("shirtChosen").setAttribute('src', 'imgs/yellow.png');
            break;
        case "bluesweater":
            document.getElementById("shirtChosen").setAttribute('src', 'imgs/bluesweater.png');
            break;
        case "knotted":
            document.getElementById("shirtChosen").setAttribute('src', 'imgs/bluetie.png');
            break;
        case "bluetshirt":
            document.getElementById("shirtChosen").setAttribute('src', 'imgs/bluetsh.png');
            break;
        case "flowerbutup":
                document.getElementById("shirtChosen").setAttribute('src', 'imgs/flowerbutup.png');
                break;
        case "removeShirt":
            document.getElementById("shirtChosen").setAttribute('src', 'imgs/blank.png');
            break;
    }
}
var Elist =document.querySelectorAll(".shirtform input[type = 'radio']");
for(var i=0; i<Elist.length;i++){
     Elist[i].addEventListener("change", shirtchange, false);
}
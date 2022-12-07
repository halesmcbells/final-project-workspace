// Show or hide pants form
$('.pantsform').hide();    // pants form is initially hidden

// function for pant button
$('#pantsbut').click(function(){
    if($('.pantsform').is(':visible')){  // if pants form IS visible
        $('.pantsform').hide();          // hide pants form on click
    }else{
        $('.pantsform').show();          // if pants form is NOT visible, show form 
    }
});

// JS for changing pants
function pantschange(){
    let selectpants = document.querySelector('.pantsform input[name="pants"]:checked').value;
    // console.log("pants" +selectpants);
    switch (selectpants) {
        case "denim":
            document.getElementById("pantsChosen").setAttribute('src','imgs/denimpants.png');
            break;
        case "ripped":
            document.getElementById("pantsChosen").setAttribute('src','imgs/rippedpants.png');
            break;
        case "rose":
            document.getElementById("pantsChosen").setAttribute('src', 'imgs/rosepants.png');
            break;
        case "overalls":
            document.getElementById("pantsChosen").setAttribute('src', 'imgs/overalls.png');
            break;
        case "blackskirt":
            document.getElementById("pantsChosen").setAttribute('src', 'imgs/blackskirt.png');
            break;
        case "beltskirt":
            document.getElementById("pantsChosen").setAttribute('src', 'imgs/beltskirt.png');
            break;
        case "purpleskirt":
            document.getElementById("pantsChosen").setAttribute('src', 'imgs/purpskirt.png');
            break;
        case "removePants":
            document.getElementById("pantsChosen").setAttribute('src', 'imgs/blank.png');
            break;
    }
}
var Elist =document.querySelectorAll(".pantsform input[type = 'radio']");
for(var i=0; i<Elist.length;i++){
     Elist[i].addEventListener("change", pantschange, false);
}
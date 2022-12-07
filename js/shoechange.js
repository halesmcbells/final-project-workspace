// Show or hide shoe form
$('.shoeform').hide();    // shoe form is initially hidden

// function for shirt button
$('#shoebut').click(function(){
    if($('.shoeform').is(':visible')){  // if shoe form IS visible
        $('.shoeform').hide();          // hide shoe form on click
    }else{
        $('.shoeform').show();          // if shoe form is NOT visible, show form 
    }
});

// JS for changing shoe
function shoechange(){
    let selectshoe = document.querySelector('.shoeform input[name="shoes"]:checked').value;
    // console.log("hair" +selecthair);
    switch (selectshoe) {
        case "bluesneaks":
            document.getElementById("shoesChosen").setAttribute('src','imgs/bluesneaks.png');
            break;
        case "brownboots":
            document.getElementById("shoesChosen").setAttribute('src','imgs/brownboots.png');
            break;
        case "flats":
            document.getElementById("shoesChosen").setAttribute('src', 'imgs/flats.png');
            break;
        case "converse":
            document.getElementById("shoesChosen").setAttribute('src', 'imgs/platconv.png');
            break;
        case "rainboots":
            document.getElementById("shoesChosen").setAttribute('src', 'imgs/rainboots.png');
            break;
        case "removeShoes":
            document.getElementById("shoesChosen").setAttribute('src', 'imgs/blank.png');
            break;
    }
}
var Elist =document.querySelectorAll(".shoeform input[type = 'radio']");
for(var i=0; i<Elist.length;i++){
     Elist[i].addEventListener("change", shoechange, false);
}
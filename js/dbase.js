/* Change the configuration */

const firebaseConfig = {
    apiKey: 'AIzaSyC9IFN_gsJbH-vsNw2bghWq5Shp3zMO3y8',
    authDomain: 'grocies-700b7.firebaseapp.com',
    projectId: 'grocies-700b7',
    storageBucket: 'grocies-700b7.appspot.com',
    messagingSenderId: '616117787461',
    appId: '1:616117787461:web:8ec17f04f27cfe51fbfc2c',
    measurementId: 'G-KVEGFW5T0Q',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// enter data in
$("#save").click(function (e) {
    //get the value of form
    var inputdata = $('form').serializeArray();
    var data = {}; // data to be sent to database
    console.log(inputdata[0].name);
    console.log(inputdata[0].value);
  
    /* save the data to database */
    inputdata.forEach((entry) => {
      console.log(entry);
      data[entry.name] = entry.value;
    });
    console.log(data);
    firebase.firestore().collection('testfinaldata').add(data);
  });


 var i = 0;

  $('#next,#prev').click(function () {
    firebase
    .firestore()
    .collection('testfinaldata')
    .onSnapshot((querySnapshot) => {
     // console.log(querySnapshot.size);
        const doc = querySnapshot.docs[i];
        let currentHat = doc?.data()?.hat ?? "removeHat";
        let selecthat = currentHat;
            switch (selecthat) {
              case "cowboy":
                  document.getElementById("hatReview").setAttribute('src','imgs/cowboyHAT.png');
                  break;
              case "baseball":
                  document.getElementById("hatReview").setAttribute('src','imgs/basebHAT.png');
                  break;
              case "beanie":
                  document.getElementById("hatReview").setAttribute('src', 'imgs/beanie.png');
                  break;
              case "crown":
                  document.getElementById("hatReview").setAttribute('src', 'imgs/crown.png');
                  break;
              case "top":
                  document.getElementById("hatReview").setAttribute('src', 'imgs/tophat.png');
                  break;
              case "wiz":
                  document.getElementById("hatReview").setAttribute('src', 'imgs/wizardhat.png');
                  break;
              case "removeHat":
                  document.getElementById("hatReview").setAttribute('src', 'imgs/blank.png');
                  break;
          }      

        //console.log(currentHat);
        let currentHair = doc?.data()?.hair ?? "removeHair";
        let selecthair = currentHair;
        //the same switch as hairchange function
          switch (selecthair) {
              case "blackmasc":
                  document.getElementById("hairReview").setAttribute('src','imgs/blackmasc.png');
                  break;
              case "brownmasc":
                  document.getElementById("hairReview").setAttribute('src','imgs/brownmasc.png');
                  break;
              case "longmasc":
                  document.getElementById("hairReview").setAttribute('src', 'imgs/longmasc.png');
                  break;
              case "curlfem":
                  document.getElementById("hairReview").setAttribute('src', 'imgs/curlfem.png');
                  break;
              case "silver":
                  document.getElementById("hairReview").setAttribute('src', 'imgs/silfem.png');
                  break;
              case "pink":
                  document.getElementById("hairReview").setAttribute('src', 'imgs/pinkfem.png');
                  break;
              case "removeHair":
                  document.getElementById("hairReview").setAttribute('src', 'imgs/blank.png');
                  break;
          }

          let currentPants = doc?.data()?.pants ?? "removePants";
          let selectpants = currentPants;
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

        let currentShirt = doc?.data()?.shirt ?? "removeShirt";
        let selectshirt = currentShirt;
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

        let currentDress = doc?.data()?.dress ?? "removeFull";
        let selectdress = currentDress;
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


        let currentShoe = doc?.data()?.shoes ?? "removeShoes";
        let selectshoe = currentShoe;
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



        if(i==querySnapshot.size+1){
          i = 0;
          console.log(i);
        } else if(this.id == 'next'){
          i++;
          console.log(i);
        } else if(this.id == 'prev' && i != 0){
            i--;
            console.log(i);
        }

        }
    );
 
  });
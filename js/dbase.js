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

  $('#next').click(function () {
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

        if(i==querySnapshot.size-1){
          i = 0;
          //console.log(i);
        } else{
          i++;
          //console.log(i);
        }

        }
    );
 
  });
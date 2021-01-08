// var firebaseConfig = {
//   apiKey: "AIzaSyDS5R9n2lX6KqlObrNvGtRiHXCEs3Vstig",
//   authDomain: "web-test-a08d6.firebaseapp.com",
//   projectId: "web-test-a08d6",
//   storageBucket: "web-test-a08d6.appspot.com",
//   messagingSenderId: "570420623193",
//   appId: "1:570420623193:web:3f9d47bc1ce76bf2e17e48",
//   measurementId: "G-2SRDM5QKX9",
// };
var firebaseConfig = {
  apiKey: "AIzaSyCfh5Tq8_lpVtmgZFbI5zYes3LWoa0lXBI",
  authDomain: "test-c0604.firebaseapp.com",
  databaseURL: "https://test-c0604.firebaseio.com",
  projectId: "test-c0604",
  storageBucket: "test-c0604.appspot.com",
  messagingSenderId: "1070351075049",
  appId: "1:1070351075049:web:326f0c91e1ad0f184fd278",
  measurementId: "G-F4VC1CSY67",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var TestV;
var On1 = 1;
var Off1 = 0;

var selfCheckTCV = document.getElementById("selTcv");
var selfCheckTANK = document.getElementById("selTank");
var reprocessingTCV = document.getElementById("repTcv");
var reprocessingTANK = document.getElementById("repTank");
var selfTcv;
var selTank;
var repTcv;
var repTank;

let btnrepStart = document.querySelector('#repStart');
let btnselStart = document.querySelector('#selStart');



function Ready() {
  //------ Send Value ---------//
  //------ Show Value ---------//
}

if (firebase != false) {
  Ready();
  firebase
    .database()
    .ref("selfCheck/")
    .on("value", function (snapshot) {
      selTank = document.getElementById("selTank").value = snapshot.val().tank;
      selfCheckTANK.innerHTML = selTank;
    });
  //------ Show Value ---------//
  firebase
    .database()
    .ref("selfCheck/")
    .on("value", function (snapshot) {
      selfTcv = document.getElementById("selTcv").value = snapshot.val().tcv;
      selfCheckTCV.innerHTML = selfTcv;
    });
  firebase
    .database()
    .ref("reprocessing/")
    .on("value", function (snapshot) {
      repTank = document.getElementById("repTank").value = snapshot.val().tank;
      reprocessingTANK.innerHTML = repTank;
    });
  firebase
    .database()
    .ref("reprocessing/")
    .on("value", function (snapshot) {
      repTcv = document.getElementById("repTcv").value = snapshot.val().tcv;
      reprocessingTCV.innerHTML = repTcv;
    });
}

//------ Send Value ---------//

document.getElementById("selStart").onclick = function () {
 
  btnselStart.addEventListener('click',()=> btnselStart.style.backgroundColor= '#fff')
  Ready();
  firebase.database().ref("selfCheck/").update({
    btStart: Off1,
  });
  setTimeout(function () {
    btnselStart.addEventListener('click',()=> btnselStart.style.backgroundColor= '#000')
    firebase.database().ref("selfCheck/").update({
      btStart: On1,
    });
  }, 10000);
};


document.getElementById("repStart").onclick = function () {  
  Ready();
  firebase.database().ref("reprocessing/").update({
    btStart: Off1,
  });

  setTimeout(function () {
    
    firebase.database().ref("reprocessing/").update({
      btStart: On1,
    });
    
  }, 10000);
  function countDown(secs,elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "Please wait for "+secs+" seconds";
    if(secs < 1) {
        clearTimeout(timer);
        element.innerHTML = '<h2>Countdown Complete!</h2>';
        element.innerHTML += '<a href="#">Click here now</a>';
    }
    secs--;
    var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
    countDown(100,"repStart");
}
};

$('.btn').on('click', function() {
  var $this = $(this);
$this.button('loading');
  setTimeout(function() {
     $this.button('reset');
 }, 8000);
});

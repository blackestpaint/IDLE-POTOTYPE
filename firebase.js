// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8IDqxfcLTrYpi-W-fHN1i48jcEY8V4kM",
    authDomain: "project2-bffb2.firebaseapp.com",
    databaseURL: "https://project2-bffb2.firebaseio.com",
    projectId: "project2-bffb2",
    storageBucket: "project2-bffb2.appspot.com",
    messagingSenderId: "370011909501"
  };
  firebase.initializeApp(config);

    var X = document.getElementById('X');
    var dbRef = firebase.database().ref().child('X');
    dbRef.on('value', snap => X.innerText = snap.val());
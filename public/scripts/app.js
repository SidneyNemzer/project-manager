/* global firebase */

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBIFKOyoH-nppj6LSe_-2BQQuMvXK76Kjk",
  authDomain: "sidneys-test-project.firebaseapp.com",
  databaseURL: "https://sidneys-test-project.firebaseio.com",
  storageBucket: "sidneys-test-project.appspot.com",
  messagingSenderId: "815410836640"
};
firebase.initializeApp(config);

/*
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.body.innerHTML += "<p style=\"color: green\">You are logged in :)</p>"
  } else {
    document.body.innerHTML += "<p style=\"color: red\">Hey! You need to login!</p>"
  }
})
*/
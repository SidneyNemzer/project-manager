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

// Locate some elements that we'll use later
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const loginButton = document.querySelector('#login')
const errorSpan = document.querySelector('#general-error')
const loadingSpinner = document.querySelector('#loading-spinner')

// Enables or disables the login button and loading spinner
function setLoadingState(state) {
  loadingSpinner.classList.toggle('is-active', state)
  loginButton.disabled = state
  
  if (state) {
    errorSpan.innerText = ''
  }
}

// Listen for the Login button getting clicked
loginButton.addEventListener('click', function() {
  
  setLoadingState(true)
  
  const email = emailInput.value
  const password = passwordInput.value
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(data) {
      if (firebase.auth().currentUser) {
        console.log('Logged in!')
        if (data) {
          console.log('Got some data too:')
          console.log(data)
        }
        window.location.assign('app.html')
      } else {
        console.log('login function completed, but not logged in?') 
      }
      setLoadingState(false)
    })
    .catch(function(error) {
      if (error) {
        console.log('An error occured while logging in :(')
        console.log(error)
        
        errorSpan.innerText = error.message
        errorSpan.classList.remove('hidden')
      }
      setLoadingState(false)
    })
})
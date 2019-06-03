var firebaseConfig = {
    apiKey: "AIzaSyDGmFisIcfl5sZWkr6ZkbCrcLV6PJ6iyko",
    authDomain: "tweek-landing-page.firebaseapp.com",
    databaseURL: "https://tweek-landing-page.firebaseio.com",
    projectId: "tweek-landing-page",
    storageBucket: "tweek-landing-page.appspot.com",
    messagingSenderId: "390537235783",
    appId: "1:390537235783:web:f4280e1da3485186"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference subscribers collection
var subscribersRef = firebase.database().ref('subscribers');

var doc = document.getElementById('subscribeForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  saveMessage(email);

  //Show success
  document.querySelector('.thanksPopUp').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.thanksPopUp').style.display = 'none';
  },3000);

  document.getElementById('subscribeForm').reset();

}

//Save to firebase
function saveMessage(email) {
  var newSubscribersRef = subscribersRef.push();
  newSubscribersRef.set({email:email});
}

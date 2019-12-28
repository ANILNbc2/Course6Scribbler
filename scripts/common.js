var signUpmodal = document.getElementById("signUpModal");
var signInmodal = document.getElementById("signInModal");

// Get the button that opens the modal
var signUpBtn = document.getElementById("signUp");
var signInBtn = document.getElementById("signIn");

// Get the <span> element that closes the modal
var signUpSpan = document.getElementsByClassName("close")[0];
var signInSpan = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
signUpBtn.onclick = function() {
  signUpmodal.style.display = "block";
}
signInBtn.onclick = function() {
  signInmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signUpSpan.onclick = function() {
  signUpmodal.style.display = "none";
}

signInSpan.onclick = function() {
  signInmodal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpmodal) {
    signUpmodal.style.display = "none";
  }
  if (event.target == signInmodal) {
    signInmodal.style.display = "none";
  }
}
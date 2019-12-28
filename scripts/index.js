var createPostmodal = document.getElementById("createPostModal");

// Get the button that opens the modal
var createPostBtn = document.getElementById("createPost");


// Get the <span> element that closes the modal
var createPostSpan = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
createPostBtn.onclick = function() {
  createPostmodal.style.display = "block";
}

createPostSpan.onclick = function() {
  createPostmodal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createPostmodal) {
    createPostmodal.style.display = "none";
  }
}

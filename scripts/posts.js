var postIdArr = ["postId-1",
"postId-2",
"postId-3",
"postId-4",
"postId-5"];
var authorName = ["Srishti Gupta", 
"Colby Fayock",
"Yazeed Bzadough",
"Cedd Burge",
"Srishti Gupta"
];
var contentTitle = ["‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
"What is linting and how can it save you time?",
"How to Get More Views on Your Tech Blog",
"How to write easily describable code",
"Everything you should know about ‘module’ & ‘require’ in Node.js"
];
var contentBody = ["Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.",
"One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.",
"If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.",
"When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.",
"Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."
];

var shouldRun=0;





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


function createPageFun(postId){
  alert(postId);
  alert(authorName.length);
  for(var i=0; i < authorName.length;i++){
    if(postId == postIdArr[i]){
      alert(authorName[i]);
      displayCanvas(i);
    }
  }
}

function displayCanvas(index){

}




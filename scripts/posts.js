// Setup initial variables
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

var likeCount = 0;

var editStatus=0;
var firstRun=0;


function createPageFun(postId){
  for(var i=0; i < authorName.length;i++){
    if(postId == postIdArr[i]){
      displayCanvas(i);
    }
  }
}

// Setup canvas for user displaying details of post selected in previous page
function displayCanvas(docVal){  
  index = docVal.substring(7);  
  var Canvas =       
      '<h4 id="contentTitle" style="display: block;">'+ contentTitle[index] + '</h4>' +
      '<div>'+
        '<input id="editContentTitle" type="text" value="'+ contentTitle[index] +'" style="display: none;" />'+
      '</div>' +
        '<div id="contentAuthor">' +
            '<p id="authorName">'+ authorName[index] +'</p>' +
            '<button id="editButton" onclick="onEditClick()">Edit <i class="fa fa-edit"></i></button>' +
        '</div>' +
        '<div id="editContent">'+
          '<textarea id="contentText" rows="5" border="thin">' + contentBody[index] + '</textarea>' +
        '</div>' +
        '<div id="likeSection">' +
            '<button id="likeSectionButton" onclick="onLikeClick()"><i class="fa fa-thumbs-up"></i> Like</button>' +
            '<p id="likeSectionText">Be the first one to like this post! </p>' +
        '</div>' +
        '<div id="commentSection">' +
            '<textarea id="commentArea">' +
            '</textarea>' +
            '<button id="commentButton" onClick="onCommentClick()">Comment</button>' +
        '</div>' +
        '<div>' +
            '<p id="commentsHeading"> All Comments</p>' +
        '</div>' +
        '<div id="allCommentsSection">' +
            
        '</div>';
  document.getElementById("displayCanvas").innerHTML = Canvas;
  document.getElementById('contentText').setAttribute('disabled', 'true');
  if(firstRun == 0){
    document.getElementById('contentText').style.border = "none";
    firstRun=1;
  }
  var trial = document.getElementById("displayCanvas");
}

// On clicking edit or save, update screen display.
function onEditClick(){
  // Check if button is set to edit or save.
  if(editStatus==0){
    // if edit is set, then update display and border for title and content 
    editStatus=1;
    var editButtonHtml ='Save <i class="fa fa-save"></i>';
    document.getElementById("editButton").innerHTML = editButtonHtml;
    document.getElementById("contentTitle").style.display = "none";
    document.getElementById("editContentTitle").style.display = "block";
    var updatedTitle = "UPDATED:" + document.getElementById('editContentTitle').value;
    document.getElementById('editContentTitle').value = updatedTitle;
    var contentText = "UPDATED: " + document.getElementById('contentText').value;

    document.getElementById('editContent').innerHTML =       '<textarea id="contentText" rows="5" style="border-style: solid; border-color:pink" >' + contentText + '</textarea>';
  
  }else{
    // if save is set, then update display and border for title and content 
    editStatus=0;
    var editButtonHtml ='Edit <i class="fa fa-edit"></i>';
    document.getElementById("editButton").innerHTML = editButtonHtml;
    var newTitle = document.getElementById('editContentTitle').value;
    var newContent = document.getElementById('contentText').value;
    document.getElementById("contentTitle").style.display = "block";
    document.getElementById("contentTitle").innerHTML = newTitle;
    document.getElementById("editContentTitle").style.display = "none";
    document.getElementById('contentText').setAttribute('disabled', 'true');
    document.getElementById('contentText').style.border = "none";
    document.getElementById('contentText').value=newContent;

  }
}

// On clicking like, update count
function onLikeClick(){
  likeCount = likeCount + 1;

  if(likeCount == 1){
    document.getElementById("likeSectionText").innerHTML = '1 person liked your post';
  }else{
    document.getElementById("likeSectionText").innerHTML = likeCount + ' people liked your post';
  }

}

// On typing comment and clicking comment button, update comment.
function onCommentClick(){
  var currentComments = document.getElementById("allCommentsSection").innerHTML;
  var newComment = document.getElementById("commentArea").value;
  document.getElementById("commentArea").value = '';
  document.getElementById("allCommentsSection").innerHTML = '<div class="allComment">' + newComment + '</div>' +  currentComments; 
}

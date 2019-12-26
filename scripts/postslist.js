var trashBtn = document.getElementsByClassName("trash-btn");
var length = trashBtn.length;
var deleteModal = document.getElementById("deleteModal");

var trashBtnArr=[];
for(var i=0;i<length;i++){
	trashBtn[i].onclick = function(){
		deleteModal.style.display = "block";	
	}
}

// var trashBtn1 = document.getElementById("firstPost");
// var trashBtn2 = document.getElementById("secondPost");
// var trashBtn3 = document.getElementById("thirdPost");
// var trashBtn4 = document.getElementById("forthPost");
// var trashBtn5 = document.getElementById("fifthPost");


// // var deleteModal = document.getElementById("deleteModal");


// trashBtn1.onclick = function() {
// 	deleteModal.style.display = "block";
// }

// trashBtn2.onclick = function() {
// 	deleteModal.style.display = "block";
// }

// trashBtn3.onclick = function() {
// 	deleteModal.style.display = "block";
// }

// trashBtn4.onclick = function() {
// 	deleteModal.style.display = "block";
// }

// trashBtn5.onclick = function() {
// 	deleteModal.style.display = "block";
// }


// alert("test alert");
// var trashBtnArr = [];
// var trash-btn = document.getElementsByClassName("trash-btn");
// var deleteModal = document.getElementById("deleteModal");

// alert("size of trash-btn array = " + trash-btn.length);


// for(var i=0;i<trash-btn.length;i++){
// 	trashBtnArr.push(trash-btn[i]);
// 	trashBtnArr[i].onclick = function(){
// 		deleteModal.style.display = "block";
// 	}
// }



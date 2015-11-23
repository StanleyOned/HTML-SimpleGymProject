var username = document.getElementById('name');
var something = document.getElementById('warning1');
var secondInput = document.getElementById('lastname');
var something2 = document.getElementById('warning2');
var email = document.getElementById('email');
var something3 = document.getElementById('warning3');
var options = document.getElementById('types');


function checkForInput() {

  if (username.value.length < 5) {
    something.textContent = "It needs to be at least 5 character long";

  } else if (username.value.length > 5 ){
    something.textContent = "";
  }
}

function selectBoxes() {
var el = document.getElementById('hey');
  if (options.value == "") {
    
    el.textContent = "Please Select the type of Membership you want";
    return true;
} else {

  el.textContent = "";
}

     return false;


} 
function checkForInput2() {


  if (secondInput.value.length < 5) {
    something2.textContent = "It needs to be at least 5 character long";

  } else if (secondInput.value.length > 5){
    something2.textContent = "";
  }
}
function checkForInput3() {


  if (email.value.length < 5) {
    something3.textContent = "It needs to be at least 5 character long";

  } else if (email.value.length > 5){
    something3.textContent = "";
  }
}



function checkTextArea() {

  var comment = document.getElementById('textArea');

  if (area.value.length < 5) {

    
    comment.textContent = "You need to write something dude!!!";
  } else if (area.value.length > 5 ) {

    comment.textContent = "";

  }
}
username.addEventListener('blur',checkForInput,false);
secondInput.addEventListener('blur',checkForInput2,false);
options.addEventListener('blur',selectBoxes,false);
area.addEventListener('blur',checkTextArea,false);

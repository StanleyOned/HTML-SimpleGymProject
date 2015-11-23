var email = document.forms['formOne']['email'].value;
var somethingAt = email.indexOf('@');
var dot = email.lastIndexOf('.');

function validateFormss() {

if (dot < 1 || dot<somethingAt +2 || dot + 2 > email.length) {

alert('not a valid email');
return false;
}
}

email.addEventListener('blur',validateFormss,false);
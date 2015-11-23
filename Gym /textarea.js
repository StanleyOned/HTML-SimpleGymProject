
var area = document.getElementById('text');
var radios = document.getElementsByName("male");
var pass = document.getElementById('password');
var checkBox = document.getElementById('checkBox');


function checkTextArea() {

	var comment = document.getElementById('textArea');

	if (area.value.length < 3) {

		
		alert("Write a Comment for us?");
	} 
}

function passwordStuff() {

	if (pass.value.length < 3) {

		alert('Your password has to be largen then 3 characters and contain numbers');
	}

}








pass.addEventListener('blur',passwordStuff,false);
area.addEventListener('blur',checkTextArea,false);
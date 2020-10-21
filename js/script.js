
// btn-outline-success
// Show Alert Modal onclick in any button


var danger = document.querySelector('.btn-danger');
var search = document.querySelector('.btn-outline-success');
var success = document.querySelectorAll('.btn-success');

for (var i = 0; i < success.length; i++) {
	success[i].setAttribute('data-toggle','modal');
	success[i].setAttribute('data-target','#exampleModal');
	// success[i].onclick = showMessage;
	success[i].onclick = returnFalse;
}

search.setAttribute('data-toggle','modal');
search.setAttribute('data-target','#exampleModal');
search.setAttribute('type','button');
search.onclick = returnFalse();

danger.setAttribute('data-toggle','modal');
danger.setAttribute('data-target','#exampleModal');
danger.onclick = returnFalse();


function returnFalse() {
	return false;
}
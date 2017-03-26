btn.addEventListener('click', function(e){
	var str = inpt.value;
	var res = str.split('').reverse.join('');
	result.innerHTML = res;
	e.preventDefault;
})
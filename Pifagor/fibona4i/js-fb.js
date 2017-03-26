/*function generateTable(parent){
function getFibonacciSequence(numberOfElements) {
	var a = [];
	var tr = document.createElement("div");
		tr.setAttribute("id","table-row");
	a[0] = 0;
	a[1] = 1;
	for (var i = 2; i <= numberOfElements; i++) {
		var td = document.createElement("div");
			td.setAttribute("id","table-cell");
		a[i] = a[i-1] + a[i-2];
		td.innerText = a[i];
		return tr.appendChild(td);	 
 }
}
	getFibonacciSequence(21);
	var table = document.getElementById("table");
	
	table.appendChild(tr);

	parent.appendChild(table);
}*/

function getFibonacciSequence(numberOfElements) {
	var a = [];
	a[0] = 0;
	a[1] = 1;
	for (var i = 0; i <= numberOfElements; i++) {
		a[i] = a[i-1] + a[i-2];
		document.write(i,' ');
		document.write(a[i], ', ');
		
 }
}
var btn = getElementsByTagName('button');

btn.addEventListener('click',function(e){
	var numberOfElements = n.value;
	getFibonacciSequence(numberOfElements);
	e.preventDefault();
})


function generateTable(parent) {
	var a = [];
for (var j = 1; j <= 9; j++) {
for (var i = 1;i <= 9;i++) { 
a.push((j*i).toString());
 }
 }
	
	var table = document.getElementById("table");
	counter = 0;

	for (i = 0; i < 9;i++) {
		var tr = document.createElement("div");
		tr.setAttribute("id","table-row");
		for (j = 0;j < 9;j++) {
			var td = document.createElement("div");
			td.setAttribute("id","table-cell");
			if (i === j) {
				td.style.backgroundColor="yellow";
			}
			if(i > j) {
				td.style.backgroundColor="green";
			}
			if(i < j) {
				td.style.backgroundColor="red";
			}
			td.innerText = a[counter];
			tr.appendChild(td);
			counter++;
			
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);
}
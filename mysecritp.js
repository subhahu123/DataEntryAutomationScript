var datTable = document.querySelectorAll('.table');

var length = datTable.length ;

var lengthRows = datTable[0].rows.length - 1

for(var i = 0 ; i < lengthRows ; i++) {

	for(var j = 0 ; j < length ; j = j + 2) {
	
		datTable[j+1].rows[i+1].cells[1].innerHTML = `<input type="text" value="${datTable[j].rows[i+1].cells[0].textContent}" name="fieldname[step1][]" class="fname" style="width:98%;">` ;
 		datTable[j+1].rows[i+1].cells[2].innerHTML = `<input type="text" value="${datTable[j].rows[i+1].cells[1].textContent}" name="fieldname[step1][]" class="fname" style="width:98%;">` ;
	}
}
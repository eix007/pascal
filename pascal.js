num = [];
num[0] = [1];
num[1] = [1,1];

var showbtn = document.getElementById('showbtn');
var div = document.getElementById('showpascal');
div.style.display='none';

function showhide() {
	if (div.style.display !== "none") {
		div.style.display = "none";
		showbtn.innerHTML = "Show Pascal's Triange";
	}
	else {
		div.style.display = "block";
		showbtn.innerHTML = "Hide Pascal's Triange";
	}
}

function Pascal(n){
	for (var row = 2; row < n; row++){
		num[row] = [1];
		for (var col = 1; col <= row -1; col++){
			num[row][col] = num[row-1][col] + num[row-1][col-1];
			num[row].push(1);
		}
	}
	return num;
	}
	for (var i = 0; i < Pascal(10).length; i++){
		document.write(Pascal(10)[i]+"<br>");
	}

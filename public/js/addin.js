console.log("test");
var counter=1;
var limit=10;
var textButton = document.getElementById("textButton");
var divstuff = document.getElementById("dynin");
console.log(divstuff);
textButton.addEventListener('click', function(){
		console.log("click listener");
		if (counter==limit) {
			alert('Maximum allowed boxes reached');
		}
		else {
			var newstuff=document.createElement('div');
			newstuff.innerHTML="<p><input type=\"text\" name=\"likes[]\"></p>";
			document.getElementById(divstuff.id).appendChild(newstuff);
			console.log(divstuff.id);
			counter++;
		}
	}
);

var counter2=1;
var limit2=10;
var textButton2 = document.getElementById("textButton2");
var divstuff2 = document.getElementById("dynin2");
console.log(divstuff2);
textButton2.addEventListener('click', function(){
		console.log("click listener");
		if (counter2==limit2) {
			alert('Maximum allowed boxes reached');
		}
		else {
			var newstuff2=document.createElement('div2');
			newstuff2.innerHTML="<p><input type=\"text\" name=\"allergies[]\"></p>";
			document.getElementById(divstuff2.id).appendChild(newstuff2);
			console.log(divstuff2.id);
			counter++;
		}
	}
);

var counter3=1;
var limit3=10;
var textButton3 = document.getElementById("textButton3");
var divstuff3 = document.getElementById("dynin3");
console.log(divstuff3);
textButton3.addEventListener('click', function(){
		console.log("click listener");
		if (counter3==limit3) {
			alert('Maximum allowed boxes reached');
		}
		else {
			var newstuff3=document.createElement('div3');
			newstuff3.innerHTML="<p><input type=\"text\" name=\"allergies[]\"></p>";
			document.getElementById(divstuff3.id).appendChild(newstuff3);
			console.log(divstuff3.id);
			counter++;
		}
	}
);

document.onload=function(){
	
}
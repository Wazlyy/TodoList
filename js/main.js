var list = document.querySelector('ul');
list.addEventListener('click', function(chckd) {
    if (chckd.target.tagName === 'LI') {
        chckd.target.classList.toggle('checked');
    }
});

var newnode = document.getElementsByTagName("li");
var i;
for (i = 0; i < newnode.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	newnode[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

function addLI() {
	var li = document.createElement("li");
	var inputtext = document.getElementById("inputzone").value;
	var t = document.createTextNode(inputtext);
	li.appendChild(t);
	if (inputtext === '') {
		alert("Tu n'a rien écrit !");
	} else {
        document.getElementById("ullist").appendChild(li);
	}
	

	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}


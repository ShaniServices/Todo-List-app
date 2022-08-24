var button = document.getElementById("button");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	// creating li
	var li = document.createElement("li");
	var i = document.createElement("i");
	i.classList.add("fa-solid", "fa-xmark");
	li.classList.add("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(i);
	ul.appendChild(li);
	input.value = "";

	// Deleting li
	i.addEventListener("click", function() {
		ul.removeChild(li);
	})

	// Toggling Element
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	});
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
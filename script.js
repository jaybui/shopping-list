var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement(ev) {
	var divList = document.createElement("div");
	var li = document.createElement("li");
	var buttonDel = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	divList.classList.add("task");
	buttonDel.classList.add("del");
	buttonDel.innerHTML="Delete";
	divList.appendChild(li);
	divList.appendChild(buttonDel);
	ul.appendChild(divList);
	input.value = "";
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

function taskDone(ev){
	if (ev.target.tagName === "LI") {
		ev.target.classList.toggle("done");
	}
}

function taskDelete(ev){
	if (ev.target.className === "del") {
		ev.target.parentElement.remove();
	}
}

function listFunction(ev){
	taskDone(ev);
	taskDelete(ev);
	console.log(event.target.tagName)
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", listFunction);
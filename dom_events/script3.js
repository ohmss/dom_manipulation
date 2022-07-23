var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function addButtonToList() {
	var btn = document.createElement("button");
	var btnName = document.createTextNode("Delete!");
	btn.appendChild(btnName);
	btn.addEventListener("click", removeListAfterClick);
	return btn;
}
// Setup the Delete buttons / Listeners for the existing list elements in the HTML file
for (let i = 0; i < listItems.length; i++) {	
	listItems[i].appendChild(addButtonToList());
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	// Create the Delete button / Listener and add it next to the list element
	var btn = addButtonToList();
	li.appendChild(btn);

	// Append the new list element in the unordered list.
	ul.appendChild(li);
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

function removeListAfterClick(event) {
	event.target.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", event => {
	event.target.classList.toggle("done");
});

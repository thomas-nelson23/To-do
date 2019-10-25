const itemInput = document.querySelector("#item");
const addItemButton = document.querySelector("#addItem");
const itemsList = document.querySelector(".collection-items");

const clearButton = document.querySelector("#clear");
const clearList = document.querySelector("#clear");

let buttonId;

let idCounter = 1;

loadEventListeners();

function loadEventListeners() {
  addItemButton.addEventListener("click", addItem);
  clearList.addEventListener("click", clear);
}

//clears entire list
function clear(event) {
  itemsList.innerHTML = "";
  event.preventDefault();
  idCounter = 1;
}

function addItem(event) {
  debugger;
  if (itemInput.value === "") {
    alert("Please type ino the text box!");
  }

  const itemLi = document.createElement("li");
  const removeButton = document.createElement("button");

  removeButton.addEventListener("click", () => {
    itemsList.removeChild(itemLi);
  });

  removeButton.className = idCounter;

  itemLi.className = idCounter;
  itemLi.innerText = itemInput.value;

  buttonId = removeButton.className;


  itemsList.appendChild(itemLi);
  itemLi.appendChild(removeButton);

  removeButton.innerText = "x";

  itemInput.value = "";

  event.preventDefault();

  idCounter++;
}


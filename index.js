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

function clear(event) {
  itemsList.innerHTML = "";
  event.preventDefault();
  idCounter = 1;
}

function addItem(event) {
  if (itemInput.value === "") {
    alert("Please type ino the text box!");
  }

  const itemLi = document.createElement("li");
  const butt = document.createElement("button");

  butt.addEventListener("click", itemClear);

  butt.className = idCounter;

  itemLi.className = idCounter;
  itemLi.innerText = itemInput.value;

  buttonId = butt.className;

  itemsList.appendChild(itemLi);
  //   itemList.appendChild(button);
  itemLi.appendChild(butt);
  butt.innerText = "x";

  itemInput.value = "";

  event.preventDefault();

  idCounter++;
}

function itemClear() {
  //console.log(li.className);
  clearNumber = document.querySelector("li", clearNumber.className === 1);

  //clearNumber = clearNumber.className;
  console.log(clearNumber);
}
document.select;

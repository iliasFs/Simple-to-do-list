const form = document.querySelector("#new__item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item__input");

//when i submit the form add a new element

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value === "") return;
  // 1. Create a new item
  const listItem = document.createElement("div");
  const listItemPara = document.createElement('p')
  listItemPara.innerText = input.value; // We give the list item the value of input
  listItem.classList.add("list__item"); // We add a div with the class list__item
  const listButton = document.createElement("button");
  listButton.innerText = "Remove"; // We give the button the text "Add to list"
  listButton.classList.add("list__button");
  // 2. Add that item to the list
  list.appendChild(listItem);
  listItem.appendChild(listItemPara)
  listItem.appendChild(listButton);
  // 3.remove input value
  input.value = "";
  //delete list item from list if clicked

  listButton.addEventListener("click", (event) => {
    listItem.remove();
    listButton.remove();
  });
});

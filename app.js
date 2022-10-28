// select all elements

const form = document.querySelector("#new__item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item__input");

//when i submit the form add a new element

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // 1. Create a new item

  const listItem = document.createElement("div");
  listItem.innerText = input.value; // We give the list item the value of input
  listItem.classList.add("list__item"); // We add a div with the class list__item
  console.log(listItem);

  // 2. Add that item to the list

  
});

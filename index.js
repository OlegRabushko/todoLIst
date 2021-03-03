const textInput = document.querySelector(".text__input");
const addBtn = document.querySelector(".add__btn");
const list = document.querySelector(".notes__list");
const checkbox = document.querySelector(".checkbox__input");

let todoList = [];

if (localStorage.getItem("Notes")) {
  todoList = JSON.parse(localStorage.getItem("Notes"));
  displayNotes();
}

addBtn.onclick = (e) => {
  e.preventDefault();
  if (!(textInput.value === "")) {
    todoList.push(textInput.value);
    localStorage.setItem("Notes", JSON.stringify(todoList));
    displayNotes();
    textInput.value = "";
  }
};

function displayNotes() {
  let displayNote = "";
  todoList.map((el, i) => {
    displayNote += `
      <div class="one__note">
        <div class="note__text">${i + 1}: ${el}</div>
        <button onclick='deleteNote(${i})' class ='delete__btn'><i class="far fa-times-circle"></i></button>
      </div>
      `;
  });
  list.innerHTML = displayNote;
}
function deleteNote(index) {
  let getLS = localStorage.getItem("Notes");
  todoList = JSON.parse(getLS);
  todoList.splice(index, 1);
  localStorage.setItem("Notes", JSON.stringify(todoList));
  displayNotes();
}

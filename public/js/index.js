// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDX6809mYc-5DINoa6KLyPS4Ql1HV0W4rE",
  authDomain: "todolist-hk.firebaseapp.com",
  projectId: "todolist-hk",
  storageBucket: "todolist-hk.appspot.com",
  messagingSenderId: "97699539833",
  appId: "1:97699539833:web:4273d1cfcfc3c393555da8",
});

// References
const iptNewTodo = document.getElementById("ipt-new-todo");
const btnAddTodo = document.getElementById("btn-add-todo");
const ulListTodo = document.getElementById("list-todo");
const btnDeleteTodo = document.getElementsByClassName("btn-delete-todo");
const pInfoTodoList = document.getElementById("p-info-todo-list");
const btnClearAll = document.getElementById("btn-clear-all");

btnAddTodo.onclick = () => {
  if (iptNewTodo.value.length !== 0) {
    localStorage.setItem(localStorage.length++, iptNewTodo.value);
    alert("Tarefa criada com sucesso!");
    location.reload();
  } else {
    alert(
      "O campo para adicionar tarefa está vazio, preencha-o e tente novamente!"
    );
  }
};

if (localStorage.length > 0) {
  for (let index = 0; index < localStorage.length; index++) {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const btn = document.createElement("button");
    const i = document.createElement("i");

    ul.setAttribute("class", "item-list-todo");
    ul.onmouseenter = () => {
      btn.style.display = "block";
    };
    ul.onmouseleave = () => {
      btn.style.display = "none";
    };
    li2.innerHTML = localStorage.getItem(localStorage.key(index));
    btn.setAttribute("class", "btn-delete-todo");
    btn.setAttribute("value", localStorage.key(index));
    i.setAttribute("class", "fa fa-trash");

    ulListTodo.appendChild(li);
    li.appendChild(ul);
    ul.appendChild(li2);
    ul.appendChild(li3);
    li3.appendChild(btn);
    btn.appendChild(i);

    pInfoTodoList.innerHTML = localStorage.length;
  }
}

for (const btn of btnDeleteTodo) {
  btn.onclick = () => {
    localStorage.removeItem(btn.value);
    location.reload();
  };
}

btnClearAll.onclick = () => {
  if (localStorage.length !== 0) {
    localStorage.clear();
    location.reload();
  } else {
    alert("Você não possuí tarefas para excluir!");
    location.reload();
  }
};

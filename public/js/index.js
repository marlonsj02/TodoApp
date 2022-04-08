// Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDX6809mYc-5DINoa6KLyPS4Ql1HV0W4rE",
  authDomain: "todolist-hk.firebaseapp.com",
  projectId: "todolist-hk",
  storageBucket: "todolist-hk.appspot.com",
  messagingSenderId: "97699539833",
  appId: "1:97699539833:web:4273d1cfcfc3c393555da8",
});

// References
const pMsgCallback = document.getElementById("p-msg-callback");
const iptNewTodo = document.getElementById("ipt-new-todo");
const btnAddTodo = document.getElementById("btn-add-todo");
const ulListTodo = document.getElementById("list-todo");
const btnDeleteTodo = document.getElementsByClassName("btn-delete-todo");
const pInfoTodoList = document.getElementById("p-info-todo-list");
const btnClearAll = document.getElementById("btn-clear-all");

// Add New Task Button Event
btnAddTodo.onclick = () => {
  if (iptNewTodo.value.length !== 0) {
    localStorage.setItem(localStorage.length + 1, iptNewTodo.value);
    pMsgCallback.style.display = "block";
    pMsgCallback.setAttribute("class", "bg-success");
    pMsgCallback.innerHTML = "Tarefa criada com sucesso!";
    setTimeout(() => {
      pMsgCallback.style.display = "none";
      location.reload();
    }, 1000);
  } else {
    pMsgCallback.style.display = "block";
    pMsgCallback.setAttribute("class", "bg-danger");
    pMsgCallback.innerHTML =
      "Não foi possível criar a tarefa, atualize a página e tente novamente!";
    setTimeout(() => {
      pMsgCallback.style.display = "none";
      location.reload();
    }, 1500);
  }
};

// Display of Created Tasks
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

// Delete Task Button Event
for (const btn of btnDeleteTodo) {
  btn.onclick = () => {
    localStorage.removeItem(btn.value);
    pMsgCallback.style.display = "block";
    pMsgCallback.setAttribute("class", "bg-success");
    pMsgCallback.innerHTML = "Tarefa excluída com sucesso!";
    setTimeout(() => {
      pMsgCallback.style.display = "none";
      location.reload();
    }, 1000);
  };
}

// Delete All Tasks Button Event
btnClearAll.onclick = () => {
  if (localStorage.length !== 0) {
    localStorage.clear();
    pMsgCallback.style.display = "block";
    pMsgCallback.setAttribute("class", "bg-success");
    pMsgCallback.innerHTML = "Todas as tarefas foram excluídas com sucesso!";
    setTimeout(() => {
      pMsgCallback.style.display = "none";
      location.reload();
    }, 1000);
  } else {
    pMsgCallback.style.display = "block";
    pMsgCallback.setAttribute("class", "bg-danger");
    pMsgCallback.innerHTML = "Você não possuí tarefas para excluir!";
    setTimeout(() => {
      pMsgCallback.style.display = "none";
      location.reload();
    }, 1500);
  }
};

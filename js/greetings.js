const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const todoForm = document.querySelector('#todo-form')

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginnSubmit(event) {
	event.preventDefault();
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings(username);
}

// 저장된 username 유/무에 따라 보여지는 item 바꾸기

function paintGreetings(username) {
	greeting.innerText = `Have a nice day! ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	todoForm.classList.remove(HIDDEN_CLASSNAME)
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginnSubmit);
} else {
	paintGreetings(savedUsername);
}

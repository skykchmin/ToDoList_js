const form = document.querySelector(".js-form"),
    input = document.querySelector("input");
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN ="showing";

function askForName(){ //user가 없으면 이름을 요청한다.
    form.classList.add(SHOWING_CN);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser); //user가 있으면 동작한다
    }
}

function init(){
    loadName();
}

init();



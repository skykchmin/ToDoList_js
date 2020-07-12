const form = document.querySelector(".js-form"),
    input = document.querySelector("input");
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN ="showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){ 
    event.preventDefault(); //event가 발생하면 페이지가 새로고침 되는데 새로고침 되는 이벤트를 막는다
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){ //user가 없으면 이름을 요청한다.
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit); //form을 처리
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // form을 지우고
    greeting.classList.add(SHOWING_CN); // greeting을 보여준다
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



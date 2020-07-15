const toDoform = document.querySelector(".js-toDoForm"), //querySelecotor
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode; //버튼의 부모노드인 li를 찾아 삭제하기 위해 
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){ //filter는 array의 모든 아이템을 통해 함수를 실행하고 true인 아에템들만 가지고 새로운 array를 만든다. 
        
        return toDo.id !== parseInt(li.id); // Int로 바꾸는 이유: li의 id는 string이여서 
    });
    toDos = cleanToDos
    saveToDos();
}

function saveToDos(){ //toDos를 가져와서 로컬에 저장해야한다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //자바스크립트 객체를 string으로 바꿔준다 js는 local에 모든 것을 string으로 저장 
}
function paintToDo(text){
    const li = document.createElement("li"); //html 태그를 만든다
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    const newID = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span); //father의 element에 추가
    li.appendChild(delBtn);
    delBtn.addEventListener("click", deleteTodo);
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    };
    toDos.push(toDoObj); // 빈 array에 추가
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value=""; // 엔터입력시 빈칸
}

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);

    if(loadedtoDos !== null){ //계속 할일이 적혀있을거기 때문에 else는 필요가 없음
        const parsedToDos = JSON.parse(loadedToDos); //string을 다시 객체형태로 
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        }); // array에 담겨있는것만큼 함수를 실행시켜준다
    }
}


function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit)
}

init();
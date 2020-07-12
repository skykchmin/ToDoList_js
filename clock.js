const clockContainer = document.querySelector(".js-clock"), // .js-clock이라는 클래스를 선택한다
    clockTitle = clockContainer.querySelector("h1"); // 자식의 요소를 선택한다

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000); //첫번쨰 인자는 함수, 두번쨰는 시간간격 milliseconds 기준
}

init();
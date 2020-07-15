const dateContainer = document.querySelector(".js-date"),
dateTitle = document.querySelector("h2");


function getdate(){
    const date = new Date();
    const monthtime = date.getMonth() + 1;
    const datetime = date.getDate();

    dateTitle.innerText = `${monthtime}월 ${datetime}일`;
}

function init(){
    getdate();
}

init();
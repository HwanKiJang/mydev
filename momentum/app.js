const title = document.querySelector("div.hello:first-child h1");

console.log(title);

function handleTitleClick(){
    console.log("title was clicked!");
}

title.addEventListener("click",handleTitleClick);
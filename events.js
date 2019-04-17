var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var button = document.querySelector("button");
var lis = document.querySelectorAll(" ul > li");
var toDos = document.querySelectorAll("ol > li");
h1.addEventListener("click", changeBackground);
h2.addEventListener("click", changeFontColor);
button.addEventListener("click", buttonAlert);
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "#dd0";
    });
}
function changeBackground() {
    document.querySelector("body").style.background = "#a9a9a9";
}
function changeFontColor() {
    h2.style.color = "#00f";
}
function buttonAlert() {
    alert("I TOLD YOU DON'T CLICK THE BUTTON!!");
}
for(var i = 0; i < toDos.length; i++) {
    toDos[i].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });
    toDos[i].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });
    toDos[i].addEventListener("click", function() {
        this.classList.toggle("completed");
    });
}
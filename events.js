var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var button = document.querySelector("button");
h1.addEventListener("click", () => {
    document.querySelector("body").style.background = "red";
});
h2.addEventListener("click", () => {
    h2.style.color = "blue";
});
button.addEventListener("click", () => {
    alert("I TOLD YOU DON'T CLICK THE BUTTON!!");
});
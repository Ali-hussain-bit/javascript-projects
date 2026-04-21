let darktheme = document.getElementById("dark")
let lighttheme = document.getElementById("light")
let body = document.querySelector("body")
let span = document.querySelector("span")
function dark() {
    body.style.background = "black";
    body.style.color = "white";
    span.style.color = "white";
}
function light() {
    body.style.background = "white";
    body.style.color = "black";
}

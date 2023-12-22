var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var h2 = document.getElementById("h2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

text1.addEventListener("keyup",(e) => {
    text2.innerHTML = text1.value;
});

btn1.addEventListener("click", (e) => {
    text2.className = "ch1";
    h2.innerHTML = "Font Name : " + btn1.innerHTML;
});

btn2.addEventListener("click", (e) => {
    text2.className = "ch2";
    h2.innerHTML = "Font Name : " + btn2.innerHTML;
});

btn3.addEventListener("click", (e) => {
    text2.className = "ch3";
    h2.innerHTML = "Font Name : " + btn3.innerHTML;
});

btn4.addEventListener("click", (e) => {
    text2.className = "ch4";
    h2.innerHTML = "Font Name : " + btn4.innerHTML;
});
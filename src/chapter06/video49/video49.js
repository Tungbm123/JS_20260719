console.log("Video 49")

const element = document.getElementById("username");

//Truyền vào CSS Selector.
//có thể truyền #id, .class, tên thẻ span, div, hoặc "div span"- thẻ span trong thẻ div
const myDiv = document.querySelector(".tungbm");

//Tra ve 1 mang cac phan tu co class la .tungbm
const myQuerySelectorAll = document.querySelectorAll(".tungbm");

console.log(element);
console.log(myDiv);
console.log(myQuerySelectorAll);
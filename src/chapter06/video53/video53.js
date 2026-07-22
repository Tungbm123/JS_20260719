console.log("Video 53")
const myBtnElement = document.getElementById("myBtn");

const myTextElement = document.getElementById("myText");

const backBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
    console.log("click me");
    myTextElement.style.color = "red";
    myTextElement.style.backgroundColor = "green";

    //Class list: add
    myBtnElement.classList.add("tungbm-add-class");
})


backBtnElement.addEventListener("click", () => {
    console.log("click me");
    myTextElement.style.color = "black";
    myTextElement.style.backgroundColor = "unset";

    //Class list: remove
    myBtnElement.classList.remove("tungbm-add-class");


})


console.log(myBtnElement, myTextElement, backBtnElement)
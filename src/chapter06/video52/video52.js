console.log("Video 52")

const myBtnElement = document.getElementById("myBtn");

const myTextElement = document.getElementById("myText");

let clickCount = 0;
myBtnElement.addEventListener("click", () => {
    clickCount++
    myTextElement.innerHTML = `<h1>clicked ${clickCount} times</h1>`;    
});

console.log(myBtnElement, myTextElement);
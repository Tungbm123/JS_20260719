console.log("Video 55")
const btn = document.getElementById("submitBtn");

const input = document.getElementById("name");

const prev = document.getElementById("prev");

const prevName = localStorage.getItem("key1")
prev.innerText = prevName;

btn.addEventListener("click", () => {
    localStorage.setItem("key1", input.value);
    document.getElementById("message").innerHTML = `<b>${input.value}</b>`
    // alert(input);
})
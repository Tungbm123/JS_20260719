console.log("lab04")

const userName = "hoidanit@gmail.com"
const pw = 123456;

const inputUserName = document.getElementById("inputusername");

const inputPW = document.getElementById("inputpassword");

const login = document.getElementById("loginBtn");

login.addEventListener("click", () => {
    console.log(inputUserName.value, inputPW.value);

    if (userName === inputUserName.value && pw == inputPW.value) {
        alert("dang nhap thanh cong");
        window.location.href = "/Users/buitung/Documents/JS/src/lab04/success.html";
    } else {
        alert("Tai khoan hoac mat khau sai");
        inputUserName.style.borderColor = "red";
        inputPW.style.borderColor = "red";
    }
})


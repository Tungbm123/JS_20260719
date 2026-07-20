console.log("video 28")

function greeting() {
    console.log("hello");
}

greeting();

function sum(a, b) {
    return a + b;
}

console.log(sum(4, 5));

let numb1 = Number(prompt("Nhập số thứ nhất:"));
let numb2 = Number(prompt("Nhập số thứ hai:"));

function sum2(a, b) {
    a = numb1;
    b = numb2;
    let sum = a + b;

    console.log("Tổng =", sum);
    alert("Tổng = " + sum);
}

sum2();

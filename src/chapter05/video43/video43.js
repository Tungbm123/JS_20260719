console.log("video 43")

//Lap object su dung for...in va for..of

const sv1 = {
    username: "Tungbm123",
    score: 9.6
}

const sv2 = {
    username: "Giang Hoang Thu",
    score: 5
}

const sv3 = {
    username: "Bui Hoang The Vy",
    score: 10,
    address: "Viet Nam"
}

const sinhVien = [sv1,sv2,sv3]; 
console.log(">>> check sinhvien: ", sinhVien);

//for in lay ra thuoc tinh (key)
for (let key in sv3){
    console.log(key, sv3[key]);
}

console.log("=============")
//for of lay ra value
for(let value of Object.values(sv3)){
    console.log(value);
}


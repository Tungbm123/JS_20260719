console.log("Video 40")
//Phuong thuc map() duoc dung de duyet qua tung phan tu trong mang, tao ra 1 mang moi ma moi phan tu la ket qua bien doi cua phan tu tuong ung trong mang ban dau
//map ko thya doi mang goc

const scores = [10,8,9,7,8,5,10];

scores.forEach((value,index) => {
    console.log("index = ", index, "value = ", value);
})

const newScores = scores.map((value,index) => {
    return value*2;
})

console.log("scores = ",newScores);
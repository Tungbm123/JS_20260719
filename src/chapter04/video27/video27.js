console.log("video 27")

//score: Gioi, kha, trung binh, yeu

const score = 5;
switch (true) {
    case (score >= 8 && score <=10):
        console.log("Gioi");        
        break;
    case (score >= 6 && score < 8):
        console.log("kha")
        break;
    case (score >= 4 && score <6):
        console.log("trung binh")
        break;
    default:
        console.log("yeu");
}
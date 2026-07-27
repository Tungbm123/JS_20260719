console.log("Video 62")

// console.log("1")

// //async
// setTimeout(() => {
//     console.log("2")
// }, 5000);

// console.log("3")

const myPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("1")
        setTimeout(() => {
            console.log("2 with promise")
            //return
            resolve("Tungbm 123")
        }, 2000);
    })
}

console.log("============")
myPromise().then(data => {
    console.log("data: ", data)
    console.log("3")
})
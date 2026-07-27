console.log("Video 65")

const greeting = (name, tungbm) =>{
    console.log("Xin chao: ", name)
    tungbm();
}

const hello = () => {
    console.log("learn callback...")
}

greeting("Learning", hello);
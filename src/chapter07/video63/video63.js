console.log("video 63")

//fetch 
const temp = fetch("http://localhost:8000/blogs");

const d = temp
    .then(res => res.json())
    .then(data => console.log(data));

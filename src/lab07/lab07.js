console.log("lab 07")

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();

    //insert data to html
    const tbody = document.querySelector("#blogs tbody");

    if (data && data.length) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><Button>Delete</Button></td>
            </tr>
            `
        })
    }
}
const addNewRowToEnd = (blog) => {
    const tableBody = document.querySelector('#blogs tbody');

    //tao phan tu row moi
    const newRow = document.createElement('tr');

    //gan HTML cho row
    newRow.innerHTML = `
     <td>${blog.id}</td>
                            <td>${blog.title}</td>
                            <td>${blog.author}</td>
                            <td>${blog.content}</td>
                            <td><Button>Delete</Button></td>
    
                           
     `

    //them dong vao cuoi table
    tableBody.appendChild(newRow);
}

const handleAddNewBlog = () => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const content = document.getElementById("content");

    const saveBlogBtn = document.getElementById("saveBlog");

    saveBlogBtn.addEventListener("click", async () => {
        console.log(title.value, author.value, content.value);

        //call api to create a new blog
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const data = await rawResponse.json();
        addNewRowToEnd(data);

        console.log("Phan hoi API: ", data)
    })


}

fetchBlogs();
handleAddNewBlog();
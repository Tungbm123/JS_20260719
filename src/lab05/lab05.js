console.log("Lab 05");

const fetchData = async () => {
    try {
        const res = await fetch("http://localhost:8000/users");
        const data = await res.json();

        const tbody = document.querySelector("#users tbody");

        // Xóa dữ liệu mẫu đang có
        tbody.innerHTML = "";

        data.forEach(user => {
            tbody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>
            `;
        });
    } catch (error) {
        console.log("Lỗi lấy dữ liệu:", error);
    }
};

fetchData();
const saveBtn = document.getElementById("btn");
localStorage.setItem("todos", JSON.stringify([]));

    saveBtn.addEventListener("click", () => {
        const input = document.getElementById("input").value;

        const user = {
            id: crypto.randomUUID(), // Sinh ID ngẫu nhiên
            name: input
        };

        // Lấy dữ liệu cũ từ localStorage
        const users = JSON.parse(localStorage.getItem("todos")) || [];

        // Thêm object mới vào mảng
        users.push(user);

        // Lưu lại vào localStorage
        localStorage.setItem("todos", JSON.stringify(users));

        console.log(users);
    });
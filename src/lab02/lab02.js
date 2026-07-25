const diemToan = 9;
const diemVan = 8;
const diemAnh = 1;

const tinhTrungBinh = (a, b, c) => {
    return (a + b + c) / 3
}

const diemTB = tinhTrungBinh(diemToan, diemAnh, diemVan);

let xepLoai = (diemTB) => {
    if (diemTB >= 9) {
        return "Xuat sac";
    } else if (diemTB >= 8 && diemTB < 9) {
        return "Gioi"

    } else if (diemTB >= 6.5 && diemTB < 8) {
        return "Kha"
    } else {
        return "Trung Binh"
    }
}

console.log(`
    Diem Trung binh: ${diemTB}
    Xep Loai: ${xepLoai}

`)
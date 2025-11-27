// 1. Tính tổng từ 1 đến 100.
let total = 0;
for (let i = 1; i <= n; i++) {
    total += i;
}

console.log(total);

// 2. In bảng cửu chương từ 2 đến 9.
for (let a = 2; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
        console.log(`${a} x ${b} = ${a * b}`);
        // console.log(a + "x" + b + "=" + (a * b));
    }
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
const arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
}
console.log(arr);
// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
//     user1@example.com, user2@example.com, ..., user10@example.com).
for (let i = 1; i <= 10; i++) {
    console.log("user" + i + "@example.com");
    // console.log(`user${i}@example.com`);
}

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
// anh ko hieu object cua mang la ntn, nho em giai thich them

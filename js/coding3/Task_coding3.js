// Dữ liệu 1
const diemDolphins1 = [96, 108, 89];
const diemKoalas1 = [88, 91, 110];

// Tính điểm trung bình của mỗi đội
const tinhDiemTrungBinh = (diem) => diem.reduce((tong, diemHienTai) => tong + diemHienTai, 0) / diem.length;

const diemTrungBinhDolphins1 = tinhDiemTrungBinh(diemDolphins1);
const diemTrungBinhKoalas1 = tinhDiemTrungBinh(diemKoalas1);

// So sánh điểm trung bình và in kết quả
if (diemTrungBinhDolphins1 > diemTrungBinhKoalas1) {
    console.log(`Dolphins chiến thắng với điểm trung bình là ${diemTrungBinhDolphins1.toFixed(2)}!`);
} else if (diemTrungBinhKoalas1 > diemTrungBinhDolphins1) {
    console.log(`Koalas chiến thắng với điểm trung bình là ${diemTrungBinhKoalas1.toFixed(2)}!`);
} else if (diemTrungBinhDolphins1 === diemTrungBinhKoalas1) {
    console.log(`Trận hòa với cả hai đội có điểm trung bình là ${diemTrungBinhDolphins1.toFixed(2)}!`);
}

console.log('---'); 
// Bonus 1: Điểm tối thiểu 100
const diemToiThieu = 100;

const laNguoiChienThang = (diemTrungBinh) => diemTrungBinh >= diemToiThieu;

if (diemTrungBinhDolphins1 > diemTrungBinhKoalas1 && laNguoiChienThang(diemTrungBinhDolphins1)) {
    console.log(`Dolphins chiến thắng với điểm trung bình là ${diemTrungBinhDolphins1.toFixed(2)}!`);
} else if (diemTrungBinhKoalas1 > diemTrungBinhDolphins1 && laNguoiChienThang(diemTrungBinhKoalas1)) {
    console.log(`Koalas chiến thắng với điểm trung bình là ${diemTrungBinhKoalas1.toFixed(2)}!`);
} else if (diemTrungBinhDolphins1 === diemTrungBinhKoalas1 && laNguoiChienThang(diemTrungBinhDolphins1) && laNguoiChienThang(diemTrungBinhKoalas1)) {
    console.log(`Trận hòa với cả hai đội có điểm trung bình là ${diemTrungBinhDolphins1.toFixed(2)}!`);
} else {
    console.log('Không đội nào giành được cúp.');
}

console.log('---'); 

// Bonus 2: Điểm tối thiểu áp dụng cho trận hòa
const diemDolphinsBonus2 = [97, 112, 101];
const diemKoalasBonus2 = [109, 95, 106];

const diemTrungBinhDolphinsBonus2 = tinhDiemTrungBinh(diemDolphinsBonus2);
const diemTrungBinhKoalasBonus2 = tinhDiemTrungBinh(diemKoalasBonus2);

if (diemTrungBinhDolphinsBonus2 > diemTrungBinhKoalasBonus2 && laNguoiChienThang(diemTrungBinhDolphinsBonus2)) {
    console.log(`Dolphins chiến thắng với điểm trung bình là ${diemTrungBinhDolphinsBonus2.toFixed(2)}!`);
} else if (diemTrungBinhKoalasBonus2 > diemTrungBinhDolphinsBonus2 && laNguoiChienThang(diemTrungBinhKoalasBonus2)) {
    console.log(`Koalas chiến thắng với điểm trung bình là ${diemTrungBinhKoalasBonus2.toFixed(2)}!`);
} else if (diemTrungBinhDolphinsBonus2 === diemTrungBinhKoalasBonus2 && laNguoiChienThang(diemTrungBinhDolphinsBonus2) && laNguoiChienThang(diemTrungBinhKoalasBonus2)) {
    console.log(`Trận hòa với cả hai đội có điểm trung bình là ${diemTrungBinhDolphinsBonus2.toFixed(2)}!`);
} else {
    console.log('Không đội nào giành được cúp.');
}

// Dữ liệu 1
const markMass1 = 78; // kg
const markHeight1 = 1.69; // m
const johnMass1 = 92; // kg
const johnHeight1 = 1.95; // m

// Tính BMI cho Mark và John
const markBMI1 = markMass1 / (markHeight1 ** 2);
const johnBMI1 = johnMass1 / (johnHeight1 ** 2);

// So sánh BMI và in thông báo
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else if (johnBMI1 > markBMI1) {
    console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI1.toFixed(2)})!`);
}

console.log('---'); // Để phân cách giữa dữ liệu
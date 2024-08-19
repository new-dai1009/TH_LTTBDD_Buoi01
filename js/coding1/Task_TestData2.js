// Dữ liệu 2
const markMass2 = 95; // kg
const markHeight2 = 1.88; // m
const johnMass2 = 85; // kg
const johnHeight2 = 1.76; // m

// Tính BMI cho Mark và John
const markBMI2 = markMass2 / (markHeight2 ** 2);
const johnBMI2 = johnMass2 / (johnHeight2 ** 2);

// So sánh BMI
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log('Data 2:');
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI2}`);
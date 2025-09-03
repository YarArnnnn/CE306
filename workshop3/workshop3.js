// workshop 3.1
let score = 85;
if (score >= 80) {
  console.log("workshop1 grade A");
}
if (score <= 79 && score >= 70) {
  console.log("workshop1 grade B");
}
if (score <= 69 && score >= 60) {
  console.log("workshop1 grade C");
}
if (score <= 59 && score >= 50) {
  console.log("workshop1 grade D");
}
if (score <= 49) {
  console.log("workshop1 grade F");
}
// workshop3.2
let productPrice = 1000;
let discountPer = 10;
let discounted = (productPrice * discountPer) / 100;
let tumniem = 50;
let finalPrice = 0;

if (discounted <= 0) {
  finalPrice = 0;
  console.log("workshop2 ราคา:", finalPrice);
} else if (discounted <= 500) {
  finalPrice = discounted + tumniem;
  console.log("workshop2 ราคา (รวมค่าจัดส่ง):", finalPrice);
} else if (discounted > 500) {
  finalPrice = discounted - (discounted * 10) / 100;
  console.log("workshop2 ราคา (ลดเพิ่ม 10%):", finalPrice);
}

// workshop3.3
let students = [
  { name: "alice", grade: "A" },
  { name: "bob", grade: "B" },
  { name: "Tom", grade: "C" },
];

students.forEach((student, index) => {
  console.log(
    `Student [${index}]: Name: ${student.name}, Grade: ${student.grade}`
  );
});

function showStudentCount() {
  console.log(`Total student: ${students.length}`);
}

showStudentCount();

// workshop3.4
let product = [
  { price: 200, discount: 10 },
  { price: 150, discount: 5 },
  { price: 300, discount: 20 },
  { price: 100, discount: 15 },
  { price: 120, discount: 10 },
];
let total = product.reduce((sum, p, i) => {
  let final = p.price * (1 - p.discount / 100);
  console.log(`Product [${i + 1}]: ${p.price} --> ${final.toFixed(2)}`);
  return sum + final;
}, 0);

console.log(`Total price after discount: ${total.toFixed(2)}`);
// workshop3.5
let nuglian = [
  { name: "somsak", score: 85 },
  { name: "lee", score: 72 },
  { name: "joe", score: 48 },
  { name: "tum", score: 90 },
  { name: "T", score: 60 },
  { name: "neung", score: 30 },
];
function filterPassedNuglian(minScore) {
  nuglian.forEach((student) => {
    if (student.score >= minScore) {
      console.log(`Student ${student.name} pass with score ${student.score}`);
    }
  });
}

filterPassedNuglian(50);

// workshop 3.1
let score = 85;
if (score >= 80){
    console.log("grade A");
}
if (score <= 79 && score >=70 ) {
    console.log("grade B");
}
if (score <= 69 && score >=60){
    console.log("grade C");
}
if (score <= 59 && score >=50 ) {
    console.log("grade D");
}
if (score <= 49){
    console.log("grade F");
}
// workshop3.2
let productPrice = 1000;
let discountPer = 10;
let discounted = productPrice / discountPer;
let tumniem = 50;
let finalPrice = 0;

if (discounted <= 0) {
    console.log("ราคา : 0")
}
if (discounted <= 500) {
    finalPrice = tumniem + discounted;
    console.log(finalPrice);
}
if (discounted>= 500); {
    finalPrice = discounted + discounted * 10/100;
}

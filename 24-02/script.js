//1)
let num1 = 10;
num1++;
num1++;
num1--;
console.log(num1);


//2)
let num2 = 47;
num2 += 7;
num2 -= 18;
num2 *= 10;
num2 /= 15;
alert(num2);



/******* && *******/

//true + true = true
let data1 = 90;
let data2 = 10;
data1 -= 5;
data2 += 10;
const dataSaver = data1 <= 85 && data2 >= 20;
console.log(dataSaver);


//true + false = false
let salary1 = 5000;
let salary2 = 5200;
const accountingDept = salary1 >=5000 && salary2 > 5200;
console.log(accountingDept);


//false + true = false
let index1 = 89;
let index2 = 69;
let index3 = 89;
const screen = index1 === index2 && index3 !== index2;
console.log(screen);


//false + false = false
let a = 45;
let b = 38;
let num = 44;
const num = a < num && b > num;
console.log(num);



/******* || *******/

//true + true = true
let x = 55;
let y = 44;
const result = x === 55 || y === 44;
console.log(result);


//true + false = true
let git1 = 100;
let git2 = 35;
git1++;
const result2 = git1 === 109 || git2 <= 25;
console.log(result2);


//false + true = true
let a = 10;
let b = 20;
a *= 10;
b /= 10;
const result3 = a <= 99 || b >= 2;
console.log(result3);


//false + false = false
let int_k = 200;
let int_p = 65;
int_k--;
int_p++;
let result4 = int_k === 200 || int_p !== 70;
console.log(result4);
let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}

let result = Math.floor(sum / 1234);
console.log(result);
let result2 = sum % 1234;
console.log(result2);

result > result2 ? console.log(true) : console.log(false);

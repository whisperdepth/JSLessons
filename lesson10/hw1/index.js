
const getTotalPrice = numbers => {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
 
    let roundSum = Math.floor(sum * 100)/100;

    return "$" + roundSum;
}

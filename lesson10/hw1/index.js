
const getTotalPrice = numbers => {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return Math.floor(sum * 100)/100;;
}

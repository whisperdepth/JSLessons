let a = 2.14;
let b = 7.5;
let len = 10;

const getRandomNumbers = (len, a, b) => {
    b = Math.floor(b);
    let arr = [];

    for (let i = 0; i < len; i ++){
        arr.push(Math.ceil(Math.random() * (b - a) + a));
    }

    return arr;
    
}

console.log(getRandomNumbers(len, a, b));


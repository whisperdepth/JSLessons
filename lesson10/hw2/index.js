

const getRandomNumbers = (len, a, b) => {
    if (a > b) return null;

    b = Math.floor(b);
    let arr = [];

    for (let i = 0; i < len; i ++){
        arr.push(Math.ceil(Math.random() * (b - a) + a));
    }

    return arr;
    
}



const getRandomNumbers = (len, a, b) => {
    if (a > b) return null;

    a = Math.ceil(a)
    b = Math.floor(b);

    let rand = Math.floor(Math.random() * (b - a + 1) + a);
    if(rand > b) return null;

    let arr = [];
    for(let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random() * (b - a + 1) + a));
    }
    
    return arr;
}



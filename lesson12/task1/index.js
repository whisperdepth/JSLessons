let calc = expression => {
    const [a, act, b] = expression.split(' ');

    switch (act){
        case '+': return `${expression} = ${+a + +b}`;
        case '-': return `${expression} = ${a - b}`;
        case '*': return `${expression} = ${a * b}`;
        case '/': return `${expression} = ${a / b}`;
    }
}

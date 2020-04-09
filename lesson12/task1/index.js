let calc = expression => {
    const a = expression[0];
    const b = expression[4];
    const act = expression[2]

    switch (act){
        case '+': return `${expression} = ${+a + +b}`;
        case '-': return `${expression} = ${a - b}`;
        case '*': return `${expression} = ${a * b}`;
        case '/': return `${expression} = ${a / b}`;
    }
}

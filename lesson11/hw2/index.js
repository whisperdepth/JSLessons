let str = "asd.ddff.dfff.d";
let substr = 'dff'


let countOccurrences = (str, subsrt) => {
    if(subsrt == "") return null;

    return str.split(subsrt).length - 1
}

console.log(countOccurrences(str, substr));
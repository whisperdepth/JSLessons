

const pickProps = (obj, arr) => {
    let result = {};
    for (let i = 0; i < arr.length; i++){
     if(arr[i] in obj){
         result[arr[i]] = obj[arr[i]];
     }
    }
    return result;
}




const splitString = (text, len) => {
    if(typeof text != "string") return null;
    if (len === undefined) len = 10;

    let strArr = [];
    let start = 0;
    
    while(true){
        let chunk = text.substr(start, len);
        if(chunk.length === 0) break;
        if(chunk.length < len){
            while(chunk.length < len){
                chunk += ".";
            }
        }

        strArr.push(chunk);
        start += len;

    }
    return strArr;
}

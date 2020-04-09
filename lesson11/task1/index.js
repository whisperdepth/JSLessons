const splitText = (text, len) => {
    if(typeof text != "string") return null;
    if (len === undefined) len = 10;
    
    let text2 = '';
    let start = 0;
    
    while(true){
        let chunk = text.substr(start, len);
        if(chunk.length === 0) break;

        text2 = text2 + (chunk[0].toUpperCase() + (chunk.slice(1) +"\n"));
        start += len;

    }
    return text2;
}

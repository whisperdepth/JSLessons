let countOccurrences = (str, subsrt) => {
    if(subsrt == "") return null;

    return str.split(subsrt).length - 1
}

function includes(numbers, n){
    for (num of numbers){
        if (numbers[num] === n){
            return true;
        }else{
            return false;
        }
    }
}
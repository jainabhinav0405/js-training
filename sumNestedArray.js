function sumNestedArray(array){
    let sum=0;
    for(arr in array){
        sum+=arr;
    }
    return sum;

}



console.log(sumNestedArray([1, [2, [3, 4]], 5]));
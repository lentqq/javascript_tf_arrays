function mergeArray(firstArray, secondArray) {
    let mergedArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            mergedArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        }
        else {
            mergedArray.push(firstArray[i] + secondArray[i]);
        }
    }
console.log(mergedArray.join('-'));
}

mergeArray(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
function equalSums(array) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }

        for (let h = i + 1; h < array.length; h++) {
            rightSum += array[h];
        }

        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
            break;
        }

    }
    if (isEqual) {
        console.log('no');
    }
}

// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
equalSums([3, 4, 25, 5, 2])
function maxNumber(array) {

    let biggestNumbers = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let isBigger = true;

        for (let j = i + 1; j <= array.length; j++) {

            if (currentNumber <= array[j]) {
                isBigger = false;
                break;
            }
            
        }
        if (isBigger) {
            biggestNumbers.push(currentNumber);
        }

    }

    console.log(biggestNumbers.join(' '));
}

maxNumber([41, 41, 34, 20])
function maxSequenceOfEqualElements(arrray) {
    let newArray = arrray[0].split(' ');
    let result = [];
    let leftMostIndex = 0;

    for (let i = 0; i < newArray.length; i++) {
        let currentElement = Number(newArray[i]);
        let currentSequence = [currentElement];

        for (let j = i + 1; j < newArray.length; j++) {
            let nextElement = Number(newArray[j]);

            if (nextElement === currentElement) {
                currentSequence.push(nextElement);
            }
            else {
                break;
            }
        }
        if (currentSequence.length > result.length) {
            result = [];
            for (let j = 0; j < currentSequence.length; j++) {
                result.push(currentSequence[j]);
            }
        }
        else if (currentSequence.length === result.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }
    console.log(result.join(' '));
}

maxSequenceOfEqualElements(['0 1 1 5 2 2 6 3 3'])
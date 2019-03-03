function commonElements(firstArray, secondArray) {
    let matches = [];

    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {

            if (firstArray[i] === secondArray[j]) {
                matches.push(firstArray[i]);
            }
        }
    }
    
    for (let element of matches) {
        console.log(element);
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Pesho', 'e'], ['Pecho', 10, 'hey', 4, 'hello', '2'])
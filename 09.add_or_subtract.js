function addOrSubtract(numbresArray) {
    let modifiedArray = [];
    let sumNumbersArray = 0;
    let sumModifiedArray = 0;

    for (let i = 0; i < numbresArray.length; i++) {

        if (numbresArray[i] % 2 === 0) {
            modifiedArray.push(numbresArray[i] + i);
        }

        else{
            modifiedArray.push(numbresArray[i] - i);
        }

        sumNumbersArray += numbresArray[i];
        sumModifiedArray += modifiedArray[i];
    }
    console.log(modifiedArray.join(', '));
    console.log(sumNumbersArray);
    console.log(sumModifiedArray);

}

addOrSubtract([-5,11,3,0,2])
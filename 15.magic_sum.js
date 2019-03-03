function magicSum(array) {
    let sum = Number(array[1]);
    let modifiedArray = array[0].split(' ');
    let resultArray = [];

    for (let i = 0; i < modifiedArray.length - 1; i++) {

        let firstElement = Number(modifiedArray[i]);

        for (let  j = i + 1; j < modifiedArray.length; j++){

            let secondElement = Number(modifiedArray [j]);

            if ( firstElement + secondElement === sum){
                resultArray.push(`${firstElement} ${secondElement}`);
            }
        }
    }
// console.log(resultArray.join('\n'));
    for (let element of resultArray){
        console.log(element);
    }
}

magicSum(['1 7 6 2 19 23', '8'])
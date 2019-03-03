function sumEvenNumbers (stringArray){
    let evenSum = 0;
for (let i = 0; i < stringArray.length; i++){
    stringArray[i] = Number(stringArray[i]);
    if (stringArray[i] % 2 === 0){
        evenSum += stringArray[i];
    }
}
console.log(evenSum);

}

sumEvenNumbers([ '2', '4', '6', '8', '10'])
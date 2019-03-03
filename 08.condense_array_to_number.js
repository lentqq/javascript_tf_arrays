function condenseArrayToNumber (array){
    let condencedArray = [];

    while (array.length > 1){
          
        for (let i = 0; i < array.length - 1; i ++){
            condencedArray.push(array[i] + array[i + 1]);
        }

        array = condencedArray;
        condencedArray = [];
    }

    console.log(`${array}`);
}

condenseArrayToNumber([5, 0, 4, 1 , 2])
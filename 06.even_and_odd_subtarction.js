function evenAndOddSubtraction (arrayNumbers){
     let evenSum = 0;
     let oddSum = 0;

     for (let i = 0; i < arrayNumbers.length; i++){
         if (arrayNumbers[i] % 2 === 0){
             evenSum += arrayNumbers[i];
         }
         else{
             oddSum += arrayNumbers[i];
         }
     }
    
     let diff = evenSum - oddSum;
     console.log(diff);
}

evenAndOddSubtraction([2, 4, 6, 8, 10])
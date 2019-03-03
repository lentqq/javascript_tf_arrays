// let arrNums = ['20', '30', '40'];

// function sumElements (arrNums){
//     let sum = Number(arrNums[0]) + Number(arrNums[arrNums.length -1]);
//     console.log(sum);
// }

// sumElements (arrNums)

function sumElements (input){
let firstElement = Number(input.shift());
let secondElement = Number(input.pop());
let sum = firstElement + secondElement;
console.log(sum);
}

sumElements(['10', '17', '22', '33'])
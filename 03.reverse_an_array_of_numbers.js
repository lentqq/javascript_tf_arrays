function reverseArray (num, array){
let newArray = [];
newArray = array.slice(0,num);

// for (let i = 0; i < num; i++){
//     newArray.push(array[i]);
// }
console.log(newArray.join(', '));
console.log(newArray.reverse().join(', '));
}
reverseArray(3, [10, 20, 30, 40, 50])
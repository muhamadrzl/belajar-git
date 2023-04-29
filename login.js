// const primeNumber = (number)=>{
//     let flag = 0
//     for (let i = 1; i<= number; i++)
//     {
//         if (number % i === 0){
//             flag ++
//         }
//     } 
//     if (flag === 2){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(primeNumber(299962242))

// const upperCase = (str) =>{
//     // str = string(str)
//     return str.toUpperCase()
// }
// console.log(upperCase('hiajing'))

// const minMax = (arr) =>{
//     let min = arr[0]
//     let max = arr[0]
//     for (let i = 1; i<=arr.length; i++){
//         if (min>arr[i]){
//             min = arr[i]
//         }
//         if (max<arr[i]){
//             max = arr[i]
//         }
//     }
//     // console.log(`nilai min = ${min}`)
//     // console.log(`nilai max = ${max}`)
//     return `min : ${min}, max : ${max} `
// }
// console.log(minMax([8, 34, 231, 232, 11, 23, 12,5,345,123,1234]))

// const checkVocal = (sentence) =>{
//     let result = {
//         a: 0,
//         i: 0,
//         u: 0,
//         e: 0,
//         o: 0
//     }
//     for (let i = 0; i < sentence.length; i++) {
//         let vowel = sentence[i].toLowerCase();
//         if (vowel === 'a') {
//             result.a++;
//         } else if (vowel === 'i') {
//             result.i++;
//         } else if (vowel === 'u') {
//             result.u++;
//         } else if (vowel === 'e') {
//             result.e++;
//         } else if (vowel === 'o') {
//             result.o++;
//         }
//     }
//     return `a: ${result.a}, i: ${result.i}, u: ${result.u}, e: ${result.e}, o: ${result.o}`;
// }


// console.log(checkVocal('Peh apa sih'))
const arr = [1, 2, 3];
const shiftedValue = arr.shift();
console.log(arr, shiftedValue);
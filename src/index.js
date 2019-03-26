import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render (
  <Router>
    <App />
  </Router>,
document.getElementById('root'));

// const anagrams = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const obj = {};
//   for (let i = 0; i < str1.length; i++) {
//     let value = str1[i];
//     obj[value] ? obj[value] += 1 : obj[value] = 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let value = str2[i];
//     if (!obj[value]) {
//       return false;
//     } else {
//       obj[value] -= 1;
//     }
//   }
//   return true;
// }

// console.log(anagrams('azz','aaz'));
// console.log(anagrams('qwerty','qwetry'));
// console.log(anagrams('',''));
// console.log(anagrams('big','gib'));
// console.log(anagrams('bip','gic'));
// console.log(anagrams('bip','bips'));

// function sumArrNull(arr){
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return `${arr[left]} ${arr[right]}`;
//     } else if(sum < 0) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }

// console.log(sumArrNull([-3, -2, -1, 4, 4, 5, 3, 8])); // -3, 3

// function countUniqueValues(arr) {
  // if (arr.length === 0) return 0;
  // let i = 0;
  // for ( let j = 1; j < arr.length; j++ ) {
  //     if(arr[i] !== arr[j]) {
  //         i++;
  //         arr[i] = arr[j];
  //     }
  // }
  // return i + 1;
// }

// console.log(countUniqueValues([1,1,1,1,2,3,5,5])); // 4
// console.log(countUniqueValues([])); // 0

// function sameFrequency(num1, num2) {
//   let counter1 = 0;
//   let counter2 = 0;
//   const numStr1 = String(num1);
//   const numStr2 = String(num2);
//   for (let i = 0; i < numStr1.length; i++) {
//       counter1 += parseInt(numStr1[i]);
//   }

//   for (let i = 0; i < numStr2.length; i++) {
//       counter2 += parseInt(numStr2[i]);
//   }
//     return counter1 === counter2;
// }

// console.log(sameFrequency(281, 821)); // true
// console.log(sameFrequency(28, 81)); //false

// const areThereDuplicates = () => {
//   const collection = {};

// }
// console.log(areThereDuplicates(1,2,3,4));
// console.log(areThereDuplicates(2,3,2));
// console.log(areThereDuplicates('a', 'b', 'c', 'd'));

// // console.log(areThereDuplicates(1,2,3,4))


import App from './app';

export default App;

// =================================================

// const isPalindrome = (str) => {
//   if (str.length <= 2) {
//     return true;
//   }
//   if (str[0] === str[str.length - 1]) {
//     return isPalindrome(str.slice(1, str.length - 1))
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome('laval'));

// =================================================

// const factorial = (n) => {
//   if (n === 1) return n;
//   return n * factorial(n - 1);
// }

// console.log(factorial(3));

// =================================================


// const diff = (a, b) => {
//   const angle = Math.abs(a - b);
//   return angle > 180 ? 360 - angle : angle;
// };

// console.log(diff(0, 45));
// console.log(diff(0, 180));
// console.log(diff(0, 190));
// console.log(diff(120, 280));

// =================================================


// const isPerfect = (number) => {
//   let num = 0;
//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       num += i;
//     }
//   }
//   return number === num;
// }

// console.log(isPerfect(6));
// console.log(isPerfect(17));
// console.log(isPerfect(28));
// console.log(isPerfect(8128));
// console.log(isPerfect(34));

// =================================================

// const isPowerOfThree = (num) => {
//   for (let i = 0; i <= num; i++) {
//     if (Math.pow(3, i) === num) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isPowerOfThree(1));
// console.log(isPowerOfThree(2));
// console.log(isPowerOfThree(9));
// console.log(isPowerOfThree(27));

// =================================================

// const nature = (number) => {
//   if (number === 1) return false;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }

// console.log(nature(2))
// console.log(nature(3))
// console.log(nature(5))
// console.log(nature(10))
// console.log(nature(17))

// =================================================

// const reverseInt = (number) => {
//   const toString = String(number);
//   let reverse = '';

//   for (let i = toString.length - 1; i >= 0; i--) {
//     reverse += toString[i];
//   }
//   return number > 0 ? parseInt(reverse) : -parseInt(reverse);
// };

// console.log(reverseInt(13)); // 31
// console.log(reverseInt(-123)); // -321
// console.log(reverseInt(8900)); // 98
// console.log(reverseInt(-51)); // 98

// =================================================

// const charCount = (str) => {
//   let obj = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     obj[char] > 0 ? obj[char]++ : obj[char] = 1;
//   }
//   return obj;
// };
// console.log(charCount('aaaa'));
// console.log(charCount('hEllOo'));









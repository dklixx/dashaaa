 //    }
// function hui(str) {
//     let x = str;
//     let arr1 = str.split('');
//     let arr2 = arr1.reverse();
//     let result = arr2.join('');
//     if (x == result ) {
//         console.log (true);
//     }
//     else console.log(false);
// }
// hui('')
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(5) );
  rid('5');

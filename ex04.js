// Write a function named logOddOnly that prints out only the characters
// at odd indices (remember, index starts at 0) from a string.

// logOddOnly("catelyn")
// // Will print out (3 characters):
// /*
// a
// e
// y
// */

// const logOddOnly = ( str, counter = 1 ) => {
//   if( counter >= str.length ) {
//     return ;
//   }
//     console.log(str[counter]);

//   return logOddOnly( str, counter + 2 );
// }

// logOddOnly( "I love coding!" );


const logOddOnly = ( str, counter = 1) => {
  if( counter >= str.length) {
    return;
  }

  console.log( str[counter] );

  return logOddOnly( str, counter + 2 );
} 

logOddOnly('I love coding!');
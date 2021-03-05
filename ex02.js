// Write a function named logNonMatching that console.logs 
// every character in a word, except for one given character.

// logFirstX("Winterfell", 3)
// // Will print out (3 characters):
// /*
// W
// i
// n
// */


const logFirstX = ( str, num, i = 0 ) => {
  if( num <= i || str.length == i ) {
    return;
  }

  console.log(str[i]);

  return logFirstX( str, num, i + 1 );

}

logFirstX( '', 10 );
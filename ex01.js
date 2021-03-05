// Write a function named logNonMatching that console.logs 
// every character in a word, except for one given character.

// logNonMatching("banana", "a")
// // Will print out everything not matching "a":
// /*
// b
// n
// n
// */



const longNonMatching = ( str, test, i = 0 ) => {
  if( str.length <= i ) {
    return;
  }

  if( str[i] != test ) { 
    console.log( str[i] );
  }

  return longNonMatching(str, test, i + 1 );
}

longNonMatching('banana', 'a');
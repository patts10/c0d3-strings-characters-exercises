// Write a function called removeCharacter that returns a string without
// any instances of a given character.

// const removeCharacter = ( str, letter, counter = 0, ans = '' ) => {
//   if( counter >= str.length ) {
//     return ans;
//   }

//   if( str[counter] !== letter ) {
//     ans += str[counter];
//   }

//   return removeCharacter( str, letter, counter + 1, ans );
// }

// console.log( removeCharacter( 'banana', 'a' ) );


const removeCharacter = ( str, letter, counter = 0, ans = '') => {
  if( str.length <= 0 || counter >= str.length ){
    return ans;
  }

  if( str[counter] !=  letter ){
    ans += str[counter];
  }

  return removeCharacter( str, letter, counter + 1, ans );

}

console.log(removeCharacter( '', 'a' ));
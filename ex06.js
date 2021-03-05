// Write a function named secretCodeGenerator that takes in 3 parameters,
// a string, a letter, and a string, and returns a string where all the matching
// letters are replaced by the last input string.

const secretGenerator = ( str, letter, letter2, ans = '', counter = 0 ) => {
  if( str.length <= 0 || counter >= str.length ) {
    return ans;
  }
  if( str[counter] == letter ) {
    ans += letter2;
  } else {
    ans += str[counter];
  }

return secretGenerator(str, letter, letter2, ans, counter + 1 );

}

console.log(secretGenerator( 'acdb', 'b', 'hello'));
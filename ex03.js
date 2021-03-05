// Write a function named lastX that returns (not console.log)
// a chunk of a given size from the end of  a string

// lastX("Winterfell", 3) // returns "ell"

// const lastX = ( str, num, ans = '', counter = str.length - 1 ) => {

//   if(ans.length >= num || counter < 0 ) {
//     return ans;
//   }

//   return lastX( str, num, str[counter] + ans, counter - 1 );

// }

// console.log( lastX( 'winterfell', 3 ) );

const lastX = ( word, num, ans ='' ) => {
  if( num < 1 ) {
    return ans;
  }
  if( num >= word.length ){
    return word;
  }
  ans += word[word.length - num]; 
  return lastX( word, num - 1, ans );
};

console.log(lastX( 'waterfell', 3 ));
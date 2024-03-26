/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

let createInitialsFromName = (name) => {
  // Complete the function
  let word=name.split(' ');
  let initials="";
  if(word.length==1){
    initials=word[0].slice(0,2).toUpperCase();
  }
  else if(word.length==2){
    initials=word[0][0]+word[1][0];
    initials=initials.toUpperCase();
  }
  else{
    initials=word[0][0]+word[word.length-1][0];
    initials=initials.toUpperCase();
  }
  return initials;
};
/*console.log(createInitialsFromName("John"));
console.log(createInitialsFromName("John Doe"));
console.log(createInitialsFromName("John Doe Honai"));*/

module.exports = createInitialsFromName;

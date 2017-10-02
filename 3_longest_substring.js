// Given a string, find the length of the longest substring without
// repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.



function subString(text){
  let subText =  ''
  for(i = 0; i < text.length; i++){
    let subTextCand = text[i]
    for(t = i + 1; t < text.length; t++){
      if(subTextCand.indexOf(text[t]) == -1){
        subTextCand = subTextCand + text[t]
        if(subTextCand.length > subText.length){
          subText = subTextCand
        }
      }else{
        subTextCand = ''
        break
      }
    }
  }
  return subText
}

var text = 'texttt'

console.log('Execution Start:', text.length)

console.log(text, subString(text))

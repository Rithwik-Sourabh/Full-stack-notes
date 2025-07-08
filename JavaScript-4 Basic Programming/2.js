// Create a function reverseWords(sentence) that:
//     Takes a string sentence.
//     Returns a new string where the order of words is reversed.
//     Example: "Hello world" → "world Hello".
// Approach: Think of a way to convert the string into an array of words.

function reverseWords(sentence) {
     let words=  sentence.split(" ")//here I am asking js to split the characters when ever it
                                    // encounters space using the key word "split" and make a array
                                    // of words
     console.log(words)


     let reversedArr = []

     while(words.length>0){
           reversedArr.push(words.pop())
     }

     return reversedArr.join(" ")//here I am asking js to join the characters when ever it
                                // encounters space using the key word "join" and make it into a sting


}
  
  console.log(reverseWords("Hello world")); // "world Hello"
  console.log(reverseWords("JavaScript is fun")); // "fun is JavaScript"
  console.log(reverseWords('Scaler Academy'))
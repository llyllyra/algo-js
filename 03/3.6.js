//Write a program that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

const sentence = ['hello', 'world', 'this', 'is', 'great']
let FinalSentence  = sentence.join(" ")
// let i = 0
// for (let elem of sentence){
//     FinalSentence += elem
//     if (i !== (sentence.length-1))
//     {
//         FinalSentence += " "
//     }
//     i++
// }
//
console.log(FinalSentence)


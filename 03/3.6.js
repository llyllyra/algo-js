//Write a program that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

let array = ['hello', 'world', 'this', 'is', 'great']
let phrase = ""
let i = 0
for (let elem of array){
    phrase += elem
    if (i !== (array.length-1))
    {
        phrase += " "
    }
    i++
}

console.log(phrase)
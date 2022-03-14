let reverseWord = '';
function palindromo (word) { for (index = word.length - 1; index >= 0; index -= 1) {
reverseWord += word[index] } if (word === reverseWord) { return true} else
     {return false} 
}

console.log(palindromo('arara'))
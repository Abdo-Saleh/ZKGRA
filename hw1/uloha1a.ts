console.time('codezup')

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// ABCD

// 0,1,2,3

// 3,2,1,0

let plainText = 'SALEH';
let encryptedText = '';
let digitalRepresentaion = [];

let reversedDigitalRepresentaion = [];

Array.from(plainText).forEach(plainTextLetter => {
    let letterIndex = alphabet.findIndex(letter => letter == plainTextLetter);
    digitalRepresentaion.push(letterIndex);
});


digitalRepresentaion.forEach(letterIndex => {
    reversedDigitalRepresentaion.push((alphabet.length - 1) - letterIndex);
});

reversedDigitalRepresentaion.forEach(letterIndex => {
    encryptedText += alphabet[letterIndex];
});

console.log(encryptedText);

console.timeEnd('codezup')




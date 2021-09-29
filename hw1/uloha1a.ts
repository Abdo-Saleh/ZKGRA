console.time('codezup');

const alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphabetMap = new Map();
const encryptedAlphabetMap = new Map();

const userSurname = 'abcd';
const userSurnameMap = new Map();
const encryptedSurnameMap = new Map();
let encryptedSurname = '';

function getEncryptedLetter(indexOfLetter) {
    if (indexOfLetter >= 0 && indexOfLetter <= 25)
        return alphabetArray[indexOfLetter];

    return undefined;
};

alphabetArray.forEach(letter => {
    alphabetMap.set(letter.toLowerCase(), alphabetArray.indexOf(letter, 0));
});

alphabetArray.forEach(letter => {
    encryptedAlphabetMap.set(letter.toLowerCase(), 25 - alphabetArray.indexOf(letter, 0));
});

Array.from(userSurname).forEach(letter => {
    userSurnameMap.set(letter, alphabetArray.findIndex(letterInAlphabet => { return letterInAlphabet.toLowerCase() === letter.toLowerCase() }));
    const encryptedLetter = getEncryptedLetter(encryptedAlphabetMap.get(letter.toLowerCase())) ? getEncryptedLetter(encryptedAlphabetMap.get(letter.toLowerCase())) : '';
    encryptedSurnameMap.set(encryptedLetter, encryptedAlphabetMap.get(letter.toLowerCase()));
    encryptedSurname += encryptedLetter;

});

console.log(userSurname);
console.log(userSurnameMap);

console.log(encryptedSurname);
console.log(encryptedSurnameMap);

console.timeEnd('codezup');




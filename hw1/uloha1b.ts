const alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphabetMap = new Map();
const encryptedAlphabetMap = new Map();
const userSurname = 'Saleh';
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


// each letter in the alphabetMap will have a its symmetric number from the half-matrix point of view
alphabetArray.forEach(letter => {
    if (alphabetArray.indexOf(letter, 0) < 13) {
        encryptedAlphabetMap.set(letter.toLowerCase(), (12 - alphabetArray.indexOf(letter, 0)));
    } else {
        encryptedAlphabetMap.set(letter.toLowerCase(), 25 - alphabetArray.indexOf(letter, 0) + 13);
    }
});


Array.from(userSurname).forEach(letterInUserSurname => {
    userSurnameMap.set(letterInUserSurname, alphabetArray.findIndex(letterInAlphabet => { return letterInAlphabet.toLowerCase() === letterInUserSurname.toLowerCase() }));
    const encryptedLetter = getEncryptedLetter(encryptedAlphabetMap.get(letterInUserSurname.toLowerCase())) ? getEncryptedLetter(encryptedAlphabetMap.get(letterInUserSurname.toLowerCase())) : '';
    encryptedSurnameMap.set(encryptedLetter, encryptedAlphabetMap.get(letterInUserSurname.toLowerCase()));
    encryptedSurname += encryptedLetter;
});


console.log(userSurname);
console.log(userSurnameMap);

console.log(encryptedSurname);
console.log(encryptedSurnameMap);




console.time('codezup');

const alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const userSurname = 'Abdosalehdsadsaldklasdasdasdsadkasxlasjdljqwoeiqwesasdasdnaskdaskljdsada';
let encryptedUserSurname = '';

// xni = i + k                 xni < 26
// xni = i + k - 26            xni > 26
// k = index of first letter from the passed inforamtion 

// get k 

const k = alphabetArray.findIndex(letterInAlphabet => { return letterInAlphabet.toLowerCase() === userSurname[0].toLowerCase() });

for (let i = 0; i < Array.from(userSurname).length; i++) {

    if (i + k < 26) {
        encryptedUserSurname += alphabetArray[i + k].toLowerCase();
    } else {
        encryptedUserSurname += alphabetArray[(i + k) % 26].toLowerCase();
    }
}


console.log(userSurname);
console.log(encryptedUserSurname);

console.timeEnd('codezup');

class Encryption {
    static alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    static alphabetMap = new Map();
    static encryptedAlphabetMap = new Map();

    static userSurname = 'abcd';
    static userSurnameMap = new Map();
    static encryptedSurnameMap = new Map();

    static getEncryptedLetter(indexOfLetter) {
        if (indexOfLetter >= 0 && indexOfLetter <= 25)
            return this.alphabetArray[indexOfLetter];

        return undefined;
    };

    static uloha1a() {
        console.time('codezup');

        let encryptedSurname = '';



        this.alphabetArray.forEach(letter => {
            this.alphabetMap.set(letter.toLowerCase(), this.alphabetArray.indexOf(letter, 0));
        });

        this.alphabetArray.forEach(letter => {
            this.encryptedAlphabetMap.set(letter.toLowerCase(), 25 - this.alphabetArray.indexOf(letter, 0));
        });

        Array.from(this.userSurname).forEach(letter => {
            this.userSurnameMap.set(letter, this.alphabetArray.findIndex(letterInAlphabet => { return letterInAlphabet.toLowerCase() === letter.toLowerCase() }));
            const encryptedLetter = this.getEncryptedLetter(this.encryptedAlphabetMap.get(letter.toLowerCase())) ? this.getEncryptedLetter(this.encryptedAlphabetMap.get(letter.toLowerCase())) : '';
            this.encryptedSurnameMap.set(encryptedLetter, this.encryptedAlphabetMap.get(letter.toLowerCase()));
            encryptedSurname += encryptedLetter;

        });

        console.log(this.userSurname);
        console.log(this.userSurnameMap);

        console.log(encryptedSurname);
        console.log(this.encryptedSurnameMap);

        console.timeEnd('codezup');
    }

}

Encryption.uloha1a();
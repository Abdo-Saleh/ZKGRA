class Encryption {
    static alphabetArray = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    // this is the alphapet Map, A => 0, a => 26
    static alphabetMap = new Map();
    // this is the encrypted alphapet Map, A => x, a => y based on the question will be filled
    static encryptedAlphabetMap = new Map();
    // this is the input
    static userSurname = 'aaleh';
    // this is the input as it's supposed to be from plain alphabet
    static userSurnameMap = new Map();
    // this is the encrypted input map
    static encryptedSurnameMap = new Map();

    // this will contain the encrypted result
    static encryptedSurname = '';

    // this function is responsiable of getting the index of a letter from alphabetArray
    static getEncryptedLetter(indexOfLetter) {
        if (indexOfLetter >= 0 && indexOfLetter <= 51)
            return this.alphabetArray[indexOfLetter];

        return undefined;
    };

    static clearMaps() {
        this.userSurnameMap.clear();
        this.encryptedAlphabetMap.clear();
        this.encryptedSurnameMap.clear();
    }


    static printReport() {
        console.log("Alphapet Map, Length");
        console.log(this.alphabetMap, this.alphabetArray.length);
        console.log("=======================================================");
        console.log("Encrypted Alphapet Map");
        console.log(this.encryptedAlphabetMap);
        console.log("=======================================================");

        console.log("===================Output=======================");
        console.log(this.userSurname);
        console.log(this.userSurnameMap);
        console.log(this.encryptedSurname);
        console.log(this.encryptedSurnameMap);
    }

    static uloha1aEncryption() {
        console.log("======================================Encryption 1.a================================================");

        this.clearMaps();

        this.encryptedSurname = '';

        this.alphabetArray.forEach(letter => {
            this.alphabetMap.set(letter, this.alphabetArray.indexOf(letter, 0));
        });

        this.alphabetArray.forEach(letter => {
            this.encryptedAlphabetMap.set(letter, (this.alphabetArray.length - 1) - this.alphabetArray.indexOf(letter, 0));
        });

        Array.from(this.userSurname).forEach(letter => {
            this.userSurnameMap.set(letter, this.alphabetArray.findIndex(letterInAlphabet => { return letterInAlphabet === letter }));
            const encryptedLetter = this.getEncryptedLetter(this.encryptedAlphabetMap.get(letter)) ? this.getEncryptedLetter(this.encryptedAlphabetMap.get(letter)) : '';
            this.encryptedSurnameMap.set(encryptedLetter, this.encryptedAlphabetMap.get(letter));
            this.encryptedSurname += encryptedLetter;
        });

        this.printReport();

        return this.encryptedSurname;
    }

    static uloha1aDecryption() {

        let result = '';

        Array.from(this.encryptedSurname).forEach(letter => {
            const encryptedLetter = this.getEncryptedLetter(this.encryptedAlphabetMap.get(letter)) ? this.getEncryptedLetter(this.encryptedAlphabetMap.get(letter)) : '';
            result += encryptedLetter;
        });
        console.log("================================================")
        console.log("Decryption REsult from 1.a")
        console.log(result);
    }

    static uloha1bEncryption() {
        console.log("======================================Encryption 1.b================================================");
        this.encryptedSurname = '';
        // empty the Encrypted Maps
        Encryption.clearMaps();

        // each letter in the alphabetMap will have a its symmetric number from the half-matrix point of view
        this.alphabetArray.forEach(letter => {
            if (this.alphabetArray.indexOf(letter, 0) < 26) {
                this.encryptedAlphabetMap.set(letter, (25 - this.alphabetArray.indexOf(letter, 0)));
            } else {
                this.encryptedAlphabetMap.set(letter, 51 - this.alphabetArray.indexOf(letter, 0) + 26);
            }
        });


        Array.from(this.userSurname).forEach(letterInUserSurname => {
            this.userSurnameMap.set(letterInUserSurname,
                this.alphabetArray.findIndex(letterInAlphabet => { return letterInAlphabet === letterInUserSurname }));
            const encryptedLetter = this.getEncryptedLetter(this.encryptedAlphabetMap.get(
                letterInUserSurname)) ? this.getEncryptedLetter(this.encryptedAlphabetMap
                    .get(letterInUserSurname)) : 'null';
            this.encryptedSurnameMap.set(encryptedLetter, this.encryptedAlphabetMap.get(letterInUserSurname));
            this.encryptedSurname += encryptedLetter;
        });


        this.printReport();

        return this.encryptedSurname;

    }

    static uloha1bDecryption() {

        let result = '';

        Array.from(this.encryptedSurname).forEach(letter => {
            const encryptedLetter = this.getEncryptedLetter(this.encryptedAlphabetMap.get(letter)) ? this.getEncryptedLetter(this.encryptedAlphabetMap.get(letter)) : '';
            result += encryptedLetter;
        });
        console.log("================================================")
        console.log("Decryption REsult from 1.b")
        console.log(result);
    }

    static uloha1cEncryption() {
        console.log("======================================Encryption 1.c================================================");
        this.encryptedSurname = '';
        // empty the Encrypted Maps
        Encryption.clearMaps();

        // xni = i + k                 xni < 26
        // xni = i + k - 26            xni > 26
        // k = index of first letter from the passed inforamtion 

        // get k 
        const k = this.alphabetArray.findIndex(letterInAlphabet => { return letterInAlphabet === this.userSurname[0] });

        console.log(k);

        for (let i = 0; i < Array.from(this.userSurname).length; i++) {

            if (i + k < 52) {
                this.encryptedSurname += this.alphabetArray[i + k];
            } else {
                this.encryptedSurname += this.alphabetArray[(i + k) % 52];
            }
        }

        // this.printReport();
        console.log(this.userSurname);
        console.log(this.encryptedSurname);
    }

    static uloha1cDecryption() {
    }

}

console.time('codezup');

// Encryption.uloha1aEncryption();
// Encryption.uloha1aDecryption();

// Encryption.uloha1bEncryption();
// Encryption.uloha1bDecryption();

Encryption.uloha1cEncryption();
Encryption.uloha1cDecryption();

console.timeEnd('codezup');


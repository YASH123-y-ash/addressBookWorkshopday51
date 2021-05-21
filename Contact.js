class Contact {

    get fullName() {
        return this._fullName;
    }    
    set fullName(fullName) {
        let fullNameRegex = RegExp('^[A-Z]{1}[a-zA-Z ]{2,}$');
        if (fullNameRegex.test(fullName)) {
            this._fullName = fullName;
        }
        else
            throw 'Invalid';
    }

    get tel() 
    {
        return this._tel;
    }
    set tel(tel) {
        let telRegex = RegExp('^[1-9]{2}[ ]{1}[0-9]{10}$');
        if (telRegex.test(tel)) {
            this._tel = tel;
        }
        else
            throw 'Invalid';
    }

    get address() {
         return this._address;
         }      
    set address(address) {
        let words = address.split(" ");
        let addressRegex = RegExp('([A-Z a-z 0-9]{1,})+');
        for (const word of words) {
            if (!addressRegex.test(word))
                throw 'Invalid';
        }
        this._address = address;
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }

    toString() {
        return '[ FullName : ' + this.fullName + ' Address : '
            + this.address + ' City : ' + this.city + ' State : ' + this.state + ' Zip : ' + this.zip +
            ' Phone Number : ' + this.phoneNumber + ' ]';
    }
}
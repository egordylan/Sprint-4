const cath = 'Fragrance';
const searchVal = 'toilette';


class Data {

    get testArray() {
        return ['ARMANI EAU DE TOILETTE SPRAY', 'EUPHORIA MEN INTENSE EAU DE TOILETTE SPRAY', 
                'MAN EAU DE TOILETTE SPRAY', 'OMNIA EAU DE TOILETTE 65ML', 
                'POUR HOMME EAU DE TOILETTE', ];
    }

    get cathegory() {
        return cath;
    }

    get searchValue() {
        return searchVal;
    }

    get loginUnsucessfull() {
        // valid username, invalid password
        // invalid username, valid password
        // invalid username, invalid password
        // valid username, empty password
        // empty username, valid password
        // empty username, empty password
        return [
            { username: "JohnyBravo", password: "password1", message: "Error: Incorrect login or password provided.", },
            { username: "JohnyB", password: "password123", message: "Error: Incorrect login or password provided.", },
            { username: "JohnyB", password: "password1", message: "Error: Incorrect login or password provided.", },
            { username: "JohnyBravo", password: "", message: "Error: Incorrect login or password provided.", },
            { username: "", password: "password123", message: "Error: Incorrect login or password provided.", },
            { username: "", password: "", message: "Error: Incorrect login or password provided.", },
        ];
    }

    get loginSucessfull() {
        return  ({ username: "JohnyBravo", password: "password123", title: "My Account", });
    }
}

module.exports = { Data: new Data() }

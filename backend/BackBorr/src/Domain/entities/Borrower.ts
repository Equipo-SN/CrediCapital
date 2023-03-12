export class Borrower {

    id: string;
    name: string;
    lastname: string;
    rfc: string;
    phone: string;
    email: string;
    passwordHash?: string;

    constructor(id: string, name: string,lastname: string, rfc: string,phone: string,email: string,passwordHash: string){
        this.id = id,
        this.name = name,
        this.lastname = lastname,
        this.rfc = rfc,
        this.phone = phone,
        this.email = email,
        this.passwordHash = passwordHash
    }
}

export class Borrower {

    id: string;
    name: string;
    lastname: string;
    rfc: string;
    phone: number;
    email: string;
    passwordHash: string;

    constructor(rfc: string){
        this.id = '',
        this.name = '',
        this.lastname = '',
        this.rfc = rfc,
        this.phone = 1,
        this.email = '',
        this.passwordHash = ''
    }
}

import { Borrower } from "../../../../domain/entities/Borrower";
import { IBorrowerRepository } from "../../../../domain/repositories/IBorrowerRepository";
import { BorrowerAlreadyExistsException } from "../../../Exceptions/BorrowerAlreadyExistsException";

export class CreateBorrower {
    private readonly _borrowerRepository: IBorrowerRepository;

    constructor(borrowerRepository: IBorrowerRepository) {
        this._borrowerRepository = borrowerRepository;
    }

    async run(borrower: Borrower): Promise<Borrower> {
        const existBorrower = this._borrowerRepository.getByRfc(borrower.rfc);
        if (existBorrower === null) throw new BorrowerAlreadyExistsException();

        const borrowerCreated = this._borrowerRepository.create(borrower);
        return borrowerCreated;
    }
}

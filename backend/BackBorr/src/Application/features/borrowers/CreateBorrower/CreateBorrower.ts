import { Borrower } from "../../../../Domain/entities/Borrower";
import { IBorrowerRepository } from "../../../../Domain/repositories/IBorrowerRepository";

export class CreateBorrower {
    private readonly _borrowerRepository: IBorrowerRepository;

    constructor(borrowerRepository: IBorrowerRepository) {
        this._borrowerRepository = borrowerRepository;
    }

    async handle(borrower: Borrower): Promise<void> {
        const existBorrower = this._borrowerRepository.getById(borrower.id);
      //  if (existBorrower !== null) throw new BorrowerAlreadyExistsException();

        await this._borrowerRepository.create(borrower);
        
    }
}

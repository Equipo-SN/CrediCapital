import { Borrower } from "../../../src/Domain/entities/Borrower";
import { CreateBorrower } from "../../../src/Application/features/borrowers/CreateBorrower/CreateBorrower";
import { FileBorrowerRepository } from "../../../src/Persistence/repositories/FileBorrowerRepository";

let repository: FileBorrowerRepository;
let creator: CreateBorrower;

beforeEach(() => {
    repository = new FileBorrowerRepository();
    creator = new CreateBorrower(repository);
});

describe("BorrowerCreator", () => {
    it("should create a valid account for borrower", async () => {
        repository.create = jest.fn();

        const id = "12345678";
        const name = "Jose Luis";
        const lastname = "Sandoval";
        const rfc = "SAAL870512MJ8";
        const phone = "732096019";
        const email = "docs.huehue@gmail.com";
        const passwordHash = "test";

        const expectedBorrower = new Borrower(id, name, lastname, rfc, phone, email, passwordHash);
        await creator.run(new Borrower(id, name, lastname, rfc, phone, email, passwordHash));

        expect(repository.create).toHaveBeenCalledWith(expectedBorrower);
    });
});

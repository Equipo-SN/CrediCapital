import { Borrower } from "../../src/Domain/entities/Borrower";
import { FileBorrowerRepository } from "../../src/Persistence/repositories/FileBorrowerRepository";

describe("FileBorrowerRepository", () => {
    it("shoult create an new aacoutn for borrower", async () => {
        const expectedBorrower = new Borrower(
            "12345678",
            "Jose Luis",
            "Sandoval",
            "SAAL870512MJ8",
            "7352096019",
            "docs.huehue@gmail.com",
            "test"
        );
        const repository = new FileBorrowerRepository();
        repository.create(expectedBorrower);

        const borrower = await repository.getById("12345678");
        expect(borrower).toEqual(expectedBorrower);
    });
});

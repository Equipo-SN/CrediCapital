import { Borrower } from "../../Domain/entities/Borrower";
import { IBorrowerRepository } from "../../Domain/repositories/IBorrowerRepository";
import { dirname } from "path";
import { deserialize, serialize } from "bson";
import fs from "fs";

export class FileBorrowerRepository implements IBorrowerRepository {

    async create(borrower: Borrower) : Promise<void>{
        fs.promises.writeFile(this.filePath(borrower.id), serialize(borrower))

    };

    async getById(idBorrower: string): Promise<Borrower>{
        const borrowerData = await fs.promises.readFile(this.filePath(idBorrower));
        const {id, name, lastname, rfc, phone, email} = deserialize(borrowerData);
        return new Borrower(id, name, lastname, rfc, phone, email, "test");
    }
    update!: (borrower: Borrower) => Promise<void>;
    getAll!: () => Promise<Borrower[]>;
    getByRfc!: (rfc: string) => Promise<Borrower | null>;

    private FILE_PATH = `${dirname(__filename)}/borrower`; 

    private filePath(id: string): string {
        return `${this.FILE_PATH}.${id}.repo ` 
    }
}
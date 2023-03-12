import { Borrower } from "../entities/Borrower";

export interface IBorrowerRepository {
    create: (borrower: Borrower) => Promise<void>;
    update: (borrower: Borrower) => Promise<void>;
    //delete: (borrower: Borrower) => Promise<void>;
    getAll: () => Promise<Borrower[]>;
    getById: (idBorrower: string) => Promise<Borrower | null>;
    getByRfc: (rfc: string) => Promise<Borrower | null>;
}

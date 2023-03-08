import { Borrower } from "../entities/Borrower";

export interface IBorrowerRepository {
    create: (borrower: Borrower) => Promise<Borrower>;
    update: (borrower: Borrower) => Promise<Borrower>;
    //delete: (borrower: Borrower) => Promise<void>;
    getAll: () => Promise<Borrower[]>;
    //getById: (id: string) => Promise<Borrower | null>;
    getByRfc: (rfc: string) => Promise<Borrower | null>;
}

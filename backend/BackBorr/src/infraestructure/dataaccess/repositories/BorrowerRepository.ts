import { AppDataSource } from '../drivers/postgresql/DataSource';
import { Borrower } from '../../../domain/entities/Borrower';
import { IBorrowerRepository } from '../../../domain/repositories/IBorrowerRepository';
import { NotFoundException } from '../../../application/Exceptions/NotFoundException';

export class BorrowerRepository implements IBorrowerRepository {
  private db = AppDataSource.getRepository(Borrower);

  async create(borrower: Borrower): Promise<Borrower> {
    return await this.db.save(borrower);
  }
  async update(borrower: Borrower): Promise<Borrower> {
    const record = await this.db.findOne({ where: { id: borrower.id } });
    if (record) {
      record.email = borrower.email;
      record.phone = borrower.phone;
      record.passwordHash = borrower.passwordHash;
    } else {
      throw new NotFoundException(`Record width id: ${borrower.id} not found `);
    }
    return await this.db.save(borrower);
  }
  // delete: (borrower: Borrower) => Promise<void>;
  async getAll(): Promise<Borrower[]> {
    return await this.db.find();
  }
  // getById: (id: string) => Promise<Borrower | null>;
  async getByRfc(rfc: string): Promise<Borrower | null> {
    const record = await this.db.findOne({ where: { rfc: rfc } });
    if (record) {
      return record;
    } else {
      throw new NotFoundException(`Record width rfc: ${rfc} not found `);
    }
  }
}

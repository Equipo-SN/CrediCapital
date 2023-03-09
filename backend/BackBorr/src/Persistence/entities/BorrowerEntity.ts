import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class BorrowerEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    name!: string;

    @Column()
    lastName: string | undefined;

    @Column({ unique: true })
    rfc: string | undefined;

    @Column()
    phone: number | undefined;

    @Column({ unique: true })
    email: string | undefined;

    @Column()
    passwordhash: string | undefined;

    
}

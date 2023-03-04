import {Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn, 
    UpdateDateColumn,
    BaseEntity
} from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: number;

    @Column()
    email: string;

    @Column()
    password: string;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    udatedAt: Date;

}
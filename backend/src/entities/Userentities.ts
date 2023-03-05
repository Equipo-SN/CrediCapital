
import {Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn, 
    UpdateDateColumn,
    BaseEntity
} from "typeorm";

import bcrypt from 'bcrypt';


@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: number;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @Column({ type: 'boolean', default: false })
    active: boolean;

    @Column()
    token: string;
   
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    udatedAt: Date;

    async save() {
        const saltRounds = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, saltRounds);
        return super.save();
      }

}
    

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
    RFC: number
    
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
    
      async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
      }
    
      async comparePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
      }

}
    
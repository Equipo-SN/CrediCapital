import {Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
} from "typeorm";


@Entity()
export class BorrowerMetadata extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({unique:true})
    rfc: string;

    @Column()
    phone: number;

    @Column({unique:true})
    email: string;

    @Column()
    passwordhash: string;

    constructor(rfc: string){
        super()
        this.id = '',
        this.name = '',
        this.lastName = '',
        this.rfc = rfc,
        this.phone = 1,
        this.email = '',
        this.passwordhash = ''
        
    }
      

}

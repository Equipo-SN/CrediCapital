import {DataSource} from "typeorm"
import { User } from "./entities/Userentities"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "92Assassins",
    database: "credicapital",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
import { Request, Response } from "express";
import { GetAllUsers } from "../../Application/features/users/queries/GetAllUsers";
import httpStatus from "http-status";
import { Controller } from "./Controller";

export class GetAllUsersController implements Controller {
    
    constructor(private readonly getAllUsers: GetAllUsers) {
        
    }

    async run(req: Request, res: Response): Promise<void> {
        const records = await this.getAllUsers.handle(
            
        );
        res.status(httpStatus.OK).send(records);
    }
}
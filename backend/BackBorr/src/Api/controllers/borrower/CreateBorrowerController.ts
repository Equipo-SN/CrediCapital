import {v4 as uuidv4} from 'uuid';
import { Request, Response, NextFunction } from "express";
import { CreateBorrower } from "../../../Application/feautures/borrowers/CreateBorrower/CreateBorrower";
import { BorrowerRepository } from "../../../Persistence/repositories/BorrowerRepository";
import { Borrower } from "../../../Domain/entities/Borrower";


export const CreateBorrowerController = async (req:Request, res: Response, next: NextFunction) : Promise<void> => {
    const {name, lastname, rfc, phone, email, passwordHash} = req.body;

    const _borrowerRepository = new BorrowerRepository()
    const _createBorrower = new CreateBorrower(_borrowerRepository);

    const borrower: Borrower = {
        id : uuidv4(),
        name: name,
        lastname: lastname,
        rfc : rfc,
        phone: phone,
        email: email,
        passwordHash: passwordHash,
    }

    try {
        const borrowerCreated = await _createBorrower.run(borrower);
        res.json(borrowerCreated);
    } catch (e) {
        next(e);
    }
}
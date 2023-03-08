import {v4 as uuidv4} from 'uuid';
import { Request, Response, NextFunction } from "express";
import { CreateBorrower } from "../../../application/feautures/borrowers/CreateBorrower/CreateBorrower";
import { BorrowerRepository } from "../../../data/postgress/repositories/BorrowerRepository";
import { Borrower } from "../../../domain/entities/Borrower";


export const GetAllBorrowerController = async (req:Request, res: Response, next: NextFunction) : Promise<void> => {
    const {name, lastname, rfc, phone, email, passwordHash} = req.body;

  

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
        res.json([borrower]);
    } catch (e) {
        next(e);
    }
}
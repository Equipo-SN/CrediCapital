import { Request, Response } from "express";
import { Controller } from "../Controller";
import httpStatus from "http-status";
import { CreateBorrower } from "../../../Application/features/borrowers/CreateBorrower/CreateBorrower";
import { Borrower } from "../../../Domain/entities/Borrower";

export class CreateBorrowerController implements Controller {
    private _createBorrower: CreateBorrower;
    constructor(createBorrower: CreateBorrower) {
        this._createBorrower = createBorrower;
    }

    async run(req: Request, res: Response): Promise<void> {
        const { id, name, lastname, rfc, phone, email, passwordHash } = req.body;
        const record = await this._createBorrower.handle(
            new Borrower(id, name, lastname, rfc, phone, email, passwordHash)
        );
        res.status(httpStatus.CREATED).send();
    }
}

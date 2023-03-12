import { Request, Response } from "express";
import { Controller } from '../Controller';
import httpStatus from 'http-status';


export class CreateBorrowerController implements Controller {
    run(req: Request, res: Response): void {
		res.status(httpStatus.CREATED).send();
	}
}
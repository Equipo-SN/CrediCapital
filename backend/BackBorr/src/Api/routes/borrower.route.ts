import { Router, Request, Response } from "express";
import { Controller } from "../../Api/controllers/Controller";
import container from "../../Api/dependency-injection";

export const register = (router: Router): void => {
    const controller: Controller = container.get("controller.CreateBorrower");
    router.put("/borrower/:id", (req: Request, res: Response) => {
        controller.run(req, res);
    });
};

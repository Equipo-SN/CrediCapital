import { Router, Request, Response } from "express";

export const register = (router: Router): void => {
    //const controller: Controller = container.get("controller.CreateBorrower");
    router.put("/borrower/:id", (req: Request, res: Response) => {
    //    controller.run(req, res);
    });
};

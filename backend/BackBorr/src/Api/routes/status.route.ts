import { Controller } from "../../Api/controllers/Controller";
import CheckStatusController from "../../Api/controllers/status/CheckStatusController";
import { Request, Response, Router } from "express";

export const register = (router: Router): void => {
    const controller: Controller = new CheckStatusController();
    router.get("/status", (req: Request, res: Response) => {
        controller.run(req, res);
    });
};

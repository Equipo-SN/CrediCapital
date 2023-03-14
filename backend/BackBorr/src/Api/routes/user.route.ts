
import { container } from "../../Api/ApiServices";
import { Controller } from "../../Api/controllers/Controller";
import { GetAllUsersController } from "../../Api/controllers/GetAllUsersController";
import { Router, Request, Response } from "express";

export const register = (router: Router): void => {
    const controller: Controller = container.resolve<GetAllUsersController>('GetAllUsersController');
    router.get("/user", (req: Request, res: Response) => {
        controller.run(req, res);
    });
};
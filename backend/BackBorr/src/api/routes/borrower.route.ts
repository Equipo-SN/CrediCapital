import { GetAllBorrowerController } from "../controllers/borrower/GetAllBorrowerController";
import { Router, Request, Response, NextFunction } from "express";
import { CreateBorrowerController } from "../controllers/borrower/CreateBorrowerController";

const router = Router();

router.post("", CreateBorrowerController);
router.get("/", GetAllBorrowerController)

export default router;
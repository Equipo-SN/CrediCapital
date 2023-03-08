import { BorrowerAlreadyExistsException } from "../../application/Exceptions/BorrowerAlreadyExistsException";
import { NotFoundException } from "../../application/Exceptions/NotFoundException";
import { Router, Request, Response, NextFunction } from "express";
import borrowerRoutes from './borrower.route';

const router = Router();

router.use("/api/borrower", borrowerRoutes);


router.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof BorrowerAlreadyExistsException) {
        res.status(400).json({ message: "User with this RFC has already been regristred" });
    } else if (error instanceof NotFoundException) {
        res.status(400).json({ message: "Record not found" });
    } else {
        next(error);
    }
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(500).json({
        error: err,
    });
});

export default router;

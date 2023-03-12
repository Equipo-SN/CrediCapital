import { Router } from "express";

import { createUser,
        confirmAccount,
        login,
        admin
         } 
 from "../controllers/userController";
 import checkAuth from "../middleware/authMiddleware";

const route = Router();

route.post('/api/investor/register',createUser);
route.get('/api/investor/confirm/:token',confirmAccount);
route.post('/api/investor/signin',login);
// Rutas protegidas 
route.get('/user/admin',checkAuth,admin)


export default route;
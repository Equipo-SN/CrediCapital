import { Router } from "express";

import { createUser,
        confirmAccount,
        login,
        admin
         } 
 from "../controllers/userController";
 import checkAuth from "../middleware/authMiddleware";

const route = Router();

route.post('/',createUser);
route.get('/confirmar/:token',confirmAccount);
route.post('/login',login);
// Rutas protegidas 
route.get('/user/admin',checkAuth,admin)


export default route;
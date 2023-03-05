import { Router } from "express";

import { createUser,
        confirmAccount,
        login
         } 
 from "../controllers/userController";

const route = Router();

route.post('/',createUser);
route.get('/confirmar/:token',confirmAccount);
route.post('/login',login);


export default route;
import { Router } from "express";

import { createUser
         } 
 from "../controllers/userController";

const route = Router();

route.post('/',createUser)


export default route;
import { Router } from "express";
import fs from "fs";

const PATH_ROUTES = __dirname;
export const router = Router();

const rmExtension = (filename: string) => {
  return filename.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).forEach((file) => {
  const name = rmExtension(file);

  if (name !== "index") {
    const routeModule = require(`./${file}`);
    if (typeof routeModule.register === "function") {
      routeModule.register(router);
    }
  }
});

export default router;

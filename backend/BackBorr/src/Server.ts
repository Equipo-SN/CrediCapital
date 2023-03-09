import {router} from "./Api/routes";
import { json, urlencoded } from "body-parser";
import express, { Request, Response } from "express";
import * as http from "http";
import httpStatus from "http-status";

export class Server {
    private readonly express: express.Express;
    private readonly port: string;
    private httpServer?: http.Server;

    constructor(port: string) {
        this.port = port;
        this.express = express();
        this.express.use(json());
        this.express.use(urlencoded({ extended: true }));


        this.express.use("/api", router);

        this.express.use((err: Error, req: Request, res: Response, _next: () => void) => {
            console.log(err);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        });
    }

    async listen(): Promise<void> {
        return new Promise((resolve) => {
            const env = this.express.get("env") as string;
            this.httpServer = this.express.listen(this.port, () => {
                console.log(
                    `  Borrower Backend App is running at http://localhost:${this.port}/api in ${env} mode`
                );
                console.log("  Press CTRL-C to stop\n");
                resolve();
            });
        });
    }

    getHTTPServer(): Server["httpServer"] {
        return this.httpServer;
    }

    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.close((error) => {
                    if (error) {
                        reject(error);

                        return;
                    }

                    resolve();
                });
            }

            resolve();
        });
    }
}

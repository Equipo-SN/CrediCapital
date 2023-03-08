import path from "path";
import dotenv from "dotenv";
import { BackendApp } from "./BackendApp";

dotenv.config({
    path: path.resolve(__dirname, ".env"),
});

try {
    new BackendApp().start();
} catch (error) {
    console.log(error);
}

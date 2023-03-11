import path from 'path';
import dotenv from 'dotenv';
import { BackendApp } from './BackendApp';

dotenv.config({
	path: path.join(__dirname, '../.env.development'),
});

try {
	new BackendApp().start();
	console.log(process.env.HELLO);
} catch (error) {
	console.log(error);
}

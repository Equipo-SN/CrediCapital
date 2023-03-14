export interface ILogger {
	log(message: string): void;
}

export class ConsoleLogger implements ILogger {
	log(message: string): void {
		console.log(message);
	}
}

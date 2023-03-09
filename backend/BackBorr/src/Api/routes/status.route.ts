import { Request, Response, Router } from 'express';

import StatusController from '../controllers/status/StatusGetController';
//import container from '../dependency-injection';

export const register = (router: Router): void => {
	//const controller = container.get<StatusController>('Api.controllers.status.StatusGetController');
	const controller = new StatusController();
	router.get('/status', (req: Request, res: Response) => {
		controller.run(req, res);
	});
};
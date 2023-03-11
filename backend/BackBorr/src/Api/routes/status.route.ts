import { Controller } from 'Api/controllers/Controller';
import { Request, Response, Router } from 'express';

import container from '../dependency-injection';

export const register = (router: Router): void => {
	const controller: Controller = container.get('controller.CheckStatus');
	router.get('/status', (req: Request, res: Response) => {
		controller.run(req, res);
	});
};
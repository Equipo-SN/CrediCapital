import { BackendApp } from "BackendApp";
import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import request from "supertest":

let _request = request.Test;
let application = BackendApp;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
	_request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
	_response = await _request.expect(status);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
	_request = request(application.httpServer)
		.put(route)
		.send(JSON.parse(body) as object);
});

Then('the response should be empty', () => {
	assert.deepStrictEqual(_response.body, {});
});

BeforeAll(() => {
	application = new BackendApp();
	application.start();
});

AfterAll(() => {
	application.stop();
});

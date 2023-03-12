import { BackendApp } from "../../../../src/BackendApp";
import request from "supertest";
import {Given, Then, BeforeAll, AfterAll } from "@cucumber/cucumber";
import assert from 'assert';

let _request : request.Test;
let application : BackendApp;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
	_request = request(application.httpServer).get(route);
});

Then('The response status code should be {int}', async (status: number) => {
	_response = await _request.expect(status);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
	_request = request(application.httpServer)
		.put(route)
		.send(JSON.parse(body) as object);
});

Then('The response should be empty', () => {
	assert.deepStrictEqual(_response.body, {});
});

BeforeAll(() => {
	application = new BackendApp();
	application.start();
});

AfterAll(() => {
	application.stop();
});

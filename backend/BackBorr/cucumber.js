/* eslint-disable camelcase */
const common = [
	'--require-module ts-node/register' // Load TypeScript module
];

const borrower_backend = [
	...common,
	'tests/api/features/**/*.feature',
	'--require tests/api/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
	borrower_backend
};

import { defineConfig } from 'eslint/config';
import { airbnb } from 'eslint-config-airbnb';

export default defineConfig([
	{
    extends: ['airbnb', 'airbnb/hooks'],
	},
]);
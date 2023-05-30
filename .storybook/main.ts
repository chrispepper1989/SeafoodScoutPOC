import type { StorybookConfig } from '@storybook/nextjs';

import path from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'storybook-addon-performance',
		'storybook-css-modules',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	staticDirs: ['../public'],
	webpackFinal: async (config) => {
		if (config.resolve) {
			// Make custom items in `public` available to the app.
			config.resolve.roots = [
				path.resolve(__dirname, '../public'),
				'node_modules',
			];
		}

		// Return the altered config
		return config;
	},
};
export default config;

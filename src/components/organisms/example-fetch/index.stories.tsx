import type { Meta, StoryObj } from '@storybook/react';

import { ExampleFetch } from './index';

const meta: Meta<typeof ExampleFetch> = {
	title: 'organisms/ExampleFetch',
	component: ExampleFetch,
};
export default meta;
type Story = StoryObj<typeof ExampleFetch>;

export const Primary: Story = {};

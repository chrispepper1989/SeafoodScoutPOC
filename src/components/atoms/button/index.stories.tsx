import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariant } from './index';

const meta: Meta<typeof Button> = {
	title: 'atoms/Button',
	component: Button,
	tags: ['autodoc'],
	argTypes: {
		variant: {
			table: {
				category: 'Appearance',
			},
		},
		disabled: {
			table: {
				category: 'Disabled',
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof Button>;

// Default Story renderer (only needed where children are required)
export const Primary: Story = {
	args: { variant: ButtonVariant.Primary, disabled: false },
	render: (args) => <Button {...args}>Test Button</Button>,
};

export const Secondary = {
	...Primary,
	args: { ...Primary.args, variant: ButtonVariant.Secondary },
};

export const Disabled = {
	...Primary,
	args: { ...Primary.args, disabled: true },
};

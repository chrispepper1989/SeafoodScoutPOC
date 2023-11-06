---
to: "src/components/<%= type %>/<%= name %>/index.stories.tsx"
---
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { <%= h.inflection.camelize(name) %> } from './';

const meta: Meta<typeof <%= h.inflection.camelize(name) %>> = {
    title: '<%= type %>/<%=name %>',
    component: <%= h.inflection.camelize(name) %>,
    argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof <%= h.inflection.camelize(name) %>> = {
    args: {},
    render: (args) => <<%= h.inflection.camelize(name) %> {...args} />,
};
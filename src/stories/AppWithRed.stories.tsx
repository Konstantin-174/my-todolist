import React from 'react';
import { Story, Meta } from '@storybook/react';
import AppWithRed from '../AppWithRed';
import {ReduxStoreProviderDecorator} from './ReduxStoreProviderDecorator';

export default {
  title: 'TODOLISTS/AppWithRed',
  component: AppWithRed,
  decorators: [ReduxStoreProviderDecorator],
} as Meta;

const Template: Story = () => <AppWithRed />;

export const AppWithRedExample = Template.bind({});
AppWithRedExample.args = {};

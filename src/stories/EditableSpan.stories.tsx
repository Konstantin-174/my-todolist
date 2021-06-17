import React from 'react';
import { Story, Meta } from '@storybook/react';
import {EditableSpanPropsType} from '../types';
import {EditableSpan} from '../EditableSpan';
import {action} from '@storybook/addon-actions';

export default {
  title: 'TODOLISTS/EditableSpan',
  component: EditableSpan,
  argTypes: {
    onChange: {
      description: 'Value EditableSpan changed'
    },
    value: {
      defaultValue: 'HTML',
      description: 'Start value EditableSpan'
    }
  }
} as Meta;

const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args} />;

export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
  onChange: action('Value EditableSpan changed')
}


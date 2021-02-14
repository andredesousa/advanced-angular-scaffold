import { Story, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { ButtonComponent } from './button.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
  clicked: action('clicked'),
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Button',
  clicked: action('clicked'),
};

export const Large = Template.bind({});

Large.args = {
  size: 'large',
  label: 'Button',
  clicked: action('clicked'),
};

export const Small = Template.bind({});

Small.args = {
  size: 'small',
  label: 'Button',
  clicked: action('clicked'),
};

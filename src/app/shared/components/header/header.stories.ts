import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';

import { ButtonComponent } from '../button/button.component';
import { HeaderComponent } from './header.component';

export default {
  title: 'Example/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const LoggedIn = Template.bind({});

LoggedIn.args = {
  user: {},
  loggedOut: action('loggedOut'),
};

export const LoggedOut = Template.bind({});

LoggedOut.args = {
  loggedIn: action('loggedIn'),
  createAccount: action('createAccount'),
};

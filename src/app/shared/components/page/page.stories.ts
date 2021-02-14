import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ButtonComponent } from '../button/button.component';
import { HeaderComponent } from '../header/header.component';
import { PageComponent } from './page.component';

import * as HeaderStories from '../header/header.stories';

export default {
  title: 'Example/Page',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, HeaderComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<PageComponent> = (args: PageComponent) => ({
  component: PageComponent,
  props: args,
});

export const LoggedIn = Template.bind({});

LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});

LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

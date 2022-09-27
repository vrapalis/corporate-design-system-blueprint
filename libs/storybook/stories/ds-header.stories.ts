import {Meta} from "@storybook/html";
import {within} from "@storybook/testing-library";
import {expect} from "@storybook/jest"

export default {
  title: 'Components/Header',
  argTypes: {
    headerTitle: {
      type: 'string',
      description: 'Header title'
    },
  }
} as Meta;

const Template = (args) => `<ds-header>${args.headerTitle}</ds-header>`;

export const defaultHeaderStory = Template.bind({});
defaultHeaderStory.storyName = 'Default';
defaultHeaderStory.args = {
  headerTitle: 'Header Title'
}
defaultHeaderStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/jCq7fNX5Aq2Su2zRkawri3/Angular-Material-UI-Kit-(Community)?node-id=66%3A714'
  }
};
defaultHeaderStory.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText(defaultHeaderStory.args.headerTitle);


  await expect(label).toBeTruthy();
};

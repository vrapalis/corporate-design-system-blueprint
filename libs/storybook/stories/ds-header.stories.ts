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

export const defaultStory = Template.bind({});
defaultStory.storyName = 'Default';
defaultStory.args = {
  headerTitle: 'Header Title'
}
defaultStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/jCq7fNX5Aq2Su2zRkawri3/Angular-Material-UI-Kit-(Community)?node-id=66%3A714'
  }
};
defaultStory.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText(defaultStory.args.headerTitle);


  await expect(label).toBeTruthy();
};

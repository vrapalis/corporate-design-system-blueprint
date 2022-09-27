import {Meta} from "@storybook/html";
import {within} from "@storybook/testing-library";
import {expect} from "@storybook/jest"

export default {
  title: 'Components/Footer',
  argTypes: {
    footerTitle: {
      type: 'string',
      description: 'Footer title'
    },
  }
} as Meta;

const Template = (args) => `<ds-footer>${args.footerTitle}</ds-footer>`;

export const defaultFooterStory = Template.bind({});
defaultFooterStory.storyName = 'Default';
defaultFooterStory.args = {
  footerTitle: 'Footer Title'
}
defaultFooterStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/jCq7fNX5Aq2Su2zRkawri3/Angular-Material-UI-Kit-(Community)?node-id=66%3A714'
  }
};
defaultFooterStory.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText(defaultFooterStory.args.footerTitle);


  await expect(label).toBeTruthy();
};

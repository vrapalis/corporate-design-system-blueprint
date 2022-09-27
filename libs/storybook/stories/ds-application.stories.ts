import {Meta} from "@storybook/html";
import {within} from "@storybook/testing-library";
import {expect} from "@storybook/jest"

export default {
    title: 'Components/Application',
    argTypes: {
        footerTitle: {
            type: 'string',
            description: 'Footer title'
        },
        headerTitle: {
            type: 'string',
            description: 'Header title'
        }
    }
} as Meta;

const Template = (args) => `
<ds-application></ds-application>
<script>
    el = document.querySelector('ds-application');
    el.headerTitle = "${args.headerTitle}";
    el.footerTitle = "${args.footerTitle}";
</script>
`;

export const defaultApplicationStory = Template.bind({});
defaultApplicationStory.storyName = 'Default';
defaultApplicationStory.args = {
    headerTitle: 'Header Title',
    footerTitle: 'Footer Title'
}
defaultApplicationStory.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/jCq7fNX5Aq2Su2zRkawri3/Angular-Material-UI-Kit-(Community)?node-id=66%3A714'
    }
};


import {defineCustomElements} from "@vrapalis/core-components/loader";
import {addDecorator, addParameters} from "@storybook/html";
import {INITIAL_VIEWPORTS, DEFAULT_VIEWPORT} from "@storybook/addon-viewport";
import {withA11y} from "@storybook/addon-a11y";


defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: DEFAULT_VIEWPORT,
  },
  options: {
    // panelPosition: 'right',
    // storySort: (a, b) =>
    //   a[1].kind === b[1].kind
    //     ? 0
    //     : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  inline: true,
});

// Storybook Decorators
// ============================================
addDecorator(withA11y);
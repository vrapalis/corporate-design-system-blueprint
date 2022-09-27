module.exports = {
  stories: [
      "../stories/intro.stories.mdx",
    "../stories/*.stories.mdx",
    "../stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  core: {
    builder: 'webpack5'
  },
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  features: {
    previewMdx2: true,
    interactionsDebugger: true, // 👈 Enable playback controls
  },
  framework: "@storybook/html"
}
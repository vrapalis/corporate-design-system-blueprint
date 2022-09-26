module.exports = {
  "stories": [
      "../stories/intro.stories.mdx",
    "../**/**/*.stories.mdx",
    "../**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/html"
}
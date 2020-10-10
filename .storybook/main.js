module.exports = {
  stories: [
    '../README.md',
    '../stories/**/*.stories.{js,md,mdx}',
    '../packages/*/README.md',
    '../packages/*/stories/**/*.stories.{js,md,mdx}',
  ],
  addons: [
    'storybook-prebuilt/addon-knobs/register.js',
    'storybook-prebuilt/addon-docs/register.js',
    'storybook-prebuilt/addon-viewport/register.js',
    'storybook-prebuilt/addon-a11y/register.js',
    'storybook-prebuilt/theming',
  ],
  esDevServer: {
    // custom es-dev-server options
    nodeResolve: true,
    watch: true,
    open: true,
  },
};

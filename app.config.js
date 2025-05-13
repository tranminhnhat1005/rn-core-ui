export default ({ config }) => ({
  ...config,
  name: 'Estuary Core UI',
  slug: 'estuary-core-ui',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});

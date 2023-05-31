import routes from './routes';
import locales from './locales';

const menu = {
  parent: 'workspace',
  name: 'devops',
  title: 'DEVOPS_PROJECT_PL',
  icon: 'strategy-group',
  order: 1,
  desc: 'DEVOPS_DESCRIPTION',
  skipAuth: true,
};

const extensionConfig = {
  routes,
  menus: [menu],
  locales,
};

globals.context.registerExtension(extensionConfig);

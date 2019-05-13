import { i18n } from '@kbn/i18n';

export default function(kibana) {
  return new kibana.Plugin({
    require: ['kibana', 'elasticsearch', 'xpack_main', 'interpreter'],
    name: 'react_360',
    uiExports: {
      app: {
        title: 'React 360',
        description: 'A test of React 360',
        main: 'plugins/react_360/app',
      },
      interpreter: ['plugins/react_360/functions', 'plugins/react_360/renderers'],
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) {
      // eslint-disable-line no-unused-vars
      const xpackMainPlugin = server.plugins.xpack_main;
      if (xpackMainPlugin) {
        const featureId = 'react_360';

        xpackMainPlugin.registerFeature({
          id: featureId,
          name: i18n.translate('react360.featureRegistry.featureName', {
            defaultMessage: 'react-360',
          }),
          navLinkId: featureId,
          icon: 'questionInCircle',
          app: [featureId, 'kibana'],
          catalogue: [],
          privileges: {
            all: {
              api: [],
              savedObject: {
                all: [],
                read: [],
              },
              ui: ['show'],
            },
            read: {
              api: [],
              savedObject: {
                all: [],
                read: [],
              },
              ui: ['show'],
            },
          },
        });
      }
    },
  });
}

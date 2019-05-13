import { functionsRegistry } from 'plugins/interpreter/registries';

const globe = () => ({
  name: 'globe',
  aliases: [],
  type: 'render',
  context: {
    types: ['datatable'],
  },
  help: 'testing',
  args: {},
  fn: context => {
    return {
      type: 'render',
      as: 'globe',
      value: {},
    };
  },
});

const functions = [globe];

functions.forEach(r => {
  functionsRegistry.register(r);
});

export default functions;

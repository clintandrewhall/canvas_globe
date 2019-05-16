import {
  ContextFunction,
  Datatable,
  Render,
} from '../../../../x-pack/plugins/canvas/canvas_plugin_src/functions/types';

export function globe(): ContextFunction<'globe', Datatable, {}, Render<any>> {
  return {
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
        value: {
          data: context,
        },
      };
    },
  };
}

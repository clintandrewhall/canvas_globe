import {
  ContextFunction,
  Filter,
  Datatable,
  DatatableColumn,
  DatatableRow,
} from '../../../../x-pack/plugins/canvas/canvas_plugin_src/functions/types';

import data from './location_data.json';

export function location_demodata(): ContextFunction<'location_demodata', Filter, {}, Datatable> {
  return {
    name: 'location_demodata',
    aliases: [],
    type: 'datatable',
    help: 'Location demodata',
    context: {
      types: ['filter'],
    },
    args: {},
    fn: () => {
      const columns: DatatableColumn[] = [
        { name: '@timestamp', type: 'date' },
        { name: 'name', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'state', type: 'string' },
        { name: 'postalCode', type: 'string' },
        { name: 'lat', type: 'number' },
        { name: 'lng', type: 'number' },
      ];

      const rows: DatatableRow[] = data.map(row => {
        const { created, ...rest } = row;
        return {
          timestamp: new Date(row.created).getTime(),
          ...rest,
        };
      });

      return {
        type: 'datatable',
        columns,
        rows,
      };
    },
  };
}

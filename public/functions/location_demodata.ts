import {
  ContextFunction,
  Filter,
  Datatable,
  DatatableColumn,
  DatatableRow,
} from '../../../../x-pack/plugins/canvas/canvas_plugin_src/functions/types';
import { queryDatatable } from '../../../../x-pack/plugins/canvas/common/lib/datatable/query';

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
    fn: context => {
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
        const { created, location, name, city, state } = row;
        return {
          '@timestamp': created,
          lat: location.lat,
          lng: location.lng,
          city: city || '??',
          state: state || '??',
          name,
        };
      });

      return queryDatatable(
        {
          type: 'datatable',
          columns,
          rows,
        },
        context
      );
    },
  };
}

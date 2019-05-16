// @ts-ignore
import { functionsRegistry } from 'plugins/interpreter/registries';
import { globe } from './globe';
import { location_demodata } from './location_demodata';

const functions = [globe, location_demodata];

functions.forEach(r => {
  functionsRegistry.register(r);
});

export default functions;

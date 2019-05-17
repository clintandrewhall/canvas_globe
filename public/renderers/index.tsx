// @ts-ignore
import { renderersRegistry } from 'plugins/interpreter/registries';
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'EventEmitter';

const _emitter = new EventEmitter();

import '!!script-loader!../components/globe/build/client.bundle';

export const globe = () => ({
  name: 'globe',
  displayName: 'Earth',
  help: 'Give me the world',
  height: 150,
  reuseDomNode: true,
  async render(domNode, config, handlers) {
    const { data } = config;
    const { rows } = data;

    const locations = rows.map(row => {
      const { name, lat, lng } = row;
      return { name, lat, lng };
    });

    domNode.innerHTML = '';

    window.React360.init('../360/build/index.bundle.js', domNode, {
      assetRoot: '../360/static_assets/',
      initialProps: { locations },
    });
  },
});

const renderFunctions = [globe];

renderFunctions.forEach(r => {
  renderersRegistry.register(r);
});

export default renderFunctions;

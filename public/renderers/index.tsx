// @ts-ignore
import { renderersRegistry } from 'plugins/interpreter/registries';
import React from 'react';
import ReactDOM from 'react-dom';

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

    try {
      localStorage.setItem('r360-location-data', JSON.stringify(locations));
      console.log('Saved: ', locations);
    } catch (error) {
      console.log('Error saving data: ', error);
    }

    window.React360.init('../360/build/index.bundle.js', domNode, {
      assetRoot: '../360/static_assets/',
    });
  },
});

const renderFunctions = [globe];

renderFunctions.forEach(r => {
  renderersRegistry.register(r);
});

export default renderFunctions;

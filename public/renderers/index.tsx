import { renderersRegistry } from 'plugins/interpreter/registries';
import React from 'react';
import ReactDOM from 'react-dom';

export const globe = () => ({
  name: 'globe',
  displayName: 'Earth',
  help: 'Give me the world',
  height: 150,
  reuseDomNode: true,
  render(domNode, config, handlers) {
    ReactDOM.render(<div>hello world</div>, domNode, () => handlers.done());

    handlers.onDestroy(() => {
      ReactDOM.unmountComponentAtNode(domNode);
    });
  },
});

const renderFunctions = [globe];

renderFunctions.forEach(r => {
  renderersRegistry.register(r);
});

export default renderFunctions;

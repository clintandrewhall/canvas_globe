// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location } from 'react-360-web';
import NativeModule from './native-module';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: false,
    nativeModules: [ctx => new NativeModule(ctx)],
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToLocation(
    r360.createRoot('canvas_globe', {
      /* initial props */
    }),
    // r360.getDefaultSurface()
    new Location([0, 0, 0])
  );

  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('star_bg.jpg'));
}

window.React360 = { init };

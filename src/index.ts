import { App } from 'vue';

import * as components from './components';

const FormikLibrary = {
  install(app: App) {
    for (const componentKey in components) {
      app.use((components as any)[componentKey]);
    }
  },
};

export default FormikLibrary;

export * from './components';

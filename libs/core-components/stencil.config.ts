import {Config} from '@stencil/core';
import {angularOutputTarget} from '@stencil/angular-output-target';
import {reactOutputTarget as react} from '@stencil/react-output-target';
// TODO CREATE VUE LIB
// import {vueOutputTarget} from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'core-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'vrapalis-core-components',
      directivesProxyFile: '../angular-components/projects/component-library/src/lib/generated/components.ts',
      directivesArrayFile: '../angular-components/projects/component-library/src/lib/generated/index.ts',
    }),

    react({
      componentCorePackage: 'vrapalis-core-components',
      proxiesFile: '../react-components/src/components/generated/index.ts',
      includeDefineCustomElements: true,
    }),

    // TODO CREATE VUE LIB
    // vueOutputTarget({
    //   componentCorePackage: 'vrapalis-core-components',
    //   proxiesFile: '../vue-components/src/components/components.ts',
    // })
  ],
};

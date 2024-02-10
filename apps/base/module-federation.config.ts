import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'base',

  exposes: {
    './Test': './src/app/Test.tsx',
  },
};

export default config;

import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run mehrzweck:serve',
        production: 'nx run mehrzweck:preview',
      },
      ciWebServerCommand: 'nx run mehrzweck:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

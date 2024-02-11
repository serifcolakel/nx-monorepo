/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const baseConfig = require('../../tailwind.config');

const relativePathToRemoteApplication = join(
  __dirname,
  'apps/base',
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ...baseConfig?.content || [],
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
    ...createGlobPatternsForDependencies(relativePathToRemoteApplication),
  ],
  ...baseConfig,
};

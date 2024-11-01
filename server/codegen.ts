
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/schema.graphql",
  "require": [
    "ts-node/register"
  ],
  generates: {
    "./src/__generated__/resolver-types.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers"
      ],
      config: {
        useIndexSignature: true,
        // Providing MyContext interface ensures the context type's is set
        // for all of resolvers.
        // This file path starts from the location of the file
        // where you generate types (i.e., `./src/__generated__/resolver-types.ts` above)
        contextType: "../resolvers#MyContext"
      }
    }
  }
};

export default config;

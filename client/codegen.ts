
import type { CodegenConfig } from '@graphql-codegen/cli';

const schema_url = `http://localhost:${process.env.PORT || 4000}`;
console.log("schema endpoint url:", schema_url);

const config: CodegenConfig = {
  overwrite: true,
  schema: schema_url,
  documents: "src/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql"
      }
    },
    "src/__generated__/schema-types.ts": {
        plugins: [
            "typescript",
            "typescript-operations"
        ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;

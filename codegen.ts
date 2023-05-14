import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: "http://127.0.0.1:4000/graphql",
  schema: "http://167.235.150.40:4000/graphql",
  documents: "src/**/*.tsx",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/gql/": {
      preset: "client",
    },
  },
};

export default config;

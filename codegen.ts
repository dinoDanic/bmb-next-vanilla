import { graphqlApi } from "./src/helpers/api";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: graphqlApi,
  documents: "src/**/*.graphql",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/gql/": {
      preset: "client",
    },
  },
};

export default config;

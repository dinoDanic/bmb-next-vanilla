export const graphqlApi =
  process.env.NODE_ENV === "production"
    ? (process.env.NEXT_PUBLIC_GRAPHQL_API as string)
    : "http://0.0.0.0:4000/graphql";

import { gql, ApolloServer } from 'apollo-server-micro';

const typeDefs = gql``;

const resolvers = {};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: 'api/graphql' });

export const config = { api: { bodyParser: false } };

export default handler;

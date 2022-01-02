import { gql, ApolloServer } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const typeDefs = gql`
  type User {
    id: String
    email: string
  }
`;

const resolvers = {};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: 'api/graphql' });

export const config = { api: { bodyParser: false } };

export default handler;

// this should be replaced

import { objectType, queryType, mutationType, makeSchema } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import path from 'path';

const Query = queryType({
  definition(t) {
    t.list.field('allUsers', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany({});
      }
    });
    t.crud.user();
    t.crud.users();
  }
});

const Mutation;

const Post;

const User;

const GQLDate;

export const schema = makeSchema({
  types: [Query, Mutation, Post, User, GQLDate],
  outputs: {
    typegen: path.join(process.cwd(), 'generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated/schema.graphql')
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

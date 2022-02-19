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

export const schema = makeSchema({
  types: [Query],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql')
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma'
      },
      {
        source: path.join(process.cwd(), 'graphql', 'context.ts'),
        alias: 'Context'
      }
    ]
  }
});

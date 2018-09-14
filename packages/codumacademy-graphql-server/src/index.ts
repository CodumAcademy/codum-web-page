import { GraphQLServer } from 'graphql-yoga';
import db from "./models/sequalize";

import { generateSchema } from "./utils/schema-generator";

require('dotenv').config();

// Generar schema y resolvers con crud basandose en archivos schema.ts de los modelos
const { typeDefs, resolvers, authProtection } = generateSchema();

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db
  }),
  middlewares: [authProtection]
});

server.start(() => console.log(`Server is running on http://localhost:4000`))

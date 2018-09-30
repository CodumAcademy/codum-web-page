import { typeDefinitions as appTypeDefinitions } from "../models/app-schema";
import defaultResolvers from "../models/crud-resolvers";

const path = require("path");
const glob = require("glob");

export const generateSchema = () => {
  let typeDefs = [];
  let allQueries = [];
  let allResolvers = { Query: {}, Mutation: {} };
  let allAuthProtection = { Query: {}, Mutation: {} };
  let allMutations = [];

  // Buscar todos los archivos con el nombre "schema.ts" destro de models
  const schemas = glob.sync(path.join(__dirname, "..", "models", "**", "schema.ts"))

  // Cada archivo tendrá el schema graphql del modelo
  // Se uniran los schemas en uno solo para pasarlo a graphql-yoga
  schemas.forEach(file => {

    let { typeDefinitions, queries, resolvers, mutations, Model, authProtection } = require(path.resolve(file));

    const { crudResolver, crudSchemaResolver, crudSchemaTypeDef, crudAuthProtection } = defaultResolvers(Model, authProtection);

    /*
      schemas crud para mutations y query
      Ej:
        Mutations
          addCountry(data: CountryInput): Country
          updateCountry(state: CountryInput!, id: Int!): Country
          destroyCountry(id: Int!): AppMessage
        Query
          countries: [Country]
    */
    const { defaultSchemaQuery, defaultSchemaMutations } = crudSchemaResolver();

    // Combinar schemas del actual archivo con los generados para el crud
    queries += defaultSchemaQuery + "\r";
    mutations += defaultSchemaMutations + "\r";

    //
    typeDefinitions += crudSchemaTypeDef + "\r";

    // Combinar schema del actual archivo con el schema final
    typeDefs.push(typeDefinitions)
    allMutations.push(mutations)
    allQueries.push(queries)

    /*
      Generar resolvers crud
      Ej:
        Mutations
          addCountry = AsyncFunc
          updateCountry = AsyncFunc
          destroyCountry = AsyncFunc
        Query
          countries = AsyncFunc
          getCountry = AsyncFunc
    */
    const {
      defaultQueryResolvers,
      defaultMutationResolvers,
      associationsResolver
    } = crudResolver();

    // Asignar crud resolvers a objeto final de resolvers
    Object.assign(allResolvers.Query, defaultQueryResolvers);
    Object.assign(allResolvers.Mutation, defaultMutationResolvers);


    // Asignar resolvers de associations
    if(!allResolvers[Model.name])
      allResolvers[Model.name] = {}
    Object.assign(allResolvers[Model.name], associationsResolver);


    // Asignal la protección por autenticación
    const protection = crudAuthProtection();
    if(!allAuthProtection[Model.name])
      allAuthProtection[Model.name] = {}

    Object.assign(allAuthProtection.Query, protection.Query);
    Object.assign(allAuthProtection.Mutation, protection.Mutation);
    Object.assign(allAuthProtection[Model.name], protection[Model.name]);


    // Agregar y sobreescribir resolvers del archivo a objeto de resolvers final
    Object.keys(resolvers).forEach(key => {

      if(!allResolvers[key])
        allResolvers[key] = {}

      Object.assign(allResolvers[key], resolvers[key])

    });

  });


  const mergedSchema = `
    ${appTypeDefinitions}
    ${typeDefs.join('\r')}
    type Query {
      ${allQueries.join('\r')}
    }
    type Mutation {
      ${allMutations.join('\r')}
    }
  `;

  return {
    typeDefs: mergedSchema,
    resolvers: allResolvers,
    authProtection: allAuthProtection
  };

};

import CRUDRepository from "../repositories/CRUDRepository";
import { firstLetterToLowerCase } from "../utils/strings";
import { authProtection } from "../utils/auth";


export const crudResolver = crudRepository => {
  const modelName = crudRepository.modelName;
  const tableName = firstLetterToLowerCase(crudRepository.tableName);
  const modelAssociations = crudRepository.associations;

  const associationsResolver = Object.keys(modelAssociations).reduce((accumulator, association) => {
    const { foreignKey,  associationType, target, source } = modelAssociations[association];

    // repository para modelo de la association
    const targetRepository = new CRUDRepository(target);

    // resolver segun tipo de association
    switch(associationType) {
      case "BelongsTo": {
        accumulator[association] = async data => {
          return await targetRepository.findOne({
            id: data[foreignKey]
          })
        }
        break;
      }
      case "HasMany": {
        accumulator[association] = async data => {
          const query = {
            [foreignKey]: data.id || data.dataValues.id
          };
          const { rows } = await targetRepository.getAll(query,[], 1, null);

          return rows || [];
        }
        break;
      }
      default: {
        // programar otros casos
      }

    }
    return accumulator;
  }, {});

  let defaultMutationResolvers = {};

  if (modelName !== "User") {
    defaultMutationResolvers = {
      [`add${modelName}`]: async (_, args) =>
        await crudRepository.create(args.data),

      [`update${modelName}`]: async (_, args) =>
        await crudRepository.update(args.id, args.data)
    }
  }

  return {
    defaultMutationResolvers: {
      ...defaultMutationResolvers,
      [`destroy${modelName}`]: async (_, args) =>
        await crudRepository.destroy(args.id)
    },
    defaultQueryResolvers: {
      [tableName]: async (_, { query = "{}", orderBy = "[]", page, perPage}) => {
        return await crudRepository.getAll(
          JSON.parse(query),
          JSON.parse(orderBy),
          page,
          perPage
        );
      },
      [`get${modelName}`]: async (_, { query = "{}" }) => {
        return await crudRepository.findOne(JSON.parse(query));
      }

    },

    associationsResolver
  }
}

export const crudSchemaResolver = Model => {
  const modelName = Model.modelName;
  const tableName = firstLetterToLowerCase(Model.tableName);
  let ifNotUser = "";

  // Generando mutaciones por defecto
  if (modelName !== "User") {
      ifNotUser = `
        add${modelName}(data: ${modelName}Input): ${modelName}
        update${modelName}(data: ${modelName}Input!, id: Int!): ${modelName}
      `;
  }
  return {
    defaultSchemaMutations: `
      ${ifNotUser}
      destroy${modelName}(id: Int!): Boolean
    `,
    defaultSchemaQuery: `
      ${tableName}(page: Int, perPage: Int, query: String, orderBy: String): ${modelName}Results
      get${modelName}(query: String): ${modelName}
    `
  };
}

const crudAuthProtection = (modelName, tableName, protectionConfig) => {
  const output = {
    Query: {...protectionConfig.Query},
    Mutation: {...protectionConfig.Mutation},
    [modelName]: {
      ...protectionConfig[modelName]
    }
  };

  const { crud } = protectionConfig;

  const mutations = Object.keys(crud).forEach(item => {
    if (!crud[item]) return;

    if (item === "read")
      Object.assign(output.Query, {
        [tableName]: authProtection,
        [`get${modelName}`]: authProtection
      });
    else
      Object.assign(output.Mutation, {
        [`${item}${modelName}`]: authProtection
      })

    return item;
  });

  return output;
}

export default (Model, protectionConfig) => {
  const modelName = Model.name;
  const tableName = firstLetterToLowerCase(Model.tableName);
  const crudRepository = new CRUDRepository(Model);
  return {
    crudResolver: () => crudResolver(crudRepository),
    crudSchemaResolver: () => crudSchemaResolver(crudRepository),
    crudAuthProtection: () => crudAuthProtection(modelName, tableName, protectionConfig),
    crudSchemaTypeDef: `
      type ${modelName}Results {
        page: Int
        perPage: Int
        count: Int
        rows: [${modelName}]
      }
    `
  }
}

import db from "../models/sequalize";

export default class CRUDRepository {
    private model;
    public modelName;
    public tableName;
    public associations;

    constructor(Model) {
      this.model = Model;
      this.modelName = Model.name;
      this.tableName = Model.getTableName();
      this.associations = Model.associations;
    }

    public async create(data) {
      return await this.model.create(data)
    }

    public async getAll(query = {}, order = [], page = 1, nPerPage = 20) {
      const perPage = nPerPage === 0 ? null : nPerPage;
      const offset = (page * perPage) - perPage;

      const result = await this.model.findAndCount({
        where: query,
        order,
        offset,
        limit: perPage
      });

      const rows = await result.rows.map(modelInstance => modelInstance.dataValues);

      return {
        count: result.count,
        page,
        perPage: perPage,
        rows
      };
    }

    public async findOne(query) {

      return await this.model.findOne({ where: query })
    }

    public async update(id, data) {
      const updated = await this.model.update(data, { where: { id }})
      if (updated)
        return await this.findOne({ id })
    }

    public async destroy(id) {
      return await this.model.destroy({ where: { id }})
    }
}

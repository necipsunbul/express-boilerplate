class BaseService {
    model;
    constructor(model) {
        this.model = model
    }
    async saveToDb(data){
        const result = new this.model(data);
        return result.save();
    }

    async findById(id){
        return this.model.findById(id)
    }
    async find(cond = {},fields = {}){
        return this.model.find(cond,fields);
    }

    async findOne(cond = {},fields = {}){
        return this.model.findOne(cond,fields)
    }
    async updateOne(cond,data){
        const result = await this.model.updateOne(cond,data);
        return result.modifiedCount;
    }
    async deleteOne(cond){
        const result = await this.model.deleteOne(cond);
        return result.deletedCount;
    }
}

module.exports = BaseService;
class BaseService {
    model;
    constructor(model) {
        this.model = model
    }
    saveToDb(data){
        const result = new this.model(data);
        return result.save();
    }

    findById(id){
        return this.model.findById(id)
    }

    find(cond = {},fields = {}){
        return this.model.find(cond,fields);
    }

    findOne(cond = {},fields = {}){
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
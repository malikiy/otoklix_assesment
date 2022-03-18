const services = require("../util/factoryHandler");
const model = require("../prismaInstance/modelDeclarator")
const otoModel = model.model

exports.create = services.createOne(otoModel);
exports.getAll = services.getAll(otoModel);
exports.getDataById = services.getOne(otoModel);
exports.updateDataById = services.updateOne(otoModel);
exports.delete = services.deleteOne(otoModel);

//asdas
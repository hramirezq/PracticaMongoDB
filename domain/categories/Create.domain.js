const CodegymError = require('../../commons/errors/Codegym')
const CategoryRepository = require('../../infrastructure/Category.repository')

const domainCategoryCreate = {}

domainCategoryCreate.run = (data) => {
    domainCategoryCreate.validate(data)
    const category = CategoryRepository.createCategory(data)
    return category
}

domainCategoryCreate.validate = (data) => {
    try{
        if (!data.name){
            throw new CodegymError(400, 1, 11, "Ingrese un nombre válido");
        }
        if (!data.description){
            throw new CodegymError(400, 1, 11, "Ingrese una descripción válida");
        }
    } catch (error){
        throw new CodegymError(
            400,
            0,
            10,
            "Error interno al validar los campos de la categoria"
        );
    }
}

module.exports = domainCategoryCreate;
const CodegymError = require('../../commons/errors/Codegym')
const CategoryRepository = require('../../infrastructure/Category.repository')

const domainCategoryFindById = {}

domainCategoryFindById.run = (idCategory) => {
    domainCategoryFindById.validate(idCategory)
    const category = CategoryRepository.getById(idCategory)
    return category
}

domainCategoryFindById.validate = (idCategory) => {
    try{
        if (!idCategory){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
        }
        categoryExists = CategoryRepository.getById(idCategory)
        if (!categoryExists){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
        }
    } catch (error){
        throw new CodegymError(
            400,
            0,
            10,
            "Error interno al validar los campos"
        );
    }
}

module.exports = domainCategoryFindById;
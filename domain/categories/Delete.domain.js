const CodegymError = require('../../commons/errors/Codegym')
const CategoryRepository = require('../../infrastructure/Category.repository')

const domainCategoryDelete = {}

domainCategoryDelete.run = (id) => {
    domainCategoryDelete.validate(id)
    CategoryRepository.deleteCategory(id)
}

domainCategoryDelete.validate = async (id) => {
    try{
        const categoryExists = await CategoryRepository.getById(id)
        if(!categoryExists){
            throw new CodegymError(400, 1, 11, "No existe la categoria");
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

module.exports = domainCategoryDelete;
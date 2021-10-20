const CodegymError = require('../../commons/errors/Codegym')
const CategoryRepository = require('../../infrastructure/Category.repository')

const domainCategoryUpdate = {}

domainCategoryUpdate.run = (id, data) => {
    domainCategoryUpdate.validate(id, data)
    const category = CategoryRepository.updateCategory(id, data)
    return category
}

domainCategoryUpdate.validate = async (id, data) => {
    try{
        if (!data.name){
            throw new CodegymError(400, 1, 11, "Ingrese un nombre válido");
        }
        if (!data.description){
            throw new CodegymError(400, 1, 11, "Ingrese una descripción válida");
        }
        const categoryExists = await CategoryRepository.getById(id)
        if(!categoryExists){
            throw new CodegymError(400, 1, 11, "Dicha categoria no existe");
        }
        console.log(categoryExists);
    } catch (error){
        throw new CodegymError(
            400,
            0,
            10,
            "Error interno al validar los campos"
        );
    }
}

module.exports = domainCategoryUpdate;
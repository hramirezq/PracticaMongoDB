const CodegymError = require('../../commons/errors/Codegym')
const TagRepository = require('../../infrastructure//Tag.repository')

const domainTagDelete = {}

domainTagDelete.run = (id) => {
    domainTagDelete.validate(id)
    TagRepository.deleteTag(id)
}

domainTagDelete.validate = async (id) => {
    try{
        const tagExists = await TagRepository.getById(id)
        if(!tagExists){
            throw new CodegymError(400, 1, 11, "No existe el tag");
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

module.exports = domainTagDelete;
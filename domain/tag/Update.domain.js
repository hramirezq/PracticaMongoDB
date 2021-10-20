const CodegymError = require('../../commons/errors/Codegym')
const TagRepository = require('../../infrastructure//Tag.repository')

const domainTagUpdate = {}

domainTagUpdate.run = (id, data) => {
    domainTagUpdate.validate(id, data)
    const tag = TagRepository.updateTag(id, data)
    return tag
}

domainTagUpdate.validate = async (id, data) => {
    try{
        if (!data.name){
            throw new CodegymError(400, 1, 11, "Ingrese un estado válido");
        }
        if (!data.description){
            throw new CodegymError(400, 1, 11, "Ingrese una descripción válida");
        }
        const tagExists = TagRepository.getById(id)
        if (!tagExists){
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

module.exports = domainTagUpdate;
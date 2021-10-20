const CodegymError = require('../../commons/errors/Codegym')
const TagRepository = require('../../infrastructure//Tag.repository')

const domainTagFindById = {}

domainTagFindById.run = (id) => {
    domainTagFindById.validate(id)
    const tag = TagRepository.getById(id)
    return tag
}

domainTagFindById.validate = (id) => {
    try{
        if (!id){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
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

module.exports = domainTagFindById;
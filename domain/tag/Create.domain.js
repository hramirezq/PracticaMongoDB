const CodegymError = require('../../commons/errors/Codegym')
const TagRepository = require('../../infrastructure//Tag.repository')

const domainTagCreate = {}

domainTagCreate.run = (data) => {
    domainTagCreate.validate(data)
    const tag = TagRepository.createTag(data)
    return tag
}

domainTagCreate.validate = (data) => {
    try{
        if (!data.name){
            throw new CodegymError(400, 1, 11, "Ingrese el nombre");
        }
        if (!data.description){
            throw new CodegymError(400, 1, 11, "Ingrese una descripción válida");
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

module.exports = domainTagCreate;
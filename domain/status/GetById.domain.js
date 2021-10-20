const CodegymError = require('../../commons/errors/Codegym')
const StatusRepository = require('../../infrastructure/Status.repository')

const domainStatusFindById = {}

domainStatusFindById.run = (id) => {
    domainStatusFindById.validate(id)
    const status = StatusRepository.getById(id)
    return status
}

domainStatusFindById.validate = (id) => {
    try{
        if (!id){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
        }
        const statusExists = StatusRepository.getById(id)
        if (!statusExists){
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

module.exports = domainStatusFindById;
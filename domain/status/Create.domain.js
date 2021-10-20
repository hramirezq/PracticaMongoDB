const CodegymError = require('../../commons/errors/Codegym')
const StatusRepository = require('../../infrastructure/Status.repository')

const domainStatusCreate = {}

domainStatusCreate.run = (data) => {
    domainStatusCreate.validate(data)
    const status = StatusRepository.createStatus(data)
    return status
}

domainStatusCreate.validate = (data) => {
    try{
        if (!data.status){
            throw new CodegymError(400, 1, 11, "Ingrese el estado");
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

module.exports = domainStatusCreate;
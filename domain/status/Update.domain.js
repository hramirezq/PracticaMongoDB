const CodegymError = require('../../commons/errors/Codegym')
const StatusRepository = require('../../infrastructure/Status.repository')

const domainStatusUpdate = {}

domainStatusUpdate.run = (id, data) => {
    domainStatusUpdate.validate(id, data)
    const status = StatusRepository.updateStatus(id, data)
    return status
}

domainStatusUpdate.validate = async (id, data) => {
    try{
        if (!data.status){
            throw new CodegymError(400, 1, 11, "Ingrese un estado válido");
        }
        if (!data.description){
            throw new CodegymError(400, 1, 11, "Ingrese una descripción válida");
        }
        const statusExists = await StatusRepository.getById(id)
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

module.exports = domainStatusUpdate;
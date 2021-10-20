const CodegymError = require('../../commons/errors/Codegym')
const StatusRepository = require('../../infrastructure/Status.repository')

const domainStatusDelete = {}

domainStatusDelete.run = (id) => {
    domainStatusDelete.validate(id)
    StatusRepository.deleteStatus(id)
}

domainStatusDelete.validate = async (id) => {
    try{
        const statusExists = await StatusRepository.getById(id)
        if(!statusExists){
            throw new CodegymError(400, 1, 11, "No existe el estado");
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

module.exports = domainStatusDelete;
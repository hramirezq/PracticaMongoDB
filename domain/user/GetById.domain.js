const CodegymError = require('../../commons/errors/Codegym')
const UserRepository = require('../../infrastructure/User.repository')

const domainUserFindById = {}

domainUserFindById.run = (id) => {
    domainUserFindById.validate(id)
    const user = UserRepository.getById(id)
    return user
}

domainUserFindById.validate = (id) => {
    try{
        if (!id){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
        }
        const userExists = UserRepository.getById(id)
        if (!userExists){
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

module.exports = domainUserFindById;